import { Outlet, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./root.css";

export default function Root() {
  return (
    <div id="shell">
      <div id="nav">
        <p>Account</p>
        <SearchBar />
        <p>menu</p>
      </div>

      <div id="outlet">
        Rest of the page
        <Outlet />
      </div>
    </div>
  );
}
