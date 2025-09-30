import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  return <div>
    Home Page
    <input type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <button onClick={() => {
      navigate("/dashboard/profile", { state: { username }});
    }}>Go to profile page</button>
  </div>
}