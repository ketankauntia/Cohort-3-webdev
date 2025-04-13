// export default function Page(){
//     return <div>Page here bud</div>
// }

import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user:"test01",
        email:"test@test.com"
    })
}