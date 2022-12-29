import {
  faFaceSmile,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import PostModal from "../TimelinePost/PostModal";

const Post = () => {
  const { user } = useContext(AuthContext);
  const handlePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value;
    const statusText = {status};
    fetch("http://localhost:5000/status", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusText),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
            form.reset();
        }
      });
  };
  return (
    <div className="my-5 bg-zinc-800 p-3 rounded-lg">
      <form onSubmit={handlePost} className="flex items-center mb-3">
        <img
          src={user?.uid && user.photoURL}
          className="w-10 h-9 rounded-full mr-3"
          alt=""
        />
        <input
          type="text"
          name="status"
          placeholder={`What's On your mind ${user?.uid && user.displayName}?`}
          className="input w-full bg-gray-700 rounded-full h-10"
        />
        <button className="btn btn-sm h-10 ml-2">Post</button>
      </form>
      <hr className="border border-gray-500" />
      <div className="flex justify-around my-4">
        <button className="btn btn-ghost flex items-center">
          <FontAwesomeIcon
            icon={faVideo}
            className="mr-2 text-2xl text-red-500"
          ></FontAwesomeIcon>
          <p className="font-semibold">Live Video</p>
        </button>
        <label htmlFor="my-modal-3" className="btn btn-ghost flex items-center">
          <FontAwesomeIcon
            icon={faImage}
            className="mr-2 text-2xl text-green-400"
          ></FontAwesomeIcon>
          <p className="font-semibold">Photo/Video</p>
        </label>
        <button className="btn btn-ghost flex items-center">
          <FontAwesomeIcon
            icon={faFaceSmile}
            className="mr-2 text-2xl text-yellow-300"
          ></FontAwesomeIcon>
          <p className="font-semibold">Feeling/activity</p>
        </button>
      </div>
      <PostModal></PostModal>
    </div>
  );
};

export default Post;
