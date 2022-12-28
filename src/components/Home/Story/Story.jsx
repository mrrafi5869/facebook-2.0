import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Story = () => {
  const { user } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    // stories
    fetch("http://localhost:5000/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
      });
  }, [stories]);

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handleShareStory = (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
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
        story(data.data.url);
      });
    // story upload on mongodb
    const story = (photo) => {
      const story = { photo };
      fetch("http://localhost:5000/story", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(story),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  };
  return (
    <form onSubmit={handleShareStory} className="flex my-6">
      <div className="mr-3">
        <label htmlFor="story">
          <div className="rounded-lg bg-gray-600 relative hover:cursor-pointer">
            <img
              src={user?.uid && user.photoURL}
              className="h-40 w-[133px] rounded-t-lg"
              alt=""
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="bg-blue-500 text-white p-2 rounded-full border-4 absolute border-black bottom-6 left-12 hover:bg-blue-400"
            ></FontAwesomeIcon>
            <p className="mt-4 mb-1 font-semibold text-center">Create Story</p>
          </div>
          <button className="btn btn-xs w-full btn-primary">share</button>
        </label>
      </div>
      <div className="flex">
        {stories &&
          stories.map((story, index) => (
            <img
              key={index}
              src={story.photo}
              alt=""
              className="className=h-40 w-[133px] rounded-lg mr-3"
            />
          ))}
      </div>
      <input id="story" type="file" name="image" className="image-input" />
    </form>
  );
};

export default Story;
