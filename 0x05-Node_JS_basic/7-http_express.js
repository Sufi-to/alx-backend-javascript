const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const dataB = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const pathToFile = dataB;

  try {
    let output = '';
    const originalConsoleLog = console.log;

    console.log = (msg) => {
      output += 'This is the list of our students\n';
      output += `${msg}\n`;
    };

    await countStudents(pathToFile);

    console.log = originalConsoleLog;

    res.send(output);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {});

module.exports = app;
