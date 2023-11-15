"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Messages from "./messages";
import UserCard from "./usercard";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {  getLoginUserDetail } from "@/redux/login_user/login_user.action";
import { State } from "@/redux/store";
import { getAllUsers } from "@/redux/user/user.action";

const Page = () => {
  const dispatch = useDispatch()

  const [conversations, setconversations] = useState([]);
  const [searchUserInput, setSearchUserInput] = useState('');
 
  const {loginUserDetail} = useSelector((store:State)=>store.loginUserReducer)
  const {allUsers} = useSelector((store:State)=>store.userReducer)
  // console.log( 'from store', loginUserDetail)
  // console.log('all', allUsers)
  useEffect(() => {
    dispatch(getLoginUserDetail() as any);
  }, [])
  useEffect(() => {
    dispatch(getAllUsers(searchUserInput) as any);
  }, [])
  


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
              src={loginUserDetail?.profileImage}
              alt=""
            />
            <p>{loginUserDetail?.userName}</p>
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
            {allUsers?.map((ele, index) => (
              <UserCard key={ele?._id} {...ele}  />
            ))}
          </div>
        </div>
      </section>
      <section className="w-[100%]   " >
        <Messages   />
      </section>
    </main>
  );
};

export default Page;
