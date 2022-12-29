import { faImages, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const PostModal = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handlePost = (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    const caption = event.target.caption.value;
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // image post
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.url);
        // story function called
        post(caption, data.data.url);
      });
    // post upload on mongodb
    const post = (caption, photo) => {
      const post = { caption, photo };
      fetch("http://localhost:5000/post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <form className="modal" onSubmit={handlePost}>
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-semibold text-center">Create Post</h3>
          <hr className="border border-gray-600 my-3" />
          <div className="flex">
            <img
              src={user?.uid && user?.photoURL}
              className="h-10 w-10 rounded-full"
              alt=""
            />
            <p className="font-semibold ml-2">
              {user?.uid && user?.displayName}
            </p>
          </div>
          <div className="flex items-center my-4">
            <input
              type="text"
              name="caption"
              placeholder={`What's on your mind ${
                user?.uid && user?.displayName
              }?`}
              className="input w-full h-8 mr-5"
            />
            <FontAwesomeIcon
              icon={faSmile}
              className="text-2xl"
            ></FontAwesomeIcon>
          </div>
          <label
            htmlFor="post"
            className="border border-gray-500 p-2 w-full block mx-auto mt-3 rounded-xl hover:cursor-pointer text-center hover:bg-zinc-800"
          >
            <div>
              <h4 className="text-2xl text-white font-semibold">
                Upload Image
              </h4>
              <FontAwesomeIcon
                icon={faImages}
                className="text-5xl my-3 text-blue-300"
              ></FontAwesomeIcon>
              <p className="text-xl">Add Photos/Videos</p>
              <p className="font-semibold text-white text-sm">
                Or drag and drop
              </p>
            </div>
          </label>
          <button className="btn w-full btn-active btn-ghost my-3 rounded-lg">
          <label htmlFor="my-modal-1">
            Post
          </label>
          </button>
          <input
            id="post"
            name="image"
            type="file"
            placeholder="Type here"
            className="input w-full max-w-xs image-input"
          />
        </div>
      </form>
    </div>
  );
};

export default PostModal;
