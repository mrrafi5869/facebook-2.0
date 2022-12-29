import {
  faBell,
  faListDots,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import {
  FaHome,
  FaVideo,
  FaShoppingCart,
  FaLayerGroup,
  FaGamepad,
  FaFacebook,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserInfo(data)
    })
  } ,[userInfo])
  const navigate = useNavigate();
  const loggingOut = () => {
    logOut()
      .then(() => {
        navigate("/register");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="navbar bg-gray-800 px-5 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li></li>
          </ul>
        </div>
        <Link>
          <FaFacebook className="mr-3 text-4xl text-blue-400"></FaFacebook>
        </Link>
        <Link>
          <input
            type="text"
            placeholder="Search Facebook"
            className="input w-full bg-gray-700 rounded-full h-10"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <FaHome className="text-2xl text-gray-400 mx-7"></FaHome>
            </Link>
          </li>
          <li>
            <Link>
              <FaVideo className="text-2xl text-gray-400 mx-7"></FaVideo>
            </Link>
          </li>
          <li>
            <Link>
              <FaShoppingCart className="text-2xl text-gray-400 mx-7"></FaShoppingCart>
            </Link>
          </li>
          <li>
            <Link>
              <FaLayerGroup className="text-2xl text-gray-400 mx-7"></FaLayerGroup>
            </Link>
          </li>
          <li>
            <Link>
              <FaGamepad className="text-2xl text-gray-400 mx-7"></FaGamepad>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-end">
        <li>
          <Link
            className="navbar-end-icon bg-gray-600 mx-2 text-white"
            onClick={loggingOut}
          >
            <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link className="navbar-end-icon bg-gray-600 mx-2 text-white">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <Link className="navbar-end-icon bg-gray-600 mx-2 text-white">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </Link>
        </li>
        <li>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="form-control">
              <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder={user?.uid && user?.displayName}
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    readOnly
                  />
                <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder={user?.uid && user?.email}
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    readOnly
                  />
                <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder={userInfo.number}
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    readOnly
                  />
                <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder={userInfo.address}
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    readOnly
                  />
                <label className="label">
                    <span className="label-text">Versity</span>
                  </label>
                  <input
                    type="text"
                    placeholder={userInfo.versity}
                    className="input input-bordered w-full max-w-xs rounded-lg"
                    readOnly
                  />
              </div>
            </div>
          </div>
        </li>
        <li>
          <label htmlFor="my-modal-3">
            <div className="avatar online hover:cursor-pointer">
              <div className="w-10 rounded-full">
                <img
                  src={user?.uid && user?.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
