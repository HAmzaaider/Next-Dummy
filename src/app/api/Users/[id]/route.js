// this is custom MADE api , having user details , something like this 

import { user } from "../../../../util/page";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const id = (await content.params).id;

    const targetedUser = user.filter((item) => item.id == id)

    return NextResponse.json(
        targetedUser.length == 0
            ? { result: "no data found", success: false }
            : { result: targetedUser[0], success: true },
        { status: 200 }
    )
}

export async function PUT(request, content) {  // ✅ NEW: renamed "response" → "content"
    let payload = await request.json();

    const id = (await content.params).id;  // ✅ NEW: properly awaiting params (was content.params.id before — crashed)
    payload.id = id;

    if (!payload.id || !payload.name || !payload.age || !payload.location) {
        return NextResponse.json(
            { result: "unsuccessful operation", success: false },
            { status: 400 }
        )
    }

    // ✅ NEW: find the index of the user in the array
    const index = user.findIndex((item) => item.id == id)

    // ✅ NEW: handle case where ID doesn't exist
    if (index === -1) {
        return NextResponse.json(
            { result: "user not found", success: false },
            { status: 404 }
        )
    }

    // ✅ NEW: actually mutate the array (before this, array was never updated)
    user[index] = { ...user[index], ...payload }

    // ✅ NEW: log updated user in VS Code terminal for verification
    console.log("Updated user:", user[index])

    return NextResponse.json({ result: user[index], success: true }, { status: 200 })
}

export async function DELETE(request,contet){

     let id = (await contet.params).id;  // ✅ only fix needed

    if(id){
        return NextResponse.json({result:"deleted successfuly ", success:true},{status:200})
    }

    else{
          return NextResponse.json({result:" NOT deleted successfuly ", success:false},{status:402})
    }
}

// put method here , defined, just cause we need to be ID SPECIFIED ,,,, so ony here
// not in the OUTER FILE 