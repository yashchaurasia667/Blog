import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUsername("");
  };

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav>
        {username && (
          <>
            <Link to={"/create"}>Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
