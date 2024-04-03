import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../App";

function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useContext(LoginContext);

  const navigate = useNavigate();

  const login = async () => {
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    console.log("data ", data);

    if (data.error) {
      return alert("Invalid email or password");
    }
    localStorage.setItem("isLogin", true);
    setIsLogin(localStorage.getItem("isLogin"));
    alert("logged in successfully");
    return navigate("layout");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-md p-8">
        <h2 className="text-gray-900 text-2xl mb-6 text-center">
          Log in to Facebook
        </h2>
        <input
          className="w-full border border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white mb-4"
          type="text"
          placeholder="Email address or phone number"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white mb-4"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white focus:outline-none focus:border-transparent hover:bg-blue-700 mb-4 py-2 rounded-md"
          onClick={() => login()}
        >
          Log in
        </button>
        <p className="text-center mb-4">
          <span className="text-blue-600">Forgotten password?</span>
        </p>
        <div className="flex justify-center">
          <button
            className="bg-green-600 text-white focus:outline-none focus:border-transparent hover:bg-green-700 py-2 px-6 rounded-md"
            onClick={() => setLogin(false)}
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
