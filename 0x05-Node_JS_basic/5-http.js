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
        output += 'This is the list of our students\n';
        output += `${msg}\n`;
      };

      await countStudents(dataBase);

      console.log = originalConsoleLog;

      if (output.endsWith('\n')) {
        output = output.slice(0, -1);
      }
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
