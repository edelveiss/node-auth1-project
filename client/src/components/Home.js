import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <header className="App-header">
      <div className="menu">
        <Link to="/register">
          <button
            style={{
              marginLeft: "2rem",

              color: "white",
              border: "1px solid white",
            }}
          >
            Register
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              marginLeft: "2rem",

              color: "white",
              border: "1px solid white",
            }}
          >
            Login
          </button>
        </Link>
        <Link to="/dashboard">
          <button
            style={{
              marginLeft: "2rem",
              marginRight: "1rem",
              color: "white",
              border: "1px solid white",
            }}
          >
            Dashboard
          </button>
        </Link>
      </div>
    </header>
  );
}
export default Home;
