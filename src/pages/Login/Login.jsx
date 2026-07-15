import { useState } from "react";
import { loginUser, registerUser } from "../../services/authService";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await loginUser(email, password);
        alert("Login Successful");
      } else {
        await registerUser(email, password);
        alert("Registration Successful");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <br />

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Create New Account"
          : "Already have an account?"}
      </button>
    </div>
  );
};

export default Login;