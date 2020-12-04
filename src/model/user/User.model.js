const User=require("./User.schema")


const insertUser = (userObj) => {
    return new Promise((resolve, reject) => {
      User(userObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  const storeUserRefreshJWT = (_id, token) => {
    return new Promise((resolve, reject) => {
      try {
        User.findOneAndUpdate(
          { _id },
          {
            $set: { "refreshT.token": token, "refreshT.addedAt": Date.now() },
          },
          { new: true }
        )
          .then((data) => resolve(data))
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  

module.exports={insertUser,storeUserRefreshJWT}
