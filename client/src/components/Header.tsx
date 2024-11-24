import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("no user context");

  const { userInfo, setUserInfo } = context;

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
        // setUsername(userInfo.username);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
    // setUsername("");
  };

  const username = userInfo?.username;

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
