const express = require("express");
const router = express.Router();
const {
  insertStudent,
  getStudents,
  getStudentById,
  deleteStudent
  
} = require("../model/student/Student.model");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");


router.all("/", (req, res, next) => {
  // res.json({ message: "return form ticket router" });

  next();
});

// create new student record
router.post("/",userAuthorization, async (req, res) => {
    const { name, nationality, phone, email } = req.body;
  
    try {
        const userId = req.userId;
  
      const newUserObj = {
        clientId: userId,
        name,
        nationality,
        phone,
        email
      };
      const result = await insertStudent(newUserObj);
      console.log(result);
  
      if (result._id) {
        return res.json({
          status: "success",
          message: "New student has been added!",
        });
      }

      res.json({
        status: "error",
        message: "Unable to add new student , please try again later",
      })
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  });
// Get all students 
router.get("/", userAuthorization, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await getStudents(userId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

// Get specific student by id 
router.get("/:_id", userAuthorization, async (req, res) => {
  try {
    const { _id } = req.params;

    const clientId = req.userId;
    const result = await getStudentById(_id, clientId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//update student record


router.patch("/:_id",userAuthorization,async(req,res)=>{
  try{ const clientId = req.userId;
    const { _id } = req.params;

    var {name,
      nationality,
      phone,
      email,
      }=req.body
  
    const userProf =  await getStudentById(_id, clientId);
    userProf.name=name?name:userProf.name
    userProf.nationality=nationality?nationality:userProf.nationality
    userProf.phone=phone?phone:userProf.phone
    userProf.email=email?email:userProf.email

    
    
const result=await insertStudent(userProf)

    res.json({ message: "student updated", result })
  }catch (error) {
    console.log(error);
    res.json({ status: "error", message: error.message });
  }

  
  


})



// Delete a student record
router.delete("/:_id", userAuthorization, async (req, res) => {
  try {
    const { _id } = req.params;
    const clientId = req.userId;

    const result = await deleteStudent({ _id, clientId });

    return res.json({
      status: "success",
      message: "The student record has been deleted",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;