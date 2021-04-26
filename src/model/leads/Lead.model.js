const { LeadSchema } = require("./Lead.schema");

const insertLead = (LeadObj) => {
  return new Promise((resolve, reject) => {
    try {
      LeadSchema(LeadObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getLeads = (clientId) => {
  return new Promise((resolve, reject) => {
    try {
      LeadSchema.find({ clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getAllLeads = () => {
  return new Promise((resolve, reject) => {
    try {
      LeadSchema.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const getLeadById = (_id, clientId) => {
  return new Promise((resolve, reject) => {
    try {
      LeadSchema.findOne({ _id, clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const deleteLead = ({ _id, clientId }) => {
    return new Promise((resolve, reject) => {
      try {
        LeadSchema.findOneAndDelete({ _id, clientId })
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  };

  module.exports = {
    insertLead,
    getLeads,
    getLeadById,
    deleteLead,
    getAllLeads
  };