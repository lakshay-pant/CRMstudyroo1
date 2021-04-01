const { taskSchema } = require("./Tasks.Schema");

const insertTask = (taskObj) => {
  return new Promise((resolve, reject) => {
    try {
      taskSchema(taskObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getTasks = (clientId) => {
  return new Promise((resolve, reject) => {
    try {
      taskSchema.find({ clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getTaskById = (_id, clientId) => {
  return new Promise((resolve, reject) => {
    try {
      taskSchema.findOne({ _id, clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTask = ({ _id, clientId }) => {
    return new Promise((resolve, reject) => {
      try {
        taskSchema.findOneAndDelete({ _id, clientId })
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  };

  module.exports = {
    insertTask,
    getTasks,
    getTaskById,
    deleteTask,

  };
