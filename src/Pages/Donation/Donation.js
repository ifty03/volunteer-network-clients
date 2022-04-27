import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Donation = ({ donation }) => {
  const [user] = useAuthState(auth);
  console.log(donation);
  const { name, img, date } = donation;
  return (
    <div>
      <div className="max-w-md rounded-lg p-8 sm:flex sm:space-x-6 bg-violet-100 text-coolGray-800">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full h-full rounded bg-coolGray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <span className="text-sm text-coolGray-600">{date}</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="text-coolGray-600">{user?.email}</span>
            </span>
          </div>
          <button className="w-fit ml-auto text-white rounded-lg py-1 px-4 hover:bg-gray-500 bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
