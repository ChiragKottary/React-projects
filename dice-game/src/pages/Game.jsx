import { useState } from "react"
import {NumberChoice} from "../components/NumberChoice";
import {BlackButton} from "../components/BlackButton";
export function Game(){
    const [score,setScore]= useState(0);
    const [selectNumber,SetselectNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [showRules,SetShowRules] = useState(false);
    const arrNumber = [1,2,3,4,5,6];

    function generateRamdom(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function rollDice(){
    if (!selectNumber) {
        alert("not selected number");
        return
    }
    const randomNumber = generateRamdom(1,6);
    setCurrentDice(()=> randomNumber);
    if (selectNumber === randomNumber) {
        setScore((score)=> score + randomNumber);
    }
    else{
        setScore((prev) => prev - 2)
    }
    SetselectNumber(undefined);
}

function resetScore(){
    setScore(0)
}






    return <div>
        <div className="flex justify-between">
            <div className="mt-2 ml-[160px]">
            <div className="text-center">
            <p className="font-bold text-8xl ">{score}</p>
            <p className="font-bold text-xl">Total Score</p>
            </div>
            </div>
            <div>
            <div className="flex justify-right space-x-5 mt-10 mr-[82px]">
                {
                    arrNumber.map((value,i)=>(
                            <NumberChoice 
                            lable={value} key={i} 
                            click={()=> SetselectNumber(value)}
                            style={{
                                backgroundColor: value === selectNumber ? 'black' : 'white',
                                color: value === selectNumber ? 'white' : 'black',
                                cursor: 'pointer',}}
                            />
                    ))  
                }
            </div>
            <p className="font-bold text-xl mr-20 text-right">Select Number</p>
            </div>
        </div>
        <div className="text-center my-7">
            <div>
                <img src= {`images/dices/dice_${currentDice}.png`} onClick={rollDice} className="ml-[640px] cursor-pointer" alt="nan" srcset="" />
                <p className="my-2 font-bold text-2xl">Click on Dice to Roll</p>
            </div>
            <div>
                <button className="border-black border-2 px-2 py-1 my-2 rounded-lg font-bold text-2xl" onClick={resetScore} >Reset Score</button>
            </div>
            <div className="ml-1">
                <BlackButton lable={"Show Rules"} toggle={()=> SetShowRules(!showRules)}/>
                {console.log(showRules)}
            </div>
            {showRules ?<div className="ml-[400px] p-3 mt-4 rounded-lg bg-[#FBF1F1] text-left w-[50%] ">
                <p>How to play dice game ?</p>
                <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                    <li>if you get wrong guess then  2 point will be dedcuted </li>
                </ul>

            </div> :<p></p>}  
            
            <p></p>      
        </div>
    </div>
}