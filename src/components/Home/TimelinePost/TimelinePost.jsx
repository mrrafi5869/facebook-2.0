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
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const TimelinePost = () => {
  const { user } = useContext(AuthContext);
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    fetch("https://job-task-server-jet.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setTimelinePosts(data);
      });
  }, [timelinePosts]);
  return (
    <div className="my-6">
      {timelinePosts &&
        timelinePosts.map((post, index) => (
          <div key={index} className="mx-auto my-4 bg-zinc-800 rounded-lg p-2">
            <div className="flex justify-between px-5 py-3">
              <div className="flex">
                <img
                  src={post.userPhoto}
                  className="mr-3 h-10 w-10 rounded-full"
                  alt=""
                />
                <p className="font-semibold">
                  {post.userName}
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
            <div className="flex justify-between mt-2">
              <span>
                <p>Like</p>
              </span>
              <Link className="underline">Details</Link>
            </div>
            <hr className="border border-gray-400 mb-3" />
            <div className="flex justify-between mb-2 px-5">
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
            <form className="flex mx-2 items-center">
            <img
                  src={user?.uid && user?.photoURL}
                  className="w-10 h-10 rounded-full mr-3"
                  alt=""
                />
            <input type="text" placeholder="Comment here" className="input input-bordered w-full h-10 rounded-lg" />
              <button className="btn bg-blue-600 btn-active rounded-lg ml-1 btn-sm"><PaperAirplaneIcon className="h-6 w-6 text-white"></PaperAirplaneIcon></button>
            </form>
            <div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimelinePost;
