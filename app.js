/**
 * @module test
 * @description A simple HTTP server that serves the content of 'index.html' on port 3000.
 */
const http = require('http');
const fs = require('fs');
/**
 * @constant {number} PORT - The port number the server will listen on.
 */
const PORT = 3000;

/**
 * Creates the HTTP server instance.
 * This server listens for all incoming requests and serves the static 'index.html' file.
 * @type {http.Server}
 */
const server = http.createServer((req, res) => {
  // Set response headers: 200 OK and content type as HTML.
  res.writeHead(200, { 'content-type': 'text/html' });

  // Create a readable stream from 'index.html' and pipe its content directly to the response.
  fs.createReadStream('index.html').pipe(res);
});

/**
 * Starts the HTTP server listening on the defined PORT.
 * Logs a confirmation message to the console with the server's URL.
 */
server.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
// Note: I also wrapped server.listen in a callback to ensure the console log runs *after* the server successfully starts.

