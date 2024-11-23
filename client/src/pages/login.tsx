import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/userContext/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const context = useContext(UserContext);
  if (!context) throw new Error("no user context");
  const { setUserInfo } = context;

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else alert("Wrong credentials");
  };

  if (redirect) return <Navigate to={"/"} />;

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
