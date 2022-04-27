import React from "react";
import logo from "../../../media/logos/Group 1329.png";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/home" className="flex items-center p-2">
          <img className="h-10" src={logo} alt="this is logo" />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/donations"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              }
            >
              Events
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/addEvents"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              }
            >
              Add Events
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user ? (
            <button
              onClick={async () => {
                await signOut(auth);
                toast.success("sign out success");
              }}
              className="md:mr-3"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="self-center px-8 py-3 rounded">
              Sign in
            </Link>
          )}
          <Link
            to="/signUp"
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
          >
            Sign up
          </Link>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
