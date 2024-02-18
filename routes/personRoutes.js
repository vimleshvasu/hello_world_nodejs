const express = require("express");
const router = express.Router();
const Person = require("../models/Person");


router.post("/", async (req, res) => {
  try {
    const data = req.body;

    // create a new person document using the mongoose model
    const newPerson = new Person(data);

    // save the new Person to the database
    const response = await newPerson.save()
    console.log("data saved")
    res.status(200).json(response)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({error:"internal server error"})
  }
});

// get method to get the person data
router.get('/', async(req, res) => {
    try{
        const data = await Person.find();
        console.log("data fetched successfully")
        res.status(200).json(data)    
    }
    catch (err) {
        console.log(err)
        res.status(500).json({error:"internal server error"})
      }
})

// parameterised url parameters
router.get("/:workType", async(req,res) => {
  try{
    const workType =  req.params.workType 
    if(workType == "chef" || workType == "manager" || workType == "waiter"){
      const response = await Person.find({work:workType});
      console.log("response fetched");
      res.status(200).json(response);
    }
    else{
      res.status(400).json({error:"invalid work type"})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:"internal error"});
  }
})

module.exports = router;