<?php
/**
 * Admin configuration. Change the initial password after first login
 * from the dashboard (Settings -> Change password).
 */
const ADMIN_PASSWORD_HASH = '$2y$10$Ud/n9qEBEKIEUpTpO4tWEOp8mWkt43ZFw8u4GNO8c24FiJII4V1Rq';

const DATA_DIR = __DIR__ . '/../data';
const BLOGS_FILE = DATA_DIR . '/blogs.json';
const SETTINGS_FILE = DATA_DIR . '/settings.json';
const SUBMISSIONS_FILE = DATA_DIR . '/submissions.json';
