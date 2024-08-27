import { IoIosContact } from "react-icons/io";
export function NotFound(){
    return <div>
        <div className="flex justify-center item-center text-white space-x-3">
            <div><IoIosContact className="text-6xl"/></div>
            <div className="mt-3 text-3xl">No Contact Found</div>
        </div>
    </div>
}