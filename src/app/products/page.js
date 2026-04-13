import "../style.css"
import { Deleteproduct } from "@/library/deleteproduct/page"

import Link from "next/link";
const getuser = async () => {
    let data = await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    if (data.success) {
        return data.result;
    } else {
        return [];
    }
}

export default async function ProductsTable() {
    const product = await getuser();
    console.log(product);

    return (
        <div className="table-wrapper">
            <h1>Product List</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Company</td>
                        <td>Color</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.company}</td>
                            <td>{item.color}</td>
                            <td>{item.category}</td>
                          <td>
                            <Link href={`/products/${item._id}`}>EDIT</Link>
  
                                                            </td>
                            <td><Deleteproduct id={item._id} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}