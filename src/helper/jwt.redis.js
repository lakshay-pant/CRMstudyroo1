const redis = require("redis");
const client = redis.createClient(process.env.REDIS_URL);

client.on("error", function (error) {
  console.error(error);
});

const setJWT = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      return client.set(key, value, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = {
    setJWT,
    
    
  };