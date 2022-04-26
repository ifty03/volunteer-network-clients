import React from "react";

const Event = ({ event }) => {
  const { img, name, date } = event;
  return (
    <div>
      <div className="md:max-w-xl max-w-xs mx-auto rounded-3xl shadow-md bg-coolGray-50 text-coolGray-800">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-coolGray-500"
        />
        <div className="flex flex-col justify-between">
          <button
            type="button"
            className="flex items-center justify-center w-full py-6 p-3 font-semibold tracking-wide  bg-violet-600 text-white text-xl hover:bg-violet-700"
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
