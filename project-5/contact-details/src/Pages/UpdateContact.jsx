import { useSetRecoilState,useRecoilState, useRecoilValue} from "recoil";
import { AddTemplate } from "../components/AddTemplate";
import { IoClose } from "react-icons/io5";
import { emailValue, nameValue, setUpdateId, uppContact } from "../store/atom";
import axios from "axios";


export function UpdateContact(){
    const [name,setName]= useRecoilState(nameValue);
    const [email,setEmail] = useRecoilState(emailValue)
    const SetUpContact = useSetRecoilState(uppContact);
    const getUserID = useRecoilValue(setUpdateId);
    

    function UpdateContac(id){
                axios.put(`http://localhost:3000/api/v1/${id}`,{
                        name,
                        email
                }).then((result) => {
                    SetUpContact(false);
                    console.log("updated SuccessFully");
                    
                }).catch((err) => {
                    console.log(err);
                });
    }




    return <div className="absolute bg-white w-[320px] h-[200px] rounded-lg m-5  p-2 ">
        <div><IoClose className="text-2xl cursor-pointer" onClick={()=> SetUpContact(false)}/></div>
        <div>
        <AddTemplate lable={"name"} onChange={(e)=> setName(e.target.value)}/>
        <AddTemplate lable={"E-mail"} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="text-right m-1">
            <button className="bg-yellow-400 mr-8 p-1 rounded-lg" onClick={()=>UpdateContac(getUserID)}>Update Contact</button>
        </div>
        
    </div>
}