import { IoIosContact } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';

import { useRecoilState,useSetRecoilState} from "recoil";
import { AllContacts, setUpdateId, uppContact,searchContact } from "../store/atom";

export function Contact({name,email,id}) {
    const [AllContact, setAllContacts] = useRecoilState(AllContacts);
    const SetUpContact = useSetRecoilState(uppContact);
    const updateID = useSetRecoilState(setUpdateId);
    const setSearchContact = useSetRecoilState(searchContact)
    const deleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/${id}`);
            setSearchContact(AllContact.filter(contact => contact._id !== id));
            setAllContacts(AllContact.filter(contact => contact._id !== id));
        } catch (err) {
            console.error('Error deleting contact:', err);
        }
    };
    
     
    return <div>
          
        <div className="flex space-x-3 bg-[#FFEAAE] my-3 rounded-lg">
            <div className="flex justify-center">
            <div>
                <IoIosContact className="text-5xl"/>
            </div>
            <div className="pl-2 w-[210px]">
                <p>{name}</p>
                <p>{email}</p>
            </div>
            </div>
            <div className=" flex justify-right space-x-4  mt-2">
                <div onClick={()=>updateID(id)}><CiEdit className="text-3xl cursor-pointer" onClick={()=> { SetUpContact(true); }}/></div>
                <div><RiDeleteBin5Fill className="text-3xl cursor-pointer" onClick={()=>deleteContact(id)} /></div>
            </div>
        </div>
        
    </div>
}