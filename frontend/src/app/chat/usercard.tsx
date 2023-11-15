import React from 'react'

const UserCard = () => {
  return (
    <div className="flex items-center gap-3 px-5 py-2 border-y-[1px] hover:bg-indigo-200 bg-indigo-300 " >
    <img
      className="max-w-[3rem] rounded-[50%]  border-2 "
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
      alt=""
    />
    <p>User Name</p>
  </div>
  )
}

export default UserCard