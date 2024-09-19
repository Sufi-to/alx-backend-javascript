const readDatabase = require('../utils');

const formatNames = (names) => names.join(', ');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);

      const output = [
        'This is the list of our students',
        `Number of students in CS: ${cs.length}. List: ${formatNames(cs)}`,
        `Number of students in SWE: ${swe.length}. List: ${formatNames(swe)}`,
      ].join('\n');

      response.status(200).send(output);
    } catch (err) {
      console.error('Error loading database:', err);
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const majorUpper = major.toUpperCase();

    if (!['CS', 'SWE'].includes(majorUpper)) {
      return response.status(400).send('Major parameter must be CS or SWE');
    }

    try {
      const databasePath = process.argv[2];
      if (!databasePath) {
        return response.status(500).send('Database path not provided');
      }

      const { cs, swe } = await readDatabase(databasePath);
      const students = majorUpper === 'CS' ? cs : swe;

      return response.status(200).send(`List: ${formatNames(students)}`);
    } catch (err) {
      console.error('Error loading database:', err);
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
