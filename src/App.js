import "./styles.css";
import Accordion from "./components/accordion/Accordion";
import Card from "./components/card/Card";
import { useState, useEffect } from "react";

export default function App() {
  const [users, usersSet] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch("https://reqres.in/api/users");
      const responseJson = await fullResponse.json();
      usersSet(responseJson.data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>React UI Components</h1>
      <Accordion />
      {users.map((user) => (
        <Card
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}
