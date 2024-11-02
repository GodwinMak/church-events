import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fullname: "",
    password: "",
    email: "",
  });

  const handleOnchange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value });
    setErrors({ ...errors, [input.name]: "" }); // Clear error for the specific field on change
  };

  const handleValidation = (value) => {
    const { fullname, email, password } = value;
    let tempErrors = {};

    // Check if all fields are empty
    if (!fullname && !email && !password) {
      tempErrors.all = "All fields are required";
    } else {
      if (!fullname) tempErrors.fullname = "Fullname is required";
      if (!email) tempErrors.email = "Email is required";
      if (!password) tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    if (!handleValidation(values)) {
      return; // Stop submission if validation fails
    }

    axios
      .post("http://localhost:8080/user", values)
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard"); // Redirect to login page
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
          <form onSubmit={handleOnSubmit}>
            {/* Top error message for all fields empty */}
            {errors.all && (
              <p className="text-red-500 text-xs italic">{errors.all}</p>
            )}

            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="email"
                onChange={handleOnchange}
              />
              {/* Email-specific error */}
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="fullname"
                onChange={handleOnchange}
              />
              {/* Fullname-specific error */}
              {errors.fullname && (
                <p className="text-red-500 text-xs italic">{errors.fullname}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
                onChange={handleOnchange}
              />
              {/* Password-specific error */}
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
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
              href="/"
            >
              I have Account
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Signup;
