import React, { useEffect, useRef } from "react";
import google from "../media/search.png";
import facebook from "../media/facebook.png";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Lottie from "lottie-web";
import animation1 from "../media/animation3.json";

function Signup() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation1,
    });
  }, []);
  return (
    <div className="w-full mt-8 px-2 pb-6">
      <div
        className="border-gray-300 border-8 mx-auto shadow-md "
        style={{ maxWidth: "620px" }}
      >
        <div className="flex flex-row uppercase bg-gray-200 justify-around font-semibold">
          <Link to="/">
            <div className="py-4 border-gray-900 border-b-4 ">Sign-up</div>
          </Link>
          <Link to="/login">
            <div className="py-4 transform duration-150 hover:scale-105 ">
              Sign-in
            </div>
          </Link>
        </div>
        <div className="text-center text-4xl py-6 font-light tracking-wide">
          Create your account
        </div>
        <div ref={container} className="h-36"></div>

        <div className="text-center p-4 font-light tracking-wider">
          <div>Build skills for today, tomorrow, and beyond.</div>
          <div>Education to future-proof your career.</div>
        </div>
        <div className="text-center flex flex-row justify-around p-4">
          <div className=" hover:bg-gray-300 duration-300 cursor-pointer shadow-md px-6 py-2 rounded-md flex flex-row items-center space-x-2">
            <img src={google} className="h-8" alt="google" />
            <div>Sign up with Google</div>
          </div>
          <div className="hover:bg-gray-300 duration-300 cursor-pointer shadow-md px-6 py-2 rounded-md flex flex-row items-center space-x-2">
            <img src={facebook} className="h-8" alt="facebook" />
            <div>Sign up with Facebook</div>
          </div>
        </div>
        <div className="text-center p-4">-------- or --------</div>
        <div className="">
          <form
            className=" space-y-4 flex flex-col items-center"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="md:w-96"
              size="medium"
              required={true}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className="md:w-96"
              size="medium"
              required={true}
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              className="md:w-96"
              size="medium"
              required={true}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="md:w-96"
              size="medium"
              required={true}
            />
            <div className="p-4 text-center">
              By clicking Sign Up, you agree to our
              <span className=" text-blue-600"> Terms of Use </span>
              and our <span className=" text-blue-600">Privacy Policy.</span>
            </div>
            <div className="pb-8">
              <Button variant="contained" color="primary">
                SIGN UP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
