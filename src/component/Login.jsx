import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignForm]=useState(true);
    const toggleSingnInform=()=>{
        setIsSignForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="p-12 absolute bg-black backdrop-blur-md w-3/12 mx-auto my-40  right-0 left-0 bg-opacity-70">
      <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
        { !isSignInForm && <input type="text" placeholder="Full Name"  className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email" name="email" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" name="password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"} </button>
        <p className="py-4 text-white" onClick={toggleSingnInform}>{isSignInForm?"New to Netflix ? Sign up Now":"Already Resgistred"} </p>
      </form>
    </div>
  );
};

export default Login;
