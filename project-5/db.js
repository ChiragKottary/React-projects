const mongoose= require('mongoose');

const uri = 'mongodb+srv://ckottary18:4ajza709nmavk4wr@cluster0.fdjdxav.mongodb.net/contact'; 


mongoose.connect(uri).then(()=>{
    console.log("connected...");
}).catch(()=>{
    console.log("not connected...");
})

const ContactSchema =new  mongoose.Schema({
    name: String,
    email : String,
    PhoneNumber : Number
});

const Contact = mongoose.model("contact",ContactSchema);

module.exports = Contact;
