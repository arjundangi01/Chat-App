"use client";

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Messages from "./messages";
import UserCard from "./usercard";
import Image from "next/image";

const Page = () => {
  return (
    <main className="flex ">
      <section className="md:w-[550px] border min-h-[100vh] max-h-[100vh] py-10 px-8">
        <div className="border rounded-lg py-3">
          <div className="flex w-full justify-between px-5 ">
            <p>User Profile</p>
            <p>icon</p>
          </div>
          <hr className="my-2" />
          <div className="flex items-center gap-3 px-5">
            <img
              className="max-w-[4rem] rounded-[50%]  border-2 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
              alt=""
            />
            <p>User Name</p>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="border rounded-lg  mt-4 ">
          <div className="w-full  flex justify-between h-10 items-center px-2 ">
            <input
              type="text"
              placeholder="search user"
              className="w-[100%]  ps-2 focus:outline-none"
            />
            <IoSearchOutline className='text-[1.5rem]' />
          </div>
          <hr className="my-2" />

          <div className="">
            {/* {map} */}
            {[4, 2, 2, 3, 1].map((ele, index) => (
              <UserCard key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-[100%]   " >
        <Messages  />
      </section>
    </main>
  );
};

export default Page;
