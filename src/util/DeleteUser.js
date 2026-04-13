// we all know that a BUTTON is USE CLIENT , it is a client componenet 
// we are using ASYNC AWAIT in the REST api case , so we can,t use a client componenet 

// SOLUTION ???


// we make button as a seperate component and then use it NORMALLY 


// 2. we can not use EVENTS , like onclick, etc etc in the SERVER MODE(a mode that has async await)

"use client"

export default function Deleteuser(props) {
    const userid = props.id;

    const deleteuser = async () => {
        let result = await fetch("http://localhost:3000/api/Users/" + userid, { 
            method: "DELETE"   // ✅ fixed typo: was "methos"
        })
        result = await result.json()  // ✅ parse the response

        if (result.success) {         // ✅ now inside the function
            alert("user deleted successfully")
        }
    }  // ✅ function closes here

    return(
        <div>
            <button onClick={deleteuser}>
                Delete
            </button>
        </div>
    )
}