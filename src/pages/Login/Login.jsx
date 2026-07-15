// <<<<<<< Updated upstream
// import { useState } from "react";
// import { loginUser, registerUser } from "../../services/authService";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         await loginUser(email, password);
//         alert("Login Successful");
//       } else {
//         await registerUser(email, password);
//         alert("Registration Successful");
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>{isLogin ? "Login" : "Register"}</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit">
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>

//       <br />

//       <button onClick={() => setIsLogin(!isLogin)}>
//         {isLogin
//           ? "Create New Account"
//           : "Already have an account?"}
//       </button>
// =======
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

//         <h1 className="text-4xl font-bold text-center mb-2">
//           Welcome Back
//         </h1>

//         <p className="text-center text-gray-500 mb-8">
//           Login to your FoodieHub account
//         </p>

//         <form className="space-y-5">

//           <div>
//             <label className="block mb-2 font-medium">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//           >
//             Login
//           </button>

//         </form>

//         <p className="text-center mt-6">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-black font-semibold"
//           >
//             Register
//           </Link>
//         </p>

//       </div>

// >>>>>>> Stashed changes
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      alert("Login Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your FoodieHub account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;