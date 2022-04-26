import { ImCross } from "react-icons/im";
import { FiUploadCloud } from "react-icons/fi";
import useEvents from "../../Hook/useEvents";

const Event = ({ event, setEvents }) => {
  const { img, name, date, _id } = event;
  const [events] = useEvents();

  const handelDeleteEvent = async (id) => {
    const agree = window.confirm("are you sure delete event");
    if (agree) {
      await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = events.filter((e) => e._id !== _id);
          setEvents(remaining);
        });
    }
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

          <FiUploadCloud className="absolute text-white p-1 cursor-pointer rounded-full bg-green-600 text-3xl left-0.5 top-0.5"></FiUploadCloud>
          <ImCross
            onClick={() => handelDeleteEvent(_id)}
            className=" text-white bg-red-600 rounded-full p-1 cursor-pointer text-2xl absolute right-0.5 top-0.5"
          ></ImCross>
        </div>
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
