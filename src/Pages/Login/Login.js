import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../media/logos/Group 1329.png";
import Social from "../Shared/Social/Social";

const Login = () => {
  /* check authintication */

  const [currentUser] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (currentUser) {
    navigate(from, { replace: true });
  }

  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    if (currentUser) {
      toast.success("Login Successfully");
    }
    e.target.reset();
  };

  return (
    <div>
      <div className="block mb-8 p-6 lg:w-2/6 md:w-4/6 w-5/6 mx-auto rounded-lg shadow-lg bg-white max-w-sm">
        <div>
          <img className="w-24 mx-auto mb-4" src={logo} alt="" />
          <h1 className="text-3xl mb-4 font-semibold text-violet-600 text-center">
            Login
          </h1>
        </div>
        <form onSubmit={handelLogin}>
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
              onBlur={(e) => setEmail(e.target.value)}
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
              required
              name="password"
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
            <p className="text-red-500">{error?.message}</p>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-violet-600 checked:border-violet-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <p
              onClick={async () => {
                if (email) {
                  await sendPasswordResetEmail(email);
                  toast.success("Resat email Sent ");
                } else {
                  toast.error("an email must be use");
                }
              }}
              className="text-violet-600 cursor-pointer hover:text-violet-700 focus:text-violet-700 "
            >
              Forgot password?
            </p>
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
            value="Sign In"
          />

          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signUp"
              className="text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
        <div>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;
