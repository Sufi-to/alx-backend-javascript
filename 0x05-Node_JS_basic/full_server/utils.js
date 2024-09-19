const fs = require('fs');

const fieldName = (data) => {
  const result = { cs: [], swe: [] };
  data.slice(1).forEach((line) => {
    const [firstName, , , field] = line.split(',');
    if (field === 'CS') {
      result.cs.push(firstName);
    } else if (field === 'SWE') {
      result.swe.push(firstName);
    }
  });
  return result;
};

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, res) => {
    if (err) return reject(new Error('Cannot load the database'));
    return resolve(fieldName(res.split('\n')));
  });
});

module.exports = readDatabase;
