import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setLogin }) {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      Email,
      password,
    });
    console.log(data);
    if (data.error) {
      return alert("Invalid credentials");
    }
    alert("logged in successfully");
    return navigate("layout");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center ">
        <div className="w-1/4 h-full flex items-center ">
          <div className="w-full h-3/6 bg-white rounded-md">
            <div className="flex h-1/6 justify-center py-4">
              <h2 className="text-gray-900 my-6">Log in to Facebook</h2>
            </div>
            <div className="flex flex-col h-2/6 p-4 ">
              <input
                className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2  "
                type="text"
                placeholder="Email address or phone number"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2  "
                type="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button
                className="bg-blue-600 text-white focus:outline-none focus-border-transeparent hover:bg-blue-700 my-2"
                onClick={() => {
                  login();
                }}
              >
                Log in
              </button>
              <p className="flex justify-center">
                <span className="text-blue-600">Forgotten password?</span>
              </p>
              <br />
              <div className="flex justify-center">
                <button
                  className="bg-green-600 text-white focus:outline-none focus:border-transeparent hover:bg-green-700"
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  Create new account
                </button>
              </div>
              <p className="my-10">
                <b>Create a Page</b> for a celebrity,brand or business
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
