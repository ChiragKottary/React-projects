export function Header(){
    return <div>
        <div className="flex justify-between mt-3">
        <img src="images/logo.png" alt="logo" srcset="" />
        <div className="flex justify-center space-x-3 mt-5 font-bold">
            <div>MENU</div>
            <div>LOCATION</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
        </div>
        <button className="bg-red-600 text-white font-bold mr-10 w-20 h-8 rounded-md hover:bg-red-900 mt-3">Login</button>
        </div>

    </div>
}