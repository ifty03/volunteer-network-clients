import React, { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donation")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:w-4/6 w-5/6 gap-8 mx-auto my-10">
      {donations.map((donation) => (
        <Donation key={donation._id} donation={donation}></Donation>
      ))}
    </div>
  );
};

export default Donations;
