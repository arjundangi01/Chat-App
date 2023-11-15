import React from "react";
interface userObj{
  __id: string,
  userName: string,
  profileImage:string
}
const UserCard = ({ _id, userName, profileImage }:userObj) => {
  return (
    <div className="flex items-center gap-3 px-5 py-2 border-y-[1px] hover:bg-indigo-200 bg-indigo-300 ">
      <img
        className="max-w-[3rem] rounded-[50%]  border-2 "
        src={profileImage}
        alt={ userName}
      />
      <p>{userName}</p>
    </div>
  );
};

export default UserCard;
