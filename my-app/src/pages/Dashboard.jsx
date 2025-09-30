import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      This is dashboard
      <Outlet />
    </div>
  );
}