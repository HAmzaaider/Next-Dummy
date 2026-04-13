import { NextResponse } from "next/server";

export async function GET(request, content) {

    const studentdetails = (await content.params).student;  // ❌1: Content → content (capital C), ❌2: params must be awaited
    console.log(studentdetails)

    return NextResponse.json({ result: studentdetails }, { status: 200 })  // ❌3: student → studentdetails (variable doesn't exist)
}