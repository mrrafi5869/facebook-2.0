import React, { useContext, useState } from "react";
import "./Register.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faUpload } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser, setLoading, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const date = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];
  const month = [
    "january", "February", "March", "April", "May", "June", "July", "August", 'September',"October", "November", "December"
  ];
  const year = [
    2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015
  ]
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const veristy = form.education.value;
    const number = form.number.value;
    const address = form.address.value;
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
          photoURL: data.data.url,
        };
        if (data.success) {
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              navigate("/home");
              form.reset();
              setError("");
              console.log(user);
              updateUser(userInfo)
                .then(() => {})
                .catch((err) => {
                  setError(err);
                });
              saveUser(name, veristy, number, address, email, data.data.url);
            })
            .catch((err) => {
              setError(err);
              setLoading(false);
            });
        }
      });
    const saveUser = (name, versity, number, address, email, photo) => {
      const user = { name, versity, number, address, email, photo };
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  };
  return (
    <form
      className="bg-white w-[600px] mx-auto my-32 rounded-[30px] text-center"
      onSubmit={handleSignUp}
    >
      <h1 className="my-6 text-3xl text-black uppercase font-semibold">
        SignUp
      </h1>
      <div className="flex mx-2">
        <input
          type="name"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs mt-3 mr-3 rounded-xl p-7"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
          required
        />
      </div>
      <input
        id="image"
        type="file"
        name="image"
        className="image-input input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <div className="flex mx-2">
        <input
          type="password"
          name="password"
          placeholder="*****"
          className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7 mr-2"
          required
        />
        <input
          type="text"
          name="education"
          placeholder="School/College/Versity"
          className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
          required
        />
      </div>
      <div className="flex mx-2">
        <input
          type="phone"
          name="number"
          placeholder="Number"
          className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7 mr-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
          required
        />
      </div>
      <div className="flex justify-around mx-2 mt-3">
        <select className="select select-bordered rounded-lg max-w-xs">
          {
            date.map((singleDate, index) => <option key={index}>{singleDate}</option>)
          }
        </select>
        <select className="select select-bordered rounded-lg max-w-xs">
        {
            month.map((singleMonth, index) => <option key={index}>{singleMonth}</option>)
          }
        </select>
        <select className="select select-bordered rounded-lg max-w-xs">
        {
            year.map((singleYear, index) => <option key={index}>{singleYear}</option>)
          }
        </select>
      </div>
      <label
        htmlFor="image"
        className="image-label w-full border-2 border-blue-400 block mx-auto border-dashed max-w-xs mt-3 rounded-xl p-7 hover:cursor-pointer"
        required
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
      <div>
        <button className="btn btn-primary rounded-full w-full max-w-xs my-5">
          {loading ? (
            <button className="btn btn-square loading"></button>
          ) : (

            "SignUp"
          )}
        </button>
      </div>
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
