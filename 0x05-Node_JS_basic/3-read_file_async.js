const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(`./${path}`, { encoding: 'utf8' });
    const rows = data.trim().split('\n');
    console.log(`Number of students: ${rows.length - 1}`);
    const parsedData = rows.map((row) => row.split(','));
    const fieldArr = [];
    for (let i = 1; i < parsedData.length; i += 1) {
      if (!fieldArr.includes(parsedData[i][3])) {
        fieldArr.push(parsedData[i][3]);
      }
    }
    const countStud = { nameCs: [], nameSwe: [] };
    for (let i = 1; i < parsedData.length; i += 1) {
      if (fieldArr.includes(parsedData[i][3]) && parsedData[i][3] in countStud) {
        countStud[parsedData[i][3]] += 1;
      } else {
        countStud[parsedData[i][3]] = 1;
      }
      if (parsedData[i][3] === 'CS') {
        countStud.nameCs = countStud.nameCs.concat([parsedData[i][0]]);
      } else {
        countStud.nameSwe = countStud.nameSwe.concat([parsedData[i][0]]);
      }
    }
    console.log(`Number of students in ${fieldArr[0]}: ${countStud.CS}. List: ${countStud.nameCs.join(', ')}`);
    console.log(`Number of students in ${fieldArr[1]}: ${countStud.SWE}. List: ${countStud.nameSwe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
