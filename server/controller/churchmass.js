const db = require("../models")

const ChurchMass = db.churchmass;




exports.create = async(req, res)=>{
    try {
       const {mass_name}  = req.body

       await ChurchMass.create({
        mass_name
       })

       return res.status(201).json({message: "Mass Created succesfully"})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

exports.getAll = async(req, res)=>{
    try {
       const data = await ChurchMass.findAll();
       
       return res.status(201).json(data)
    } catch (error) {
       res.status(500).json({message: "Server Error"}) 
    }
}


exports.getById = async (req,res) =>{
    try {
        const id = req.params.id;

        const  data = await ChurchMass.findOne({where: {id: id}})

        return res.status(201).json(data);
    } catch (error) {
       res.status(500).json({message: "Server Error"}) 
    }
}

exports.update = async (req,res) =>{
    try {
        const id = req.paramms.id

        const data = await ChurchMass.update(req.body, {where: {id: id}})
        return res.status(201).json(data);
    } catch (error) {
       res.status(500).json({message: "Server Error"}) 
    }
}