<?php
require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

function fail(string $msg, int $code = 400): void
{
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

function ok(array $data = []): void
{
    echo json_encode(array_merge(['ok' => true], $data), JSON_UNESCAPED_UNICODE);
    exit;
}

function read_json(string $file, array $default): array
{
    if (!file_exists($file)) {
        return $default;
    }
    $data = json_decode((string) file_get_contents($file), true);
    return is_array($data) ? $data : $default;
}

function write_json(string $file, array $data): void
{
    if (!is_dir(dirname($file))) {
        mkdir(dirname($file), 0755, true);
    }
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$action = $_GET['action'] ?? '';
$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    $body = [];
}

function logged_in(): bool
{
    return !empty($_SESSION['hatz_admin']);
}

if ($action === 'login') {
    $pass = (string) ($body['password'] ?? '');
    if ($pass !== '' && password_verify($pass, ADMIN_PASSWORD_HASH)) {
        session_regenerate_id(true);
        $_SESSION['hatz_admin'] = true;
        ok();
    }
    fail('Invalid password', 401);
}

if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    ok();
}

if (!logged_in()) {
    fail('Not authenticated', 401);
}

switch ($action) {
    case 'session':
        ok();
        break;

    case 'posts':
        $data = read_json(BLOGS_FILE, ['posts' => []]);
        ok(['posts' => $data['posts'] ?? []]);
        break;

    case 'save_post':
        $posts = read_json(BLOGS_FILE, ['posts' => []])['posts'] ?? [];
        $in = $body['post'] ?? null;
        if (!is_array($in) || empty($in['ar']['title']) || empty($in['en']['title'])) {
            fail('Title is required in both languages');
        }
        $id = (int) ($in['id'] ?? 0);
        if ($id <= 0) {
            $id = 1;
            foreach ($posts as $p) {
                if ((int) $p['id'] >= $id) {
                    $id = (int) $p['id'] + 1;
                }
            }
        }
        $post = [
            'id' => $id,
            'imageUrl' => (string) ($in['imageUrl'] ?? ''),
            'ar' => [
                'date' => (string) ($in['ar']['date'] ?? ''),
                'category' => (string) ($in['ar']['category'] ?? ''),
                'title' => (string) $in['ar']['title'],
                'excerpt' => (string) ($in['ar']['excerpt'] ?? ''),
            ],
            'en' => [
                'date' => (string) ($in['en']['date'] ?? ''),
                'category' => (string) ($in['en']['category'] ?? ''),
                'title' => (string) $in['en']['title'],
                'excerpt' => (string) ($in['en']['excerpt'] ?? ''),
            ],
        ];
        $found = false;
        foreach ($posts as $i => $p) {
            if ((int) $p['id'] === $id) {
                $posts[$i] = $post;
                $found = true;
                break;
            }
        }
        if (!$found) {
            $posts[] = $post;
        }
        usort($posts, fn($a, $b) => (int) $b['id'] <=> (int) $a['id']);
        write_json(BLOGS_FILE, ['posts' => $posts]);
        ok(['post' => $post]);
        break;

    case 'delete_post':
        $posts = read_json(BLOGS_FILE, ['posts' => []])['posts'] ?? [];
        $id = (int) ($body['id'] ?? 0);
        $posts = array_values(array_filter($posts, fn($p) => (int) $p['id'] !== $id));
        write_json(BLOGS_FILE, ['posts' => $posts]);
        ok();
        break;

    case 'settings':
        $settings = read_json(SETTINGS_FILE, []);
        ok(['settings' => $settings]);
        break;

    case 'save_settings':
        $settings = read_json(SETTINGS_FILE, []);
        foreach (['contactEmail', 'jobsEmail', 'displayEmail', 'displayPhone'] as $key) {
            if (array_key_exists($key, $body)) {
                $val = trim((string) $body[$key]);
                if (in_array($key, ['contactEmail', 'jobsEmail', 'displayEmail'], true) && $val !== '' && !filter_var($val, FILTER_VALIDATE_EMAIL)) {
                    fail("Invalid email for $key");
                }
                $settings[$key] = $val;
            }
        }
        write_json(SETTINGS_FILE, $settings);
        ok(['settings' => $settings]);
        break;

    case 'change_password':
        $current = (string) ($body['current'] ?? '');
        $new = (string) ($body['new'] ?? '');
        if (!password_verify($current, ADMIN_PASSWORD_HASH)) {
            fail('Current password is incorrect', 403);
        }
        if (strlen($new) < 8) {
            fail('New password must be at least 8 characters');
        }
        $hash = password_hash($new, PASSWORD_DEFAULT);
        $file = __DIR__ . '/config.php';
        $contents = (string) file_get_contents($file);
        $updated = preg_replace(
            "/const ADMIN_PASSWORD_HASH\s*=\s*'[^']*';/",
            "const ADMIN_PASSWORD_HASH = '$hash';",
            $contents,
            1
        );
        if ($updated === null || $updated === $contents) {
            fail('Could not update password file', 500);
        }
        if (file_put_contents($file, $updated) === false) {
            fail('Could not write password file', 500);
        }
        ok();
        break;

    case 'messages':
        $data = read_json(SUBMISSIONS_FILE, ['messages' => []]);
        ok(['messages' => $data['messages'] ?? []]);
        break;

    case 'delete_message':
        $data = read_json(SUBMISSIONS_FILE, ['messages' => []]);
        $id = (string) ($body['id'] ?? '');
        $data['messages'] = array_values(array_filter($data['messages'] ?? [], fn($m) => (string) ($m['id'] ?? '') !== $id));
        write_json(SUBMISSIONS_FILE, $data);
        ok();
        break;

    default:
        fail('Unknown action', 404);
}
