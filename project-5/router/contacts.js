const express = require('express');
const Contact = require('../db');
const router = express.Router();

router.get('/', async (req,res)=>{
    const allContact = await Contact.find({});
    if (allContact) {
        return res.json({
         allContact,
        })
    }else{
        return res.json({
            message:"didnot find the data"
        })
    }
})

router.post('/', async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const PhoneNumber = req.body.PhoneNumber;

    const AddContact = await Contact.create({
            name,
            email,
            PhoneNumber
    });
    if(AddContact){
        return res.json({
            message:"Contact Created"
        })
    }else{
        return res.json({
            message:"Contact Not Created"
        })
    }
})
 router.put('/:id', async (req,res)=>{
    const id = req.params.id;
    const UpdateContact = await Contact.updateOne({_id : id},req.body);

    res.json({
        message: "updated successfully"
    })
 })

 router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    const deleteContact = await Contact.deleteOne({ _id : id})

    if(deleteContact){
        return res.json({
            message:"Contact deleted"
        })
    }else{
        return res.json({
            message:"Contact Not deleted"
        })
    }
 })


module.exports = router;