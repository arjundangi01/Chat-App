import React from "react";

export const MyMessage = () => {
  return (
    <div className="flex   py-2 justify-end   ">
      <div className="flex items-center gap-3  max-w-[25rem] rounded-xl px-5 py-1">
        <p className=" bg-blue-300 rounded-xl px-5 py-1">
          hii hello how ashflk asfkl askln aslf i hello how ashflk asfkl askln
          aslf{" "}
        </p>
        <img
          className="max-w-[2rem] rounded-[50%] self-start  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};
export const SenderMessage = () => {
  return (
    <div className="flex items-center gap-3  py-2 justify-start  ">
      <div className="flex items-center gap-3  max-w-[25rem] rounded-xl px-5 py-1">
        <img
          className="max-w-[2rem] rounded-[50%] self-start  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
          alt=""
        />
        <p className=" bg-purple-300 rounded-xl px-5 py-1">
          hii hello how ashflk asfkl askln aslf i hello how ashflk asfkl askln
          aslf{" "}
        </p>
      </div>
    </div>
  );
};
