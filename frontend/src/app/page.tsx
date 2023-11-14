'use client'
import Image from "next/image";
import bannerImg from "./Images/banner.png";
import wave from "./Images/wave.jpg";
import React, { useState } from "react";
import Link from "next/link";
let initialUserObj = {
  userName: "",
  password: "",
};

const Home: React.FC = () => {
  const [userObj, setNewUserObj] = useState(initialUserObj);
  const handleChange = (e:Event) => {
    e.preventDefault();
    const { value, name } = e.target;
    setNewUserObj({ ...userObj, [name]: value });

  };

  const onLogin = () => {
    // console.log(userObj)
    try {

      
      
    } catch (error) {
      
    }
  };
  const onSignup = () => {};
  return (
    <>
      <main>
        <div
          className="flex py-[8rem] px-[20rem]"
          style={{
            backgroundImage: `url(${bannerImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
          }}
        >
          <div className="text-white">
            <h1 className="text-[5rem]">Have your best chat</h1>
            <h2 className="text-[2rem]">Fast Easy Unlimited chat services</h2>
            <div className="flex justify-between mt-12 items-center ">
              <input
                type="text"
                className="bg-transparent border-b-2"
                placeholder="Enter user name"
                name="userName"
                onChange={handleChange}
              />
              <input
                type="text"
                className="bg-transparent border-b-2"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}

              />
              <button
                onClick={onLogin}
                className="bg-[#fd3b83] rounded-2xl hover:bg-[#c35a80] px-4 py-2"
              >
                Login
              </button>
              <p>OR</p>
              <button
                onClick={onSignup}
                className="bg-[#fd3b83] rounded-2xl hover:bg-[#c35a80] px-4 py-2"
              >
                Signup
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <Image className="w-[100%]" src={wave} alt="" />
        <div className="bg-[#74e9e1] text-center text-[#243b99] py-5 ">
          <h1 className="text-6xl">Instant Chat</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
