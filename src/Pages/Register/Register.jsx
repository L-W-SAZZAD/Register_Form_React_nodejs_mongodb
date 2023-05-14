import React, { useContext, useState } from "react";
import { FcBusinessman, FcUnlock, FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../UserContext/UserContext";

export default function Register() {
  // context
  const { googleSignIn, faceBookLogIN, githubLogIn } = useContext(AuthContext);
  // context
  // state show hide eye icon
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  // state show hide eye icon
  // input value
  const [inputValue, setInputValue] = useState(null);
  const [error, setError] = useState("");
  // input value
  // form control
  const handelSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((data) => {
        setError(data?.error);
        toast.success(data?.message);
        e.target.reset();
      });
  };
  // form control
  // input control
  const handelInput = (e) => {
    setInputValue((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  // input control

  // handelGoogle
  const handelGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success(" Success");
      })
      .catch((error) => toast.error(error.message));
  };
  // handelGoogle
  // handelFacebook
  const handelFacebook = () => {
    faceBookLogIN()
      .then((result) => {
        const user = result.user;
        toast.success(" Success");
      })
      .catch((error) => toast.error(error.message));
  };
  // handelFacebook
  // handelFacebook
  const handelGithub = () => {
    githubLogIn()
      .then((result) => {
        const user = result.user;
        toast.success(" Success");
      })
      .catch((error) => toast.error(error.message));
  };
  // handelFacebook
  return (
    <div className="bg z-10">
      <div className="lg:w-[1240px] lg:mx-auto md:w-full sm:w-full w-full lg:px-0 md:px-2 sm:px-3 px-3">
        <form
          onSubmit={handelSubmit}
          className="register  py-10 flex justify-center items-center "
        >
          <div className="box bg-[#ebe9e9] p-10 rounded-md cursor-pointer">
            <h1 className=" text-4xl text-center font-semibold tracking-wide uppercase text-[#4e87b6] pb-5">
              Sign Up
            </h1>
            {/* name filed */}
            <div className="input_filed relative ">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none  inline-block text-lg"
                type="text"
                name="name"
                id="text"
                placeholder="Name"
              />

              {/* icons */}
              <FcBusinessman className=" absolute top-1/2 translate-y-[-50%] left-1 text-2xl" />
              {/* icons */}
            </div>

            {/* name filed */}
            {/* email filed */}
            <div className="input_filed relative">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none mt-3 text-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              {/* icons */}
              <MdEmail className=" absolute top-1/2 translate-y-[-25%] left-1 text-2xl" />
              {/* icons */}
            </div>
            {/* email filed */}
            {/* password filed */}
            <div className="input_filed relative">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none mt-3 text-lg"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              {/* icons */}
              <FcUnlock className=" absolute top-1/2 left-1 text-2xl translate-y-[-25%]" />
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <AiFillEye className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                ) : (
                  <AiFillEyeInvisible className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                )}
              </div>
              {/* icons */}
            </div>
            {/* email filed */}
            {/* confirm password filed */}
            <div className="input_filed relative">
              <input
                onChange={handelInput}
                className="input_flied outline-none border-none mt-3 text-lg"
                type={confirmShowPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              {/* icons */}
              <FcUnlock className=" absolute top-1/2 left-1 text-2xl translate-y-[-25%]" />
              <div onClick={() => setConfirmShowPassword(!confirmShowPassword)}>
                {confirmShowPassword ? (
                  <AiFillEye className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                ) : (
                  <AiFillEyeInvisible className=" absolute top-1/2 right-1 text-2xl translate-y-[-25%]" />
                )}
              </div>
              {/* icons */}
            </div>
            {/* confirm password filed */}
            {/* error message */}
            {error && (
              <p className="error text-base text-[#ea5454]  tracking-wide w-fit bg-[#ffffff]  rounded-full px-2 font-thin">
                {error}
              </p>
            )}
            {/* error message */}
            {/* submit button */}
            <div className="button">
              <button
                type="submit"
                className=" px-4 py-2 w-full rounded-md mt-5 font-semibold tracking-wide focus:bg-slate-400 bg-[#4e87b6] text-lg"
              >
                Sign Up
              </button>
            </div>
            {/* submit button */}

            {/* social media */}
            <div>
              <p className=" text-center capitalize pt-5 text-[#878080]">
                Or sign up with
              </p>
              {/* social Icons */}
              <div className="flex justify-center gap-10 mt-5 cursor-pointer">
                <FcGoogle onClick={handelGoogle} className="text-2xl" />
                <FaFacebook
                  onClick={handelFacebook}
                  className="text-2xl text-[#2f55ec]"
                />
                <AiFillGithub onClick={handelGithub} className="text-2xl" />
              </div>
              {/* social Icons */}
              {/* already have an account */}
              <p className="text-center text-sm pt-3">
                Already Have An Account{" "}
                <Link
                  to="/login"
                  className="text-[#4350e1] text-base ml-2 underline font-semibold"
                >
                  Log In
                </Link>
              </p>
              {/* already have an account */}
            </div>
            {/* social media */}
          </div>
        </form>
      </div>
    </div>
  );
}
