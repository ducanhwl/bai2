const http = require('http');

const PORT = 3000;

// Thông tin sinh viên — thay bằng thông tin của bạn
const student = {
  name: 'Nguyễn Văn An',
  id: '20210001',
  class: 'CNTT-K64',
  school: 'Đại học UNT'
};

const server = http.createServer((req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>404 - Không tìm thấy trang</h1>');
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thông tin sinh viên - Bài 2</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    .card {
      background: #fff;
      padding: 48px 64px;
      border-radius: 16px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.25);
      text-align: center;
      max-width: 480px;
    }
    h1 { color: #4f46e5; margin-bottom: 24px; font-size: 26px; }
    .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #e5e7eb; }
    .row:last-child { border-bottom: none; }
    .label { color: #6b7280; font-weight: 500; }
    .value { color: #111827; font-weight: 600; }
    .badge { margin-top: 24px; display: inline-block; padding: 6px 14px; border-radius: 999px; background: #eef2ff; color: #4338ca; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🎓 Thông tin sinh viên</h1>
    <div class="row"><span class="label">Họ tên</span><span class="value">${student.name}</span></div>
    <div class="row"><span class="label">MSSV</span><span class="value">${student.id}</span></div>
    <div class="row"><span class="label">Lớp</span><span class="value">${student.class}</span></div>
    <div class="row"><span class="label">Trường</span><span class="value">${student.school}</span></div>
    <div class="badge">Served by bai2 · Node.js thuần</div>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`✅ bai2 đang chạy tại: http://localhost:${PORT}`);
});