<?php
/**
 * Code17.Tech — Lead & Contact Dispatcher via Resend API
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name    = htmlspecialchars(trim($data['name'] ?? 'Anonymous'));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$company = htmlspecialchars(trim($data['company'] ?? 'N/A'));
$phone   = htmlspecialchars(trim($data['phone'] ?? 'N/A'));
$service = htmlspecialchars(trim($data['service'] ?? 'General Inquiry'));
$message = htmlspecialchars(trim($data['message'] ?? 'No message body provided.'));
$source  = htmlspecialchars(trim($data['source'] ?? 'Website Contact Form'));

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Valid email address is required.']);
    exit;
}

$resend_api_key = getenv('RESEND_API_KEY') ?: 're_CctZ5jRL_CgzfwbJPVoGitbA43niDQviS';

$html_body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8f9fa; margin: 0; padding: 24px; color: #1B1F24; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e4e7ec; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: #0A0D12; padding: 24px 32px; border-bottom: 2px solid #00DDBA; }
    .badge { display: inline-block; background: rgba(0, 221, 186, 0.15); color: #00DDBA; font-family: monospace; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; margin-bottom: 8px; }
    .title { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; }
    .content { padding: 32px; }
    .field-row { margin-bottom: 18px; border-bottom: 1px solid #f2f4f7; padding-bottom: 12px; }
    .field-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; }
    .field-val { font-size: 15px; font-weight: 600; color: #0f172a; }
    .field-val a { color: #7000FF; text-decoration: none; }
    .msg-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e4e7ec; text-align: center; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <div class='badge'>NEW INCOMING LEAD</div>
      <h1 class='title'>Code17.Tech — {$service}</h1>
    </div>
    <div class='content'>
      <div class='field-row'>
        <div class='field-label'>Contact Name</div>
        <div class='field-val'>{$name}</div>
      </div>
      <div class='field-row'>
        <div class='field-label'>Work Email (Click to reply)</div>
        <div class='field-val'><a href='mailto:{$email}'>{$email}</a></div>
      </div>
      <div class='field-row'>
        <div class='field-label'>Company</div>
        <div class='field-val'>{$company}</div>
      </div>
      <div class='field-row'>
        <div class='field-label'>Phone / Messenger</div>
        <div class='field-val'>{$phone}</div>
      </div>
      <div class='field-row'>
        <div class='field-label'>Service of Interest</div>
        <div class='field-val' style='color: #7000FF;'>{$service}</div>
      </div>
      <div class='field-row' style='border-bottom: none;'>
        <div class='field-label'>Message / Problem Description</div>
        <div class='msg-box'>{$message}</div>
      </div>
    </div>
    <div class='footer'>
      Source: {$source} &bull; Received at " . date('Y-m-d H:i:s T') . " &bull; IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "
    </div>
  </div>
</body>
</html>
";

$resend_payload = [
    'from'     => 'Code17 Portal <contact@code17.tech>',
    'to'       => ['info@code17.tech'],
    'bcc'      => ['emrahcan@hotmail.com'],
    'reply_to' => $email,
    'subject'  => "[Code17 Lead] {$name} ({$company}) - {$service}",
    'html'     => $html_body,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($resend_payload));
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_err = curl_error($ch);
curl_close($ch);

if ($curl_err) {
    http_response_code(500);
    echo json_encode(['error' => 'cURL error: ' . $curl_err]);
    exit;
}

if ($http_code >= 200 && $http_code < 300) {
    $resp_json = json_decode($response, true);
    echo json_encode([
        'success' => true,
        'message' => 'Lead successfully delivered to Code17 team.',
        'resend_id' => $resp_json['id'] ?? null
    ]);
} else {
    http_response_code($http_code);
    echo json_encode([
        'error' => 'Resend API returned an error',
        'details' => json_decode($response, true) ?: $response
    ]);
}
