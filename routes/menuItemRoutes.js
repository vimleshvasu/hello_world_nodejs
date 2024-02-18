const express= require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem")

router.post("/", async(req,res) => {
  try{
    const value = req.body;

    const newMenuItem = new MenuItem(value);

    const response = await newMenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "server error"})
  }
});

router.get("/", async(req,res) => {
  try{
    const value = await MenuItem.find();
    console.log("data fetched success");
    res.status(200).json(value)
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "server error"})
  }
})


router.get("/:tasteType", async(req, res) => {
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == "sweet" || tasteType == "spice" || tasteType == "sour"){
      const value = await MenuItem.find({taste:tasteType});
      console.log("data fetched success");
      res.status(200).json(value)
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "server error"})
  }
})



// update operation
router.put("/:id", async(req,res) => {
  try{
    const menuId = req.params.id
    const updateMenu = req.body

    const response = await MenuItem.findByIdAndUpdate(menuId, updateMenu,{
      new:true,  // return the updated content 
      runValidators:true   //Run mongoose validation
    })

    if(!response) {
      return res.status(400).json({error:"person not found"});
    }

    console.log("data updated");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: "server error"})
  }
})



// delete operation  
router.delete("/:id",async(req,res) => {
  try{
    const menuId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuId);
    if(!response) {
      return res.status(400).json({error:"person not found"});
    }
    console.log("data deleted");
    res.status(200).json({message: "person deleted successfully"})
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error hai bhai"})
  }
})


module.exports = router