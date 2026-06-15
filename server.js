/**
 * @file server.js
 * @module server
 * @description Minimal, dependency-free HTTP server built solely on the Node.js
 * built-in `http` module. Binds to the IPv4 loopback interface 127.0.0.1 on port 3000
 * and responds to EVERY request — regardless of HTTP method or URL path — with an
 * identical `200 OK` plain-text "Hello, World!\n" payload. This is a deliberate
 * catch-all: there is no routing, no 404 handling, and no error handling.
 *
 * Run with: `node server.js`
 *
 * Source: server.js:L1-L14
 */
const http = require('http');

/**
 * IPv4 loopback address the server binds to. Loopback-only means the server is
 * reachable solely from the local machine and is not exposed on the network.
 *
 * @constant {string}
 * Source: server.js:L3
 */
const hostname = '127.0.0.1';

/**
 * TCP port the server listens on. Hard-coded (not configurable via environment
 * variables). The byte-identical submodule server uses this same port, so the two
 * servers cannot run simultaneously without a port conflict (EADDRINUSE).
 *
 * @constant {number}
 * Source: server.js:L4
 */
const port = 3000;

/**
 * HTTP request handler invoked once per incoming request.
 *
 * Ignores the request method, URL, headers, and body and unconditionally returns the
 * same response: status `200`, `Content-Type: text/plain`, and the body
 * "Hello, World!\n". This catch-all behavior applies to all methods and all paths.
 *
 * @param {http.IncomingMessage} req - The inbound request object (not inspected).
 * @param {http.ServerResponse} res - The outbound response used to send the reply.
 * @returns {void} Nothing is returned; the response is written via `res.end()`.
 * Source: server.js:L6-L10
 */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

/**
 * Startup callback for `server.listen`. Runs once the server has successfully bound
 * to `hostname:port` and logs a confirmation line to stdout:
 * `Server running at http://127.0.0.1:3000/`.
 *
 * @returns {void}
 * Source: server.js:L12-L14
 */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
