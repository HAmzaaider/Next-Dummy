"use client"
import { use } from "react"
import { useEffect, useState } from "react"
import "../../../../style.css"

export default function UpdateUser({ params }) {

    // ✅ Fix #1: Unwrap async params (Next.js 15+)
    const { id: id } = use(params)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")

    useEffect(() => {
        if (id) {
            getUserDetails()
        }
    }, [id])

    const getUserDetails = async () => {
        try {
            let res = await fetch(`http://localhost:3000/api/Users/${id}`)
            let data = await res.json()

            console.log("Fetched user data:", data)

            setName(data?.result?.name || "")
            setAge(data?.result?.age || "")
            setLocation(data?.result?.location || "")

        } catch (error) {
            console.error("Error fetching user:", error)
        }
    }

    // ✅ Fix #2: Added try/catch + Fix #3: age cast to Number
    const adduser = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/Users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, age: Number(age), location })
            })

            let data = await response.json()
            console.log("Update response:", data)

            if (data.success) {
                alert("User Updated Successfully")
            } else {
                alert("Some error occurred, re-enter the data")
            }

        } catch (error) {
            console.error("Update failed:", error)
            alert("Request failed: " + error.message)
        }
    }

    return (
        <div className="container">
            <h1>Update User</h1>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter User Name"
            />

            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter User Age"
            />

            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter User Location"
            />

            <button className="btn" onClick={adduser}>
                Update User
            </button>
        </div>
    )
}