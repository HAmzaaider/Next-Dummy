"use client"
import { useState } from "react"
import "../style.css"

export default function AddProduct() {


    const[name,setname]=useState("");
     const[price,setprice]=useState("");
      const[company,setcompany]=useState("");
       const[color,setcolor]=useState("");
        const[category,setcategory]=useState("")
const adduser = async () => {
    console.log(name, price, company, color, category)

    // Send POST request to the API with product data
    let result = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({ name, price, company, color, category })
    });

    // Parse the JSON response
    result = await result.json();

    // If product was added successfully, alert the user and clear the fields
    if (result.success) {
        alert("Product added successfully");

        // Clear all input fields
        setname("");
        setprice("");
        setcompany("");
        setcolor("");
        setcategory("");
    }
}
    return (
        <div className="container">
            <h1>ADD PRODUCTS</h1>
            <input className="input"  value={name} onChange={ (e)=>setname(e.target.value)} type="text" placeholder="Enter Mobile Name" />
            <input className="input" value={price} onChange={ (e)=>setprice(e.target.value)}type="text" placeholder="Enter Mobile Price" />
            <input className="input" value={company} onChange={ (e)=>setcompany(e.target.value)}type="text" placeholder="Enter Mobile Company" />
            <input className="input" value={color} onChange={ (e)=>setcolor(e.target.value)}type="text" placeholder="Enter Mobile Color" />
            <input className="input" value={category} onChange={ (e)=>setcategory(e.target.value)}type="text" placeholder="Enter Category" />
            <button className="btn" onClick={adduser}>Add Product</button>
        </div>
    )
}