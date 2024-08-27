import { useSetRecoilState } from "recoil"

export function AddTemplate({lable,onChange}){

    
    return <div className="py-1 ml-3">
        <div className="font-bold ml-1"><p>{lable}</p></div>
        <div><input type="text" name="" id="" className="border-black border-2 rounded-md w-64" onChange={onChange}/></div>
    </div>
}