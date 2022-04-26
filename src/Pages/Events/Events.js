import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:mx-20 mt-10">
        {events.map((event) => (
          <Event key={event._id} setEvents={setEvents} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
