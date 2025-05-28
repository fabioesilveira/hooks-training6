"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default function ApiUsers() {
  const [data, setData] = useState<User[] | null>(null);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchApi() {
      const req = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(req.data);
    }
    fetchApi();
  }, []);

  // Handle input change
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  // Filtered list based on search input
  const filteredData = data?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.address.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <input
        className="input-header"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search by name, email or city"
      />

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
          ) : filteredData && filteredData.length > 0 ? (
            filteredData.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onClick={() => router.push(`/api-users/${user.id}`)}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>No results found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}