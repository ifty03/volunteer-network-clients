import React from "react";
import logo from "../../media/logos/Group 1329.png";
import userIcon from "../../media/logos/users-alt 1.png";
import addIcon from "../../media/logos/plus 1.png";
import useEvents from "../../Hook/useEvents";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaTrashAlt } from "react-icons/fa";
import auth from "../../firebase.init";

const RegisterList = () => {
  const [user] = useAuthState(auth);
  const [events] = useEvents();
  console.log(events);

  return (
    <div className="h-screen bg-white grid grid-cols-4">
      <div>
        <img className="w-48 mx-auto my-3" src={logo} alt="" />
        <div className="flex mt-10 text-violet-600 cursor-pointer items-center w-4/6 mx-auto">
          <img className="w-7 mr-2" src={userIcon} alt="" />
          <p>Volunteer register list</p>
        </div>
        <div className="flex items-center cursor-pointer my-2 w-4/6 mx-auto">
          <img className="w-7 mr-2" src={addIcon} alt="" />
          <p>Add event</p>
        </div>
      </div>
      <div
        className="col-span-3 
"
      >
        <h2 className="text-2xl font-semibold mt-4">Volunteer register list</h2>
        <div
          className="h-screen px-8 py-10 mt-7 rounded-lg"
          style={{ backgroundColor: "#F5F6FA" }}
        >
          <div className=" bg-white p-5">
            <div className="" style={{ backgroundColor: "#F5F6FA" }}>
              <ul className="flex justify-evenly py-4 rounded-lg">
                <li>Name</li>
                <li>Email ID</li>
                <li>Register Date</li>

                <li>Action</li>
              </ul>
            </div>
            <div className="">
              {events.map((e) => (
                <div className="grid grid-cols-4 my-3  text-left">
                  <p className="mx-auto">{e.name}</p>
                  <p className="mx-auto">
                    {user?.email || "youremail@gmail.com"}
                  </p>
                  <p className="mx-auto">{e.date}</p>
                  <p className="mx-auto">
                    <FaTrashAlt className="text-4xl bg-red-500 text-white p-2 rounded-xl cursor-pointer"></FaTrashAlt>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterList;
