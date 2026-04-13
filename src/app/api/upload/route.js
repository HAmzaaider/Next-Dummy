import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
    // Extract form data from the request
    const data = await req.formData();

    // Get the uploaded file from form data
    const file = data.get('file');

    // If no file was provided, return an error response
    if (!file) {
        return NextResponse.json({ message: "No file provided", success: false });
    }

    // Convert file to buffer for writing to disk
    const bytedata = await file.arrayBuffer();
    const buffer = Buffer.from(bytedata);

    // Save file to the public folder using relative path
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);

    return NextResponse.json({ message: "File uploaded successfully", success: true });
}