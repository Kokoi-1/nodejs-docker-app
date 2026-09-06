const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node.js Docker App</title>
      </head>
      <body>
        <h1>Hello from My Node.js Docker App! 🚀</h1>
        <p>My Node.js application is running successfully.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});