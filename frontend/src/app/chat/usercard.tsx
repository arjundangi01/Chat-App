import { typeConversation, typeUserObj } from "@/redux/user/type";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface conversationProps {
  conversation: typeConversation,
  loginUser:typeUserObj
}
interface userCardProps {
  user: typeUserObj,
  onClick?:Function
}

export const UserCard = ({ user }: userCardProps) => {
  const {_id,profileImage,userName} = user
  return (
    <div className="flex cursor-pointer rounded-2xl items-center gap-3 px-5 py-1 border-y-[1px] hover:bg-indigo-200 bg-indigo-300 ">
      <img
        className="max-w-[2.5rem] rounded-[50%]  border-2 "
        src={profileImage}
        alt={userName}
      />
      <p>{userName}</p>
    </div>
  );
};

export const Conversation = ({conversation,loginUser}:conversationProps) => {
  const [user, setUser] = useState<typeUserObj>({
    _id: "",
    userName: "",
    profileImage: "",
  });
  useEffect(() => {
    const getUser = async () => {
      const userId = conversation?.members.find(
        (ele) => ele !== loginUser._id
      );
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/single/${userId}`);
        console.log(res.data.user);
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
  },[])
  return <UserCard user={user} />;
};
