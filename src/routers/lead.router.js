const express = require("express");
const router = express.Router();

const {
  insertLead,
  getLeads,
  getLeadById,
  deleteLead,
  getAllLeads
  
} = require("../model/leads/Lead.model");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");

const {
  getUserNameById
} = require("../model/user/User.model");




router.all("/", (req, res, next) => {
  // res.json({ message: "return form lead router" });

  next();
});

// create new student record
router.post("/",userAuthorization, async (req, res) => {
    const { firstName,middleName,lastName,birthday,gender,nationality, email,onShorePhone,offShorePhone,heatLevel,onShoreLocation,OffShoreLocation,refferalSource,shoreStatus} = req.body;
  
    try {
        const userId = req.userId;
        const userName= await getUserNameById(userId)
  
      const newUserObj = {
        clientId: userId,
        userName:userName,
        firstName,
        middleName,lastName,birthday,gender,email,onShorePhone,offShorePhone,heatLevel,nationality,onShoreLocation,OffShoreLocation,refferalSource,shoreStatus
      };
      const result = await insertLead(newUserObj);
      console.log(result);
  
      if (result._id) {
        return res.json({
          status: "success",
          message: "New Lead has been added!",
        });
      }

      res.json({
        status: "error",
        message: "Unable to add new Lead , please try again later",
      })
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  });
// Get all Leads
router.get("/", userAuthorization, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await getLeads(userId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//Get all leads
router.get("/all-leads", async (req, res) => {
  try {
    
    const result = await getAllLeads();

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
    const result = await getLeadById(_id, clientId);

    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//update Lead record


router.patch("/:_id",userAuthorization,async(req,res)=>{
  try{ const clientId = req.userId;
    const { _id } = req.params;

    var {userName,
      firstName,
      middleName,lastName,birthday,gender,email,onShorePhone,offShorePhone,heatLevel,nationality,onShoreLocation,OffShoreLocation,refferalSource,shoreStatus
      }=req.body
  
    const userProf =  await getLeadById(_id, clientId);
    userProf.firstName=firstName?firstName:userProf.firstName
    userProf.middleName=middleName?middleName:userProf.middleName
    userProf.lastName=lastName?lastName:userProf.lastName
    userProf.birthday=birthday?birthday:userProf.birthday
    userProf.gender=gender?gender:userProf.gender
    userProf.email=email?email:userProf.email
    userProf.onShorePhone=onShorePhone?onShorePhone:userProf.onShorePhone
    userProf.offShorePhone=offShorePhone?offShorePhone:userProf.offShorePhone
    userProf.heatLevel=heatLevel?heatLevel:userProf.heatLevel
    userProf.nationality=nationality?nationality:userProf.nationality
    userProf.userName=userName?userName:userProf.userName
    userProf.onShoreLocation=onShoreLocation?onShoreLocation:userProf.onShoreLocation
    userProf.OffShoreLocation=OffShoreLocation?OffShoreLocation:userProf.OffShoreLocation
    userProf.refferalSource=refferalSource?refferalSource:userProf.refferalSource
    userProf.shoreStatus=shoreStatus?shoreStatus:userProf.shoreStatus

    
    
const result=await insertLead(userProf)

    res.json({ message: "Lead updated", result })
  }catch (error) {
    console.log(error);
    res.json({ status: "error", message: error.message });
  }

  
  


})



// Delete a Lead record
router.delete("/:_id", userAuthorization, async (req, res) => {
  try {
    const { _id } = req.params;
    const clientId = req.userId;

    const result = await deleteLead({ _id, clientId });

    return res.json({
      status: "success",
      message: "The Lead record has been deleted",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;