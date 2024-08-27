import { AddTemplate } from "../components/AddTemplate";
import { IoClose } from "react-icons/io5";
import { addContact, emailValue, nameValue } from "../store/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

export function AddContact(){
    
    const SetAddContact= useSetRecoilState(addContact);
    const [name,setName]= useRecoilState(nameValue);
    const [email,setEmail] = useRecoilState(emailValue)
    function addContactDetails(){
        axios.post('http://localhost:3000/api/v1/',{
                name, 
                email
        }).then((result) => {
            console.log("success");
            SetAddContact(false);
        }).catch((err) => {
            console.log("Error");
        })
        
    }
   
    

    return <div className="absolute bg-white w-[320px] h-[200px] rounded-lg m-5  p-2 ">
        <div><IoClose className="text-2xl cursor-pointer" onClick={()=> SetAddContact(false)}/></div>
        <div>
        <AddTemplate lable={"name"} onChange={(e)=>{setName(e.target.value)}}/>
        <AddTemplate lable={"E-mail"} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="text-right m-1">
            <button className="bg-yellow-400 mr-8 p-1 rounded-lg" onClick={addContactDetails}>Add Contact</button>
        </div>
        
    </div>
}