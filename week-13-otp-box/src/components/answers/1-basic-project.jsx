// // sm, md, lg, xl, 2xl

// export function SidebarClass1() {
//     return <div className="flex">
//         <div className="transition-all ease-in-out duration-150 md:w-96  h-screen w-0 ">
//             Sidebar
//         </div>
//         <div className="bg-green-800 h-screen flex-1">
//             Content
//         </div>
//     </div>
// }

//
//
///
// /
// /
// /
// /
//

export function Sidebar1() {
  return (
    <div className="flex ">
      <div className="sidebar bg-red-200 sm:w-1/5 sm:h-screen hidden sm:block">
        Left side
      </div>
      <div className="right-body bg-blue-200 sm:w-4/5 h-screen w-full">
        Right side
      </div>
      {/* <div className="sidebar bg-red-200 w-1/5 h-screen">Left side</div>
      <div className="right-body bg-blue-200 w-4/5 h-screen">Right side</div> */}
    </div>
  );
}
