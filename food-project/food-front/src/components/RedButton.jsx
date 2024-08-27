export function RedButton({lable, click}){

    return <div>
        <div>
            <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"onClick={click} >{lable}</button>
        </div>
    </div>
}