const express = require("express");
const router = express.Router();
const {
  insertTask,
  getTasks,
  getTaskById,
  deleteTask
  
} = require("../model/tasks/Tasks.model");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");


router.all("/", (req, res, next) => {
  // res.json({ message: "return form task router" });

  next();
});

// create new task
router.post("/",userAuthorization, async (req, res) => {
    const {TaskName,cars,DueDate,Taskdetails,student,usergroup,offices} = req.body;
  
    try {
        const userId = req.userId;
  
      const newUserObj = {
        clientId: userId,TaskName,cars,DueDate,Taskdetails,student,usergroup,offices
      };
      const result = await insertTask(newUserObj);
      console.log(result);
  
      if (result._id) {
        return res.json({
          status: "success",
          message: "New task has been added!",
        });
      }

      res.json({
        status: "error",
        message: "Unable to add new task , please try again later",
      })
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  });
// Get all tasks 
router.get("/", userAuthorization, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await getTasks(userId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

// Get specific task by id 
router.get("/:_id", userAuthorization, async (req, res) => {
  try {
    const { _id } = req.params;

    const clientId = req.userId;
    const result = await getTaskById(_id, clientId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//update task record


router.patch("/:_id",userAuthorization,async(req,res)=>{
  try{ const clientId = req.userId;
    const { _id } = req.params;

    var {TaskName,cars,DueDate,Taskdetails,student,usergroup,offices}=req.body
  
    const taskProf =  await getTaskById(_id, clientId);
    taskProf.TaskName=TaskName?TaskName:taskProf.TaskName
    taskProf.cars=cars?cars:taskProf.cars
    taskProf.DueDate=DueDate?DueDate:taskProf.DueDate
    taskProf.Taskdetails=Taskdetails?Taskdetails:taskProf.Taskdetails
    taskProf.student=student?student:taskProf.student
    taskProf.usergroup=usergroup?usergroup:taskProf.usergroup
    taskProf.offices=offices?offices:taskProf.offices

    
    
const result=await insertTask(taskProf)

    res.json({ message: "task updated", result })
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

    const result = await deleteTask({ _id, clientId });

    return res.json({
      status: "success",
      message: "The task record has been deleted",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;
