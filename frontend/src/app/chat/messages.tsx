import React from "react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { FcVideoCall } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
import { MyMessage, SenderMessage } from "./onemessage";
const Messages = () => {
  return (
    <main className="flex flex-col h-[100%] ">
      <section className="border  w-full flex justify-between items-center px-5">
        <div className="flex items-center gap-3  py-2 ">
          <img
            className="max-w-[3rem] rounded-[50%]   "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
            alt=""
          />
          <p>User Name</p>
        </div>
        <div className="flex gap-10 items-center text-[1.5rem]">
          <FcVideoCall />
          <FcCallback />
          <PiDotsThreeOutlineVerticalLight />
        </div>
      </section>
      <section className="  h-[95%] px-10 ">
        <MyMessage />
        <SenderMessage />
      </section>
      <section className="border  w-full flex gap-8 items-center px-5 h-[4rem] self-end bottom-0">
        <BsEmojiSmile className="text-[1.5rem] text-pink-600" />
        <input
          type="text"
          className="w-[100%] focus:outline-none focus:border-transparent tracking-wide  "
          placeholder="Your message here..."
        />
        <IoMdAttach className="text-[1.5rem]" />
        <IoSend className="text-[1.5rem] text-green-600 "  />
      </section>
    </main>
  );
};

export default Messages;
