// this is custom MADE api , having user details , something like this 

// import { user } from "../../../util/page";
// import { NextResponse } from "next/server";

// export function GET(){
//     const data=user
//     return NextResponse.json(data,{status:200})
// }

// export async function Post(request){
//     let payload=await request.json()
//     console.log(payload.name)

//     if(!payload.name || !payload.age || !payload.location){


//         return NextResponse.json({result:"required field not foiund"},{status:400})


//     }
//     return NextResponse.json({result:"successfuly added ",success:true},{status:201})
// }

import { user } from "../../../util/page";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(user, { status: 200 })
}

// ✅ Add this POST function
export async function POST(request) {
    let payload = await request.json()

    if (!payload.name || !payload.age || !payload.location) {
        return NextResponse.json(
            { result: "required field not found", success: false },
            { status: 401 }
        )
    }

    return NextResponse.json(
        { result: "user created successfully", success: true },
        { status: 201 }
    )
}

