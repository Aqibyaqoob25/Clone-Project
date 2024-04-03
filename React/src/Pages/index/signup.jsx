import { useState } from "react";
import axios from "axios";

function Signup({ setLogin }) {
  const [firstName, setFirstName] = useState("");
  const [sirName, setSirName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");

  const handleSignup = async () => {
    const { data } = await axios.post(
      "http://localhost:3000/user/createUser",
      {
        firstName,
        sirName,
        email,
        password,
        day,
        month,
        year,
        gender,
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
    if (data.error) {
      return alert("Unable to signup");
    }
    alert("Signup successful");
    setLogin(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-md p-4">
        <div className="text-center">
          <h2 className="text-gray-800 text-2xl font-semibold mb-2">
            Create a new account
          </h2>
          <p className="text-gray-600">It's quick and easy.</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mb-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Surname"
            className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mb-2"
            onChange={(e) => setSirName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex mb-2">
            <input
              type="number"
              name="day"
              min="1"
              max="31"
              placeholder="Day"
              className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mr-2"
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="number"
              name="month"
              min="1"
              max="12"
              placeholder="Month"
              className="w-full border border-gray-200 rounded-md p-2 text-black bg-white mr-2"
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="number"
              name="year"
              min="1900"
              max="9999"
              placeholder="Year"
              className="w-full border border-gray-200 rounded-md p-2 text-black bg-white"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="flex mb-2">
            <label className="mr-4">
              Female
              <input
                type="radio"
                value="female"
                name="gender"
                className="ml-2"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="mr-4">
              Male
              <input
                type="radio"
                value="male"
                name="gender"
                className="ml-2"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label>
              Custom
              <input
                type="radio"
                value="custom"
                name="gender"
                className="ml-2"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
          </div>
          <button
            className="w-full bg-green-600 text-white rounded-md py-2 focus:outline-none hover:bg-green-700"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center mt-4">
          <p
            className="text-blue-600 cursor-pointer"
            onClick={() => setLogin(true)}
          >
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
