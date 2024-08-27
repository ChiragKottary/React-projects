import { useEffect, useState } from "react"
import axios from "axios";
import { FoodCard } from '../components/FoodCard'
import { RedButton } from "../components/RedButton";


export function Foods(){
    const [datas,setDatas] = useState([]);
    const [filterMeal,setfilterMeal] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9000/").then((res) => {
            const data = res.data;
            setDatas(data)
            setfilterMeal(data)
            
        }).catch((err) => {
            console.log("something went wrong")
        });

    },[])

    function searchMeal(e){
            const meal = e.target.value;

            if(meal == ""){
                setfilterMeal(null);
            }
            const filterMeal = datas.filter((food)=> food.name.toLowerCase().includes(meal.toLowerCase()));

            setfilterMeal(filterMeal);
    }
    function filtterMyMeal(types){
            if (types == "all") {
            setfilterMeal(datas);
            return;
            }
            const filter = datas.filter((food)=>( 
                
                food.type.toLowerCase().includes(types.toLowerCase())
            ));
            setfilterMeal(filter)
            
    }
    return <div>
        <div className="h-[230px] bg-[#323334] w-[100%]">
            <div className="flex justify-between mx-20 pt-10">
                <div className="font-bold text-white text-4xl">Foody Zone </div>
                <div ><input type="search" name="" id="" placeholder="Search Food..." onChange={searchMeal} className="p-2 rounded-xl border-rose-500 border-2 bg-[#323334] text-white "/></div>
            </div>
            <div className="flex justify-center space-x-4 mt-20">
                <RedButton lable={"All"} click ={()=>filtterMyMeal("all")}/>
                <RedButton lable={"BreakFast"} click ={()=>filtterMyMeal('breakfast')}/>
                <RedButton lable={"Lunch"} click ={()=>filtterMyMeal('lunch')}/>
                <RedButton lable={"Dinner"} click ={()=>filtterMyMeal('dinner')}/>
            </div>
        </div>
        <div className="bg-cover bg-hero-pattern bg-fuchsia-500 h-[550px] pt-10 ">
            <div>
                <div className="grid grid-cols-3 gap-2 place-items-center m-10">
                {filterMeal.map(({name,price,text,image,type})=>(
                    <FoodCard name={name} price={price} text={text} image={image} type={type}  />
                ))}
                
                </div>
                
            </div>
        </div>
    </div>
}