import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="card card-side w-[30%] m-auto mt-40 rounded-none bg-base-100 shadow-xl max-sm:w-full">
        
        <div className="card-body">
          <h2 className="card-title">Login</h2>
            <div className="container-login flex flex-col w-full">
                <div className="input-container mb-5">
                <input className="w-full" style={{padding:'10px 5px', border:'1px solid black'}} type="Email"  placeholder="Email"/>
                </div>
                <div className="input-container">
                <input className="w-full" style={{padding:'10px 5px', border:'1px solid black'}} type="password" placeholder="Password" />

                </div>
            </div>
          <div className="card-actions justify-end">
            <button className="btn bg-lime-400 text-white font-bold text-2xl w-full">Login</button>
            <button className="btn  bg-cyan-400 text-white font-bold text-2xl w-full">Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
