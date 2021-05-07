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

const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    try {
      StudentSchema.find()
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
      StudentSchema.findOne({ _id, clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getStudentAllUsersById = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      StudentSchema.findOne( {_id})
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

  const deleteAllUserStudent = ({ _id }) => {
    return new Promise((resolve, reject) => {
      try {
        StudentSchema.findOneAndDelete({ _id })
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
    getAllStudents,
    getStudentAllUsersById,
    deleteAllUserStudent
  };