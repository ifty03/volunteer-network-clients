import React from "react";
import useEvents from "../../Hook/useEvents";
import img1 from "../../media/images/animalShelter.png";
import img2 from "../../media/images/babySit.png";
import img3 from "../../media/images/birdHouse.png";
import img4 from "../../media/images/childSupport.png";
import img5 from "../../media/images/cleanWater.png";
import img6 from "../../media/images/clearnPark.png";
import img7 from "../../media/images/clothSwap.png";
import img8 from "../../media/images/driveSafety.png";
import img9 from "../../media/images/extraVolunteer.png";
import img10 from "../../media/images/ITHelp.png";

const Home = () => {
  return (
    <div>
      <section className="py-6 bg-coolGray-100 text-coolGray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-coolGray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-coolGray-500 aspect-square"
            src={img9}
          />
          <img
            src={img10}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-coolGray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
