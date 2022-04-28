import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from "../../media/logos/Group 1329.png";
import { async } from "@firebase/util";

const SignUP = () => {
  /* all states */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  /* email varifyction */
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const handelSignUP = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const check = e.target.check.checked;
    if (check) {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        console.log(confirmPassword, password, email);
        e.target.reset();
        toast.success("Successfully user created");
      } else {
        toast.error("password are not same");
      }
    } else {
      toast.error("Accept all trams and conditions ");
    }
  };
  return (
    <div>
      <div className="block mb-8 p-6 lg:w-2/6 md:w-4/6 w-5/6 mx-auto rounded-lg shadow-lg bg-white max-w-sm">
        <div>
          <img className="w-24 mx-auto mb-4" src={logo} alt="" />
          <h1 className="text-3xl mb-4 font-semibold text-violet-600 text-center">
            Sign Up
          </h1>
        </div>
        <form onSubmit={handelSignUP}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="form-control
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
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="form-control block
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
              htmlFor="exampleInputPassword2"
              className="form-label mt-4 inline-block mb-2 text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="form-control block
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
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                name="check"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-violet-600 checked:border-violet-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Accept all trams & conditions
              </label>
            </div>
          </div>
          <input
            className="
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

          <p className="text-gray-800 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
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
