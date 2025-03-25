export function Sidebar(){
    return <div className="h-screen w-1/3 border-2 border-r-gray-200 p-6">
        <div className="font-bold text-2xl mb-6 p-3 ml-2">Second Brain</div>
        <div className="sidebar-options">
            <div className="p-4 text-lg m-2 hover:bg-slate-100 rounded-lg">tweets</div>
            <div className="p-4 text-lg m-2 hover:bg-slate-100 rounded-lg">videos</div>
            <div className="p-4 text-lg m-2 hover:bg-slate-100 rounded-lg">documents</div>
            <div className="p-4 text-lg m-2 hover:bg-slate-100 rounded-lg">links</div>
            <div className="p-4 text-lg m-2 hover:bg-slate-100 rounded-lg">tags</div>
        </div>
    </div>
}