async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/Users/${id}`);
    data = await data.json();
    return data.result;
}

export default async function UserId({ params }) {
    const { Userid } = await params;      // ✅ await params
    const data = await getUser(Userid);

    return (
        <div>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
            <h4>{data.location}</h4>
        </div>
    );
}