import { async } from "@firebase/util";
import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../media/logos/Group 1329.png";

const Login = () => {
  const [currentUser] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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
      <div class="block mb-8 p-6 lg:w-2/6 md:w-4/6 w-5/6 mx-auto rounded-lg shadow-lg bg-white max-w-sm">
        <div>
          <img className="w-24 mx-auto mb-4" src={logo} alt="" />
          <h1 className="text-3xl mb-4 font-semibold text-violet-600 text-center">
            Login
          </h1>
        </div>
        <form onSubmit={handelLogin}>
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
              required
              name="password"
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
            <p className="text-red-500">{error?.message}</p>
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
                Remember me
              </label>
            </div>
            <a
              href="#!"
              class="text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
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
            value="Sign In"
          />

          <p class="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signUp"
              class="text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
