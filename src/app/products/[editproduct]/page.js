"use client"
import { useEffect, useState, use } from "react"
import "../../style.css"
import { useRouter } from "next/navigation"

export default function EditProduct(props) {
    const router = useRouter();
    // Unwrap params Promise using React.use() — required in Next.js 15+
    const params = use(props.params);

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [compnay, setcompany] = useState("");
    const [color, setcolor] = useState("");
    const [category, setcategory] = useState("");

    useEffect(() => {
        console.log(params.editproduct);
        getproductdetails(params.editproduct);
    }, []);

    const getproductdetails = async (productid) => {
        if (!productid) return;

        let details = await fetch("http://localhost:3000/api/products/" + productid);
        details = await details.json();

        if (details.success) {
            let result = details.result;
            setname(result.name);
            setprice(result.price);
            setcategory(result.category);
            setcolor(result.color);
            setcompany(result.company);
        }
    }


   const updateproduct = async () => {
    let details = await fetch("http://localhost:3000/api/products/" + params.editproduct, {
        method: "PUT",
        body: JSON.stringify({ name, color, category, price, company: compnay })
    });
    let data = await details.json();

    if (data.result) {
        alert("Product updated successfully");
        // Redirect back to products list after clicking OK
        router.push("http://localhost:3000/products");
    }
}

    return (
        <div className="container">
            <h1>EDIT PRODUCTS</h1>
            <input className="input" value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Enter Mobile Name" />
            <input className="input" value={price} onChange={(e) => setprice(e.target.value)} type="text" placeholder="Enter Mobile Price" />
            <input className="input" value={compnay} onChange={(e) => setcompany(e.target.value)} type="text" placeholder="Enter Mobile Company" />
            <input className="input" value={color} onChange={(e) => setcolor(e.target.value)} type="text" placeholder="Enter Mobile Color" />
            <input className="input" value={category} onChange={(e) => setcategory(e.target.value)} type="text" placeholder="Enter Category" />
            <button className="btn" onClick={updateproduct}>Update Product</button>
        </div>
    )
}