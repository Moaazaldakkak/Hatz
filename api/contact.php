<?php
/**
 * Public form handler for the contact and careers forms.
 * Stores every submission in data/submissions.json and emails the
 * configured receiver address from data/settings.json.
 */
header('Content-Type: application/json; charset=utf-8');

function respond(array $data, int $code = 200): void
{
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

$type = $_POST['type'] ?? 'contact';
$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$expertise = trim((string) ($_POST['expertise'] ?? ''));
$cvLink = trim((string) ($_POST['cv_link'] ?? ''));

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['ok' => false, 'error' => 'missing_fields'], 422);
}

if ($subject === '') {
    $subject = $type === 'jobs' ? 'HATZ — Job Application' : 'HATZ — Contact Form';
}

$settings = [];
$settingsFile = __DIR__ . '/../data/settings.json';
if (file_exists($settingsFile)) {
    $parsed = json_decode((string) file_get_contents($settingsFile), true);
    if (is_array($parsed)) {
        $settings = $parsed;
    }
}

$receiver = $type === 'jobs' && !empty($settings['jobsEmail'])
    ? $settings['jobsEmail']
    : ($settings['contactEmail'] ?? '');

if ($receiver === '') {
    respond(['ok' => false, 'error' => 'no_receiver'], 500);
}

$extra = $type === 'jobs' && $expertise !== '' ? "Expertise: $expertise\n" : '';
if ($type === 'jobs' && $cvLink !== '') {
    $extra .= "CV link: $cvLink\n";
}

$body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
if ($extra !== '') {
    $body .= "\n\n$extra";
}

$subsFile = __DIR__ . '/../data/submissions.json';
$subs = ['messages' => []];
if (file_exists($subsFile)) {
    $parsed = json_decode((string) file_get_contents($subsFile), true);
    if (is_array($parsed) && isset($parsed['messages'])) {
        $subs = $parsed;
    }
}
array_unshift($subs['messages'], [
    'id' => uniqid('m', true),
    'type' => $type,
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'extra' => $extra !== '' ? rtrim($extra) : '',
    'time' => date('c'),
]);
file_put_contents($subsFile, json_encode($subs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Respond before sending mail so a slow SMTP doesn't stall the form.
$out = json_encode(['ok' => true]);
header('Content-Type: application/json; charset=utf-8');
header('Content-Length: ' . strlen($out));
echo $out;
if (function_exists('fastcgi_finish_request')) {
    fastcgi_finish_request();
} elseif (function_exists('flush')) {
    @ob_end_flush();
    @flush();
}

$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
@mail($receiver, $subject, $body, $headers);
exit;
