import { RedButton } from "./RedButton";

export function FoodCard({name,price,text,image,type}){
    return <div>
            {/* <div className="w-[300px] h-[140px] bg-[#332925] rounded-xl">
                <div className="flex justify-center">
                    <div>
                    <img src="/images/bgImage.jpeg" alt="" srcset="" className="rounded-full mt-7"/>
                    </div>
                    <div className="m-2 text-white ">
                        <p className="font-bold pb-2"> Burger</p>
                        <p className="text-xs">dsfnsd.nkvadfnvfvndfvfdavnfbvdn aafklnv daffanfd</p>
                        <div className="text-right mt-5"><RedButton lable={"$10.00"} /></div>
                        
                    </div>
                </div>
            </div> */}
            <div className="w-[300px] h-[140px] bg-[#332925] rounded-xl">
                <div className="flex justify-center">
                    <div>
                    <img src={"http://localhost:9000"+image} alt="" srcset="" className="rounded-full mt-7"/>
                    </div>
                    <div className="m-2 text-white ">
                        <p className="font-bold pb-2"> {name}</p>
                        <p className="text-xs">{text}</p>
                        <div className="text-right mt-3"><RedButton lable={"$"+price+".00"} /></div> 
                    </div>
                </div>
            </div>
            
           
             
    </div>
}