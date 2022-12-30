import { faComment, faEllipsis, faShare, faThumbsUp, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const StatusDetails = () => {
    const {comment} = useLoaderData();
  const [like, setLike] = useState(false);
  const { user } = useContext(AuthContext);
  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const postId = form.postId.value;
    const saveComment = { comment, postId };
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      });
  };
    return (
        <div className="mx-auto my-56 p-2 bg-zinc-800 rounded-lg h-[500px]">
            <div className="flex justify-between px-3 py-1">
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
            <p className="text-center font-semibold bg-yellow-300 p-5 mt-1 text-black text-3xl">
              Working...
            </p>
            <div className="flex justify-between mt-2">
              <span>
                <p>Like</p>
              </span>
            </div>
            <hr className="border border-gray-400" />
            <div className="flex justify-between mb-2 p-2">
              <div
                className={`text-xl cursor-pointer ${
                  like ? "text-blue-400" : ""
                }`}
                onClick={() => setLike(!like)}
              >
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
            <form onSubmit={handleComment} className="flex mx-2 items-center">
            <img
                  src={user?.uid && user?.photoURL}
                  className="w-10 h-10 rounded-full mr-3"
                  alt=""
                />
              <input
                type="text"
                name="comment"
                placeholder="Comment here"
                className="input input-bordered w-full h-10 rounded-lg"
              />
              <button className="btn bg-blue-600 btn-active rounded-lg ml-2 btn-sm">
                <PaperAirplaneIcon className="h-6 w-6 text-white"></PaperAirplaneIcon>
              </button>
              <input
                type="text"
                name="postId"
                // defaultValue={status._id}
                className="image-input input input-bordered w-full max-w-xs mt-3 rounded-xl p-7 mr-2"
              />
            </form>
          </div>
    );
};

export default StatusDetails;