const http = require('http');
const countStudents = require('./3-read_file_async');

const dataBase = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const { url } = request;

  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      let output = '';

      const originalConsoleLog = console.log;

      console.log = (msg) => {
        output += `${msg}\n`;
      };

      await countStudents(dataBase);

      console.log = originalConsoleLog;

      response.end(output);
    } catch (err) {
      response.statusCode = 500;
      response.end('Cannot load the database');
    }
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});
app.listen(1245, () => {});

module.exports = app;
