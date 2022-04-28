import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  return (
    <div className="flex justify-center my-4">
      <FaFacebook
        onClick={() => signInWithFacebook()}
        className="text-3xl mx-3 cursor-pointer text-blue-600"
      ></FaFacebook>
      <FcGoogle
        onClick={() => signInWithGoogle()}
        className="text-3xl mx-3 cursor-pointer"
      ></FcGoogle>
      <BsGithub className="text-3xl mx-3 cursor-pointer"></BsGithub>
    </div>
  );
};

export default Social;
