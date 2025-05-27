import UserRow from "./components/UserRow"

export default function Home() {

  const users = [
    { id: 1, name: "Fabio", email: "fabio.eds@gmail.com", address: { city: "San Jose" } },
    { id: 2, name: "Cristiano", email: "cristiano@gmail.com", address: { city: "Milan" } },
    { id: 3, name: "Alberto", email: "alberto@gmail.com", address: { city: "Rio de Janeiro" } },
    { id: 4, name: "Dustin", email: "dustin@gmail.com", address: { city: "Salvador" } },
  ]

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
            {users.map((e, i) => (
              <UserRow key={e.id} user={e} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}