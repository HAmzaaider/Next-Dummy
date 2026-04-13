"use client"

import { useRouter } from "next/navigation";


export function Deleteproduct(props) {

   const router=useRouter();


    const deleterecord=async()=>{
   
        let result=await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"DELETE"
        });
        result=await result.json();

        if(result.success){
            alert("product deleted successfuly")
            router.push("/products")
        }
    }
    return (
        <div>
            <button className="delete-btn" onClick={deleterecord}>DELETE</button>
        </div>
    )
}