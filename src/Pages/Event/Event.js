import { ImCross } from "react-icons/im";
import { FiUploadCloud } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import logo from "../../media/logos/Group 1329.png";

import { useState } from "react";

const Event = ({ event, setEvents, events, id }) => {
  const { img, name, date, _id } = event;
  const [updateId, setUpdateId] = useState("");

  const handelDeleteEvent = async (id) => {
    const agree = window.confirm("are you sure delete event");
    if (agree) {
      await fetch(`https://arcane-reaches-95642.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = events.filter((e) => e._id !== _id);
          setEvents(remaining);
        });
    }
  };
  /* update from */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(id);
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://arcane-reaches-95642.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Successfully event updated!");
    console.log("This is id:", _id);
  };
  const addDonation = (name, img, date) => {
    const event = { name, img, date };
    fetch("https://arcane-reaches-95642.herokuapp.com/donation", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(event),
    });
    console.log(event);
  };
  return (
    <div>
      <div className="md:max-w-xl max-w-xs mx-auto rounded-3xl shadow-md bg-coolGray-50 text-coolGray-800">
        <div className="relative">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-coolGray-500"
          />

          <FiUploadCloud
            onClick={() => setUpdateId(_id)}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="absolute text-white p-1 cursor-pointer rounded-full bg-green-600 text-3xl left-0.5 top-0.5"
          ></FiUploadCloud>
          <ImCross
            onClick={() => handelDeleteEvent(_id)}
            className=" text-white bg-red-600 rounded-full p-1 cursor-pointer text-2xl absolute right-0.5 top-0.5"
          ></ImCross>
        </div>
        <div className="flex flex-col justify-between">
          <button
            onClick={() => {
              addDonation(name, img, date);
            }}
            type="button"
            className="flex items-center justify-center w-full py-6 p-3 font-semibold tracking-wide  bg-violet-600 text-white text-xl hover:bg-violet-700"
          >
            {name}
          </button>
        </div>
      </div>

      {/* this is modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Update event
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* update from */}

            <div className="bg-violet-100 py-8 w-72 mx-auto rounded-lg mb-8 mt-8">
              <img className="w-24 mx-auto mb-3" src={logo} alt="" />
              <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-60">
                <input
                  className="w-60 h-10 my-2 rounded-lg pl-4"
                  placeholder="name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}

                <input
                  className="w-60 h-10 my-2 rounded-lg  pl-4"
                  placeholder="Date"
                  {...register("date", { required: true })}
                />
                <br />
                {errors.date && (
                  <span className="text-red-500">This field is required</span>
                )}
                <input
                  className="w-60 h-10 my-2 rounded-lg  pl-4"
                  placeholder="image url"
                  {...register("img", { required: true })}
                />
                <br />

                {errors.img && (
                  <span className="text-red-500">This field is required</span>
                )}

                <input
                  className="self-center cursor-pointer w-60 mt-4 px-8 py-3 font-semibold rounded hover:bg-violet-700 bg-violet-500"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
