import Link from "next/link";
import "../style.css"
import Deleteuser from "@/util/DeleteUser";

async function getUsers() {
 let data = await fetch("/api/Users");
    data = await data.json();
    return data;
}

export default async function UsersListName() {
    const users = await getUsers();

    return (
        <div className="page-wrapper">
            <h1>User List</h1>
            {
                users.map((item) => (
                    <div key={item.id} className="user-container">
                        <span className="user-name">
                            <Link href={`/Users/${item.id}`}>
                                {item.name}
                            </Link>
                        </span>
                        <span>
                            <Link className="edit-btn" href={`http://localhost:3000/api/Users/${item.id}/updateuser`}>
                                Edit User
                            </Link>
                        </span>
                        <span>
                            <Deleteuser id={item.id}/>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}