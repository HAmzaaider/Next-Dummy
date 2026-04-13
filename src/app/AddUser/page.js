"use client"
import { useState } from "react"
import "../style.css"   // ✅ correct path

export default function AddUser(){

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [location, setlocation] = useState("")

    const adduser = async () => {
       let response = await fetch("/api/Users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, location })
})
        let data = await response.json()
        if(data.success){
            alert("User Added Successfully")
        }
        else{
            alert("some error occured, re-Enter the data")
        }
        console.log(data)
    }

    return(
        <div className="container">
            <h1>Add New User</h1>
            <input type="text" value={name}     onChange={(e) => setname(e.target.value)}     placeholder="Enter User Name"     className="input" />
            <input type="text" value={age}      onChange={(e) => setage(e.target.value)}      placeholder="Enter User Age"      className="input" />
            <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} placeholder="Enter User Location" className="input" />
            <button onClick={adduser} className="btn">Add User</button>
        </div>
    )
}