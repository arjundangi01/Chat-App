"use client";

import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Messages from "./messages";
import {Conversation, UserCard} from "./usercard";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUserDetail } from "@/redux/login_user/login_user.action";
import { State } from "@/redux/store";
import { getAllUsers } from "@/redux/user/user.action";
import {
  typeConversation,
  typeConversationArray,
  typeLoginUserReducer,
  typeUserReducer,
} from "@/redux/user/type";
// import {State} from "../../redux/store"

const Page = () => {
  const dispatch = useDispatch();

  const [conversations, setConversations] = useState<typeConversationArray>([]);
  const [searchUserInput, setSearchUserInput] = useState("");

  const { loginUserDetail }: typeLoginUserReducer = useSelector(
    (store: State) => store.loginUserReducer
  );
  const { allUsers }: typeUserReducer = useSelector(
    (store: State) => store.userReducer
  );
  const onClickForSearchUser = () => {
    
  }
  useEffect(() => {
    dispatch(getLoginUserDetail(loginUserDetail._id) as any);
  }, []);
  useEffect(() => {
    dispatch(getAllUsers(searchUserInput) as any);
  }, []);

  return (
    <main className="flex ">
      <section className="md:w-[550px] border flex flex-col min-h-[100vh]  max-h-[100vh] py-2 px-8">
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
        <div className="border max-h-[210px] min-h-[210px] overflow-y-scroll h-[210px] rounded-lg  mt-4 ">
          <div className="w-full   flex justify-between h-10 items-center px-2 ">
            <input
              type="text"
              placeholder="search user"
              className="w-[100%]  ps-2 focus:outline-none"
            />
            <IoSearchOutline className="text-[1.5rem]" />
          </div>
          <hr className="my-2" />

          <div className="">
            {/* {map} */}
            {allUsers?.map((ele, index) => (
              <UserCard key={ele?._id} user={ele} onClick={onClickForSearchUser} />
            ))}
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="border rounded-lg max-h-[380px] overflow-y-scroll h-[100%]  mt-4 ">
          <div className="w-full  flex justify-between h-5 items-center px-2 pt-2 ">
            <p>Your conversations</p>
          </div>
          <hr className="my-2" />

          <div className="">
            {/* {map} */}
            {conversations?.map((ele, index) => (
              <Conversation key={ele?._id} conversation={ele} loginUser={loginUserDetail} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-[100%]   ">
        <Messages />
      </section>
    </main>
  );
};

export default Page;
