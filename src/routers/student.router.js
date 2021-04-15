const express = require("express");
const router = express.Router();

const {
  insertStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  getAllStudents
  
} = require("../model/student/Student.model");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");

const {
  getUserNameById
} = require("../model/user/User.model");




router.all("/", (req, res, next) => {
  // res.json({ message: "return form ticket router" });

  next();
});

// create new student record
router.post("/",userAuthorization, async (req, res) => {
    const { firstName,middleName,lastName,userName,birthday,gender,nationality, email,onShorePhone,offShorePhone,salesPipeline,salesStatus,heatLevel,note,addedAt } = req.body;
  
    try {
        const userId = req.userId;
        const userName= await getUserNameById(userId)
  
      const newUserObj = {
        clientId: userId,
        userName:userName,
        firstName,
        middleName,lastName,birthday,gender,email,onShorePhone,offShorePhone,salesPipeline,salesStatus,heatLevel,note,nationality
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

//Get all students
router.get("/all-students", async (req, res) => {
  try {
    
    const result = await getAllStudents();

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

    var {firstName,
      middleName,lastName,birthday,gender,nationality,email,onShorePhone,offShorePhone,salesPipeline,salesStatus,heatLevel,note
      }=req.body
  
    const userProf =  await getStudentById(_id, clientId);
    userProf.firstName=firstName?firstName:userProf.firstName
    userProf.middleName=middleName?middleName:userProf.middleName
    userProf.lastName=lastName?lastName:userProf.lastName
    userProf.birthday=birthday?birthday:userProf.birthday
    userProf.gender=gender?gender:userProf.gender
    userProf.onShorePhone=onShorePhone?onShorePhone:userProf.onShorePhone
    userProf.offShorePhone=offShorePhone?offShorePhone:userProf.offShorePhone
    userProf.salesPipeline=salesPipeline?salesPipeline:userProf.salesPipeline
    userProf.salesStatus=salesStatus?salesStatus:userProf.salesStatus
    userProf.heatLevel=heatLevel?heatLevel:userProf.heatLevel
    userProf.note=note?note:userProf.note
    userProf.nationality=nationality?nationality:userProf.nationality
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