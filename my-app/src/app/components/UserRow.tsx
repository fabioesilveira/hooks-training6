type User = {
  name: string;
  email: string;
  address: {
    city: string;
  };
};

type Props = {
  user: User;
  onClick?: () => void; 
};

export default function UserRow({ user, onClick }: Props) {
  return (
    <tr onClick={onClick} style={{ cursor: 'pointer' }}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
    </tr>
  );
}