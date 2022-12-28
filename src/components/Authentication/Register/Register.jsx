import React, { useContext, useState } from "react";
import "./Register.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faUpload } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.data.url);
        const userInfo = {
            displayName: name,
            photoURL: data.data.url
        }
        if(data.success){
            createUser(email, password)
          .then((result) => {
            const user = result.user;
            navigate("/home");
            form.reset();
            setError("");
            console.log(user);
            updateUser(userInfo)
              .then(() => {})
              .catch((err) => {
                setError(err);
              });
          })
          .catch((err) => {
            setError(err);
          });
        }
      });
  };
  return (
    <form
      className="bg-white w-96 mx-auto my-32 rounded-[30px]"
      onSubmit={handleSignUp}
    >
      <h1 className="my-6 text-3xl font-semibold">SignUp</h1>
      <input
        type="name"
        name="name"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <input
        id="image"
        type="file"
        name="image"
        className="image-input input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <input
        type="password"
        name="password"
        placeholder="*****"
        className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <label
        htmlFor="image"
        className="image-label w-full border-2 border-blue-400 block mx-auto border-dashed max-w-xs mt-3 rounded-xl p-7 hover:cursor-pointer"
      >
        <div>
          <h4 className="text-2xl text-black font-semibold">Profile Picture</h4>
          <FontAwesomeIcon
            icon={faCloudUpload}
            className="text-5xl my-3 text-blue-500"
          ></FontAwesomeIcon>
          <p className="text-xl">Supported Files</p>
          <p className="text-xl font-semibold text-black">JPG, JPEG, PNG</p>
        </div>
      </label>
      <p className="text-red-400">{error.message}</p>
      <button className="btn rounded-full w-full btn-primary max-w-xs my-5">
        SignUp
      </button>
      <p className="text-sky-500 my-3">
        Already have an Account?Please{" "}
        <Link
          to="/login"
          className="underline text-lg font-semibold text-blue-600"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
