import { useState, useEffect } from "react";
import Card from "./card/Card";

export default function Fetch() {
  const [users, usersSet] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch("https://reqres.in/api/users");
      const responseJson = await fullResponse.json();
      console.log(responseJson.data);
      usersSet(responseJson.data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="cards_wrapper">
      {users.map((user) => (
        <Card key={user.id} data={users} />
      ))}
    </div>
  );
}
