import { BlackButton } from "../components/BlackButton";

export function StartPage({toggle}){
    return <div>
        <div className="flex justify-left ml-[200px]">
            <div className="w-[50%] mt-20">
                <img src="images/dicepic.png" alt="" srcset="" />
            </div>
            <div className="mt-[300px] text-right">
                <p className="font-extrabold text-8xl">Dice Game</p>
                <BlackButton toggle = {toggle} lable={"Play Now"}/>
            </div>
        </div>
    </div>
}