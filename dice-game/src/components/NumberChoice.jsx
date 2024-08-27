export function NumberChoice({lable,click,style}){
    return <div>
        <button className="border-black border-2 px-6 py-3 font-bold text-2xl" style={style} onClick={click}>{lable}</button>
    </div>
}