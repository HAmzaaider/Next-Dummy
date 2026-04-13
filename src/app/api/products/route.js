import { connectionSrt } from "@/library/db";
import { product  } from "@/library/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){


    let data =[];
    let success=false
    try{
   
    await mongoose.connect(connectionSrt)
    data=await product.find();
    success=true;
    } 

    catch (error){
       data={success:false}
    }


  
    return NextResponse.json({result:data,success})
}



// export async function POST(){
//     await mongoose.connect(connectionSrt);
//     let newProduct = new product({
//         name: "Samsung s20 ultra",
//         price: "150000",
//         company: "samsung",
//         color: "red",
//         category: "mobile"
//     })

//     const data = await newProduct.save();
//     return NextResponse.json({result:data, success:true})
// }




// now we will send data via POSTMAN 

// we simply send the OBJECT form the    body >> raw>> json ( from postman ) 




export async function POST(request){
    const payload=await request.json();
    await mongoose.connect(connectionSrt);
    let newProduct = new product(payload)

    const data = await newProduct.save();
    return NextResponse.json({result:data, success:true})
}
