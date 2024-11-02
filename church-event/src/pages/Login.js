import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import both icons

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const handleOnchange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value });
    setErrors({ ...errors, [input.name]: "" }); // Clear error for the specific field on change
  };

  const handleValidation = (value) => {
    const { email, password } = value;
    let tempErrors = {};

    // Check if all fields are empty
    if (!email && !password) {
      tempErrors.all = "All fields are required";
    } else {
      if (!email) tempErrors.email = "Email is required";
      if (!password) tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    if (!handleValidation(values)) {
      return; // Stop submission if validation fails
    }

    axios
      .post("http://localhost:8080/user/login", values)
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard"); // Redirect to dashboard page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex h-screen bg-indigo-700">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
          <header>
            <img
              className="w-20 mx-auto mb-5"
              src="https://img.icons8.com/fluent/344/year-of-tiger.png"
              alt=""
            />
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="email"
                onChange={handleOnchange}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                  type={showPassword ? "text" : "password"} // Toggle type based on showPassword
                  name="password"
                  onChange={handleOnchange}
                />
                {/* Eye Icon */}
                <span
                  className="absolute right-2 translate-y-3/4 cursor-pointer text-indigo-500 text-lg  "
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <input
                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                type="submit"
              />
            </div>
          </form>
          <footer>
            <a
              className="text-indigo-700 hover:text-pink-700 text-sm float-right"
              href="/signup"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
