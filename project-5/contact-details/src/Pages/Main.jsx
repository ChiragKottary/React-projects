import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import {AddContact} from "./AddContact";
import {UpdateContact} from "../Pages/UpdateContact";
import {NotFound} from '../components/NotFound';
import { useRecoilState, useRecoilValue } from "recoil";
import { addContact ,AllContacts, uppContact,searchContact} from "../store/atom";
import {Contact} from '../components/Contact'
import axios from 'axios'

export function Main(){
    const userupdate = useRecoilValue(uppContact);
    const [AddContacts,SetAddContact] = useRecoilState(addContact);
    const [AllContact, setAllContacts] = useRecoilState(AllContacts);
    const [searchContacts,setSearchContact] = useRecoilState(searchContact)

    useEffect(()=>{
            axios.get('http://localhost:3000/api/v1/').then((result) => {
                setAllContacts(result.data.allContact); 
                setSearchContact(result.data.allContact);
                console.log("render ");  
                
            }).catch((err) => {
                
            });
    },[AddContacts,userupdate])
    
    function handelSearch(e){
        const values = e.target.value;
        

        if (values == "") {
            setSearchContact(null);
        }
        const fillterSearch = AllContact.filter((item)=>(
                item.name.toLowerCase().includes(values.toLowerCase())
        ));
        setSearchContact(fillterSearch);
    }

    return <div>
        <div className="flex justify-center ml-3 mt-4">
            <div><FaSearch className="absolute mt-3 ml-1 text-2xl"/><input type="search" name="" id="" onChange={ handelSearch} className="mt-1 pl-8 p-2 w-[300px] rounded-lg"/></div>
            <div className="pb-5"> <IoMdAddCircleOutline className="text-5xl cursor-pointer ml-3" onClick={()=>SetAddContact(true)}/></div>
            {AddContacts?<AddContact/> :<></>}
            
        </div>
        <div>{userupdate?<UpdateContact/>:<></>}</div>
        <div>
            {AllContact.length<=0 ? <NotFound/>:<></>}
                {searchContacts.map((contact) => (
                <Contact id={contact._id} name={contact.name} email={contact.email} />
                    ))}  
                     
            </div>
    </div>
}