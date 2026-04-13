import mongoose from "mongoose";
import { product } from "@/library/model/product";
import { connectionSrt } from "@/library/db";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    // Extract the product ID from the dynamic route e.g. /api/products/123
    const { productid } = await content.params;
    console.log(productid);

    // filter: tells MongoDB which document to find (match by _id)
    const filter = { _id: productid };

    // payload: the new data sent from the client to replace the old values
    const payload = await request.json();
    console.log(payload);

    // Connect to MongoDB
    await mongoose.connect(connectionSrt);

    // Find the product matching the filter and update it with the payload
    const result = await product.findOneAndUpdate(filter, payload);

    return NextResponse.json({ result, success: true });
}







export async function GET(request, content) {
    // Extract the product ID from the dynamic route e.g. /api/products/123
    const { productid } = await content.params;
    console.log(productid);

    // filter: tells MongoDB which document to find (match by _id)
    const record = { _id: productid };

  

    // Connect to MongoDB
    await mongoose.connect(connectionSrt);

    // Find the product matching the record ( id) 
    const result = await product.findById(record);

    return NextResponse.json({ result, success: true });
}




export async function DELETE(request,content){

     // Extract the product ID from the dynamic route e.g. /api/products/123
    const { productid } = await content.params;
    console.log(productid);

    // filter: tells MongoDB which document to find (match by _id)
    const record = { _id: productid };

  

    // Connect to MongoDB
    await mongoose.connect(connectionSrt);

    // Find the product matching the record ( id) 
    const result = await product.deleteOne(record);

    return NextResponse.json({ result, success: true });
}