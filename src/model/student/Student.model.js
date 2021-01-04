const { StudentSchema } = require("./Student.schema");

const insertStudent = (studentObj) => {
  return new Promise((resolve, reject) => {
    try {
      StudentSchema(studentObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getStudents = (clientId) => {
  return new Promise((resolve, reject) => {
    try {
      StudentSchema.find({ clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getStudentById = (_id, clientId) => {
  return new Promise((resolve, reject) => {
    try {
      StudentSchema.find({ _id, clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const deleteStudent = ({ _id, clientId }) => {
    return new Promise((resolve, reject) => {
      try {
        StudentSchema.findOneAndDelete({ _id, clientId })
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  };

  module.exports = {
    insertStudent,
    getStudents,
    getStudentById,
    deleteStudent,
  };