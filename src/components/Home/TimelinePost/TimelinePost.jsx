import {
  faComment,
  faEllipsis,
  faShare,
  faThumbsUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const TimelinePost = () => {
  const { user } = useContext(AuthContext);
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setTimelinePosts(data);
      });
  }, [timelinePosts]);
  console.log(like);
  return (
    <div className="my-6">
      {timelinePosts &&
        timelinePosts.map((post, index) => (
          <div key={index} className="mx-auto my-4 bg-zinc-800 rounded-lg p-2">
            <div className="flex justify-between px-5 py-3">
              <div className="flex">
                <img
                  src={user?.uid && user?.photoURL}
                  className="mr-3 h-10 w-10 rounded-full"
                  alt=""
                />
                <p className="font-semibold">
                  {user?.uid && user?.displayName}
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="mr-5"
                ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </div>
            </div>
            <p className="mx-5">{post.caption}</p>
            <img src={post.photo} className="w-[700px]" alt="" />
            <hr className="border border-gray-400 mt-10" />
            <div className="flex justify-between mb-2 p-5">
              <div className={`text-xl ${like ? "text-blue-400" : ""}`} onClick={() => setLike(!like)}>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="mr-2"
                ></FontAwesomeIcon>
                Like
              </div>
              <div className="text-xl">
                <FontAwesomeIcon
                  icon={faComment}
                  className="mr-2"
                ></FontAwesomeIcon>
                Comment
              </div>
              <div className="text-xl">
                <FontAwesomeIcon
                  icon={faShare}
                  className="mr-2"
                ></FontAwesomeIcon>
                Share
              </div>
            </div>
            <div className="flex mx-2 items-center">
            <input type="text" placeholder="Type here" className="input input-bordered w-full h-10 rounded-lg" />
              <button className="btn bg-blue-600 btn-active rounded-lg ml-2 btn-sm">Comment</button>
            </div>
            <div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimelinePost;
