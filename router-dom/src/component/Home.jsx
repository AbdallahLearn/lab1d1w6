import React from "react";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar/>
      <div className="card bg-base-100 image-full w-96 shadow-xl m-auto mt-40">
        <figure>
          <img
            src="https://i.pinimg.com/564x/68/d9/1a/68d91a4a0c40857674fbd3a22b9f0b03.jpg"
            alt="javasccript"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">JavaScript</h2>
          <p>JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is a core technology alongside HTML and CSS.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">enroll</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
