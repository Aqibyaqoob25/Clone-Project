import axios from "axios";
import { useState } from "react";

function Signup({ setLogin }) {
  const [firstName, setFirstName] = useState("");
  const [sirName, setSirName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/user/createUser",
      {
        firstName,
        sirName,
        Email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
    if (data.error) {
      return alert("unable to signup");
    }
    alert("signup successfully");
    setLogin(true);
  };
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-2/6 h-full flex items-center">
          <div className="w-full h-5/9 bg-white rounded-md p-2">
            <p className="flex justify-end ">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setLogin(true);
                }}
              >
                x
              </span>
            </p>
            <div className="flex justify-center p-2">
              <h2 className="text-gray-800 text-2xl font-semibold">
                Signup Up
              </h2>
            </div>
            <p className="flex justify-center">It's quick and easy. </p>

            <div className="flex flex-col h-3/6 p-4 ">
              <div className="flex ">
                <input
                  type="text"
                  placeholder="First name"
                  className=" border-2 border-gray-200 focus:outline-none rounded-md p-1 text-black bg-white "
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Surname"
                  className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white ml-2 "
                  onChange={(e) => {
                    setSirName(e.target.value);
                  }}
                />
              </div>

              <input
                type="text"
                placeholder="Mobile number or email address"
                className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2 "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="New pasword"
                className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2  "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <p>Date of birth?</p>

              <div className="flex ">
                <input
                  type="number"
                  name="day"
                  min="1"
                  max="31"
                  placeholder="23"
                  className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2  "
                />

                <input
                  type="number"
                  id="m"
                  name="month"
                  min="1"
                  max="12"
                  placeholder="Mar"
                  className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2 ml-2 "
                />

                <input
                  type="number"
                  id="y"
                  name="year"
                  min="1900"
                  max="9999"
                  placeholder="2024"
                  className=" border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white my-2 ml-2 "
                />
              </div>

              <p>Gender?</p>
              <div className="flex ">
                <div className="border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white  ">
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    value="female"
                    name="Gender"
                    className="ml-3"
                  />
                </div>
                <div className="border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white ml-2 ">
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    value="male"
                    name="Gender"
                    className="ml-6"
                  />
                </div>
                <div className="border-2 border-gray-200 focus:outline-none rounded-md p-2 text-black bg-white ml-2 ">
                  <label htmlFor="Custom">Custom</label>
                  <input
                    type="radio"
                    value="custom"
                    name="Gender"
                    className="ml-6"
                  />
                </div>
              </div>

              <p className="my-2">
                People who use our service may have uploaded your contact
                information to Facebook. <a href=""> Learn more.</a>
              </p>
              <p>
                By clicking Sign Up, you agree to our <a href="">Terms</a>,
                <a href="">Privacy Policy</a> and <a href="">Cookies Policy.</a>
                You may receive SMS notifications from us and can opt out at any
                time.
              </p>
            </div>
            <div className="flex justify-center ">
              <button
                className="bg-green-600 text-white focus:outline-none focus:border-transeparent hover:bg-green-700 m-3 py-2 px-10 "
                onClick={() => {
                  handleSignup();
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
