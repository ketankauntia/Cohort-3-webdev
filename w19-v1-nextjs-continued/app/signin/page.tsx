export default function Signin(){
    return <div className="h-screen w-screen flex justify-center items-center">

<div className="border p-2 flex flex-col">
            <div className="mx-2 my-1 p-1">SignIn</div>
            <input className="mx-2 my-1 p-1" type="text/email" placeholder="username" />
            <input className="mx-2 my-1 p-1" type="password" placeholder="password" />
            <button className="mx-2 my-3 p-1 bg-white text-black rounded-sm">SignIn</button>
        </div>

    </div>
}