import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn,setLoading, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        setError("");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  return (
    <form
      className="bg-white w-96 mx-auto my-32 rounded-[30px] text-center"
      onSubmit={handleLogin}
    >
      <h1 className="my-6 text-3xl font-semibold text-black uppercase">
        Log in
      </h1>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <input
        type="password"
        name="password"
        placeholder="*****"
        className="input input-bordered w-full max-w-xs mt-3 rounded-xl p-7"
      />
      <p className="text-red-400">{error.message}</p>
      <div>
        <button className="btn btn-primary rounded-full w-full max-w-xs my-5">
          {loading ? (
            <button className="btn btn-square loading"></button>
          ) : (
            "Login"
          )}
        </button>
      </div>
      <p className="text-sky-500 my-3">
        Don't have an Account?Please{" "}
        <Link
          to="/register"
          className="underline text-lg font-semibold text-blue-600"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
