export function BlackButton({lable,toggle}){
    return <div>
        <button className="bg-black text-white px-[20px] py-1 rounded-md" onClick={toggle}>{lable}</button>
    </div>
}