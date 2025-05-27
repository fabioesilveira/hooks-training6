"use client"

import UserRow from "@/app/components/UserRow";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function User() {

    const { id } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setData(req.data)
        }
        fetchApi()
    }, [id])

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
                            <UserRow user={data} />
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}