import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import SearchFeild from "../Shared/SearchFeild/SearchFeild";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(5);
  const [total, setTotal] = useState(0);
  console.log(count);
  useEffect(() => {
    fetch("https://arcane-reaches-95642.herokuapp.com/totalEvents")
      .then((res) => res.json())
      .then((data) => {
        const totalEvent = data?.count;
        const totalPage = Math.ceil(totalEvent / parseInt(count));
        setTotal(totalPage);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://arcane-reaches-95642.herokuapp.com/events?page=${page}&count=${count}`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [page, count]);
  const handelPage = (number) => {
    setPage(number);
  };
  return (
    <div>
      <SearchFeild></SearchFeild>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:mx-20 mt-10">
        {events.map((event) => (
          <Event
            key={event._id}
            setEvents={setEvents}
            events={events}
            event={event}
            id={event._id}
          ></Event>
        ))}
      </div>
      <div className="my-10 w-fit mx-auto">
        <span>{"<----"}</span>
        {[...Array(total).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handelPage(number)}
            className={
              number === page
                ? "bg-violet-600 mx-1 shadow-md rounded-sm text-white px-2"
                : "border shadow-md rounded-sm mx-1 px-2"
            }
          >
            {number + 1}
          </button>
        ))}
        <select
          className="border shadow-md rounded-sm mx-1 px-2 py-1"
          onChange={(e) => setCount(e.target.value)}
          name="count"
          id="count"
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        <span>{"---->"}</span>
      </div>
    </div>
  );
};

export default Events;
