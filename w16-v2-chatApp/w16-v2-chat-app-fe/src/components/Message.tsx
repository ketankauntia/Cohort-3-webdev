export function Message({text,username}){
    return <div className="px-3 py-1 m-1 rounded-lg bg-white w-fit ">
        <span className="text-sm text-purple-500 font-semibold mb-0 pb-0">{username} : </span>
        <span>{text}</span>
        </div>
}