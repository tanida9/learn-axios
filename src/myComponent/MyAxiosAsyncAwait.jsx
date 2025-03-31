import { useEffect, useState } from "react";
import axios from "axios";

export function MyAxiosAsyncAwait() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        setUsers(res.data);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen w-full  bg-blue-100 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Random of Cutie List😻</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <ul className="space-y-4 max-w-md mx-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className=" bg-white shadow-md rounded-xl mb-6 p-4 hover:bg-gray-50 transition"
          >
            <img src={user.url} alt={user.id} />
            <p className="text-gray-600">Width : {user.width}</p>
            <p className="text-sm text-gray-400">Heigth : {user.height}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
