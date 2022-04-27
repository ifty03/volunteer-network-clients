import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logos/Group 1329.png";

const SignUP = () => {
  const handelSignUP = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      console.log(confirmPassword, password, email);
    }
  };
  return (
    <div>
      <div class="block mb-8 p-6 lg:w-2/6 md:w-4/6 w-5/6 mx-auto rounded-lg shadow-lg bg-white max-w-sm">
        <div>
          <img className="w-24 mx-auto mb-4" src={logo} alt="" />
          <h1 className="text-3xl mb-4 font-semibold text-violet-600 text-center">
            Sign Up
          </h1>
        </div>
        <form onSubmit={handelSignUP}>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              class="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
            <label
              for="exampleInputPassword2"
              class="form-label mt-4 inline-block mb-2 text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              class="form-control block
              mt-1
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="confirm password"
            />
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-violet-600 checked:border-violet-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
              >
                Accept all trams & conditions
              </label>
            </div>
          </div>
          <input
            class="
          cursor-pointer
    w-full
    px-6
    py-2.5
    bg-violet-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-violet-700 hover:shadow-lg
    focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-violet-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
            type="submit"
            value="Sign Up"
          />

          <p class="text-gray-800 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              class="text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
