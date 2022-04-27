import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import logo from "../../media/logos/Group 1329.png";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    toast.success("Successfully event added!");
  };
  return (
    <div className="bg-violet-100 py-8 w-72 mx-auto rounded-lg mt-8">
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
  );
};

export default AddEvents;
