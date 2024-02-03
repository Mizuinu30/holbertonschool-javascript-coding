const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile); // Promisify readFile for cleaner async/await usage

/**
 * Reads a database file and organizes students by field.
 *
 * @param {string} path - The path to the database file.
 * @return {Promise<Object>} - A promise that resolves to an object with
 * student first names categorized by field.
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    readFile(path, { encoding: 'utf8' })
      .then((data) => {
        try {
          // Split the data into lines
          const lines = data.trim().split('\n');

          // Ensure there's more than just the header
          if (lines.length <= 1) {
            throw new Error('No student data found.');
          }

          // Remove the header line
          const [, ...students] = lines;

          // Initialize an object to hold students categorized by field
          const studentsByField = {};

          // Iterate over each student
          students.forEach((line) => {
            const [firstName, , field] = line.split(',');

            // Initialize the field array if not already present
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }

            // Add the student's first name to the appropriate field
            studentsByField[field].push(firstName);
          });

          // Resolve the promise with the categorized students
          resolve(studentsByField);
        } catch (error) {
          // Reject the promise if there's an error
          reject(error);
        }
      })
      .catch((error) => {
        // Handle file read errors
        reject(error);
      });
  });
}

module.exports = readDatabase;
