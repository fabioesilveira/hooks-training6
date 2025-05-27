"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import UserRow from "../components/UserRow";
import { useRouter } from "next/navigation";


type User = {
  name: string;
  email: string;
  address: {
    city: string;
  };
  id: number;
};

export default function ApiUsers() {

    const [data, setData] = useState<User[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(req.data)
        }
        fetchApi();
    }, [])

    return (
        <>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!data ? (
                            <tr>
                                <td colSpan={3}>Loading...</td>
                            </tr>
                        ) : (
                            data.map((e) => <UserRow key={e.id} user={e} onClick={() => router.push(`/api-users/${e.id}`)}/>)
                        )}
                    </tbody>

                </table>
            </div>
        </>
    )
}