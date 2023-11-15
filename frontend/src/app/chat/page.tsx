import React from 'react'
import Messages from './messages'

const Page = () => {
  return (
    <main className='flex'  >
      <section className='md:w-[400px] border ' >
        <div>
          <div className='flex w-full justify-between' >
            <p>User Profile</p>
            <p>icon</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCUe9wnnxcH6NBN-4j1oDzYPgBcEKdJgj6A&usqp=CAU" alt="" />
            <p>User Name</p>
          </div>
        </div>
        <div>
          <div>
            <input type="text" placeholder='search' className='border' />
            <button className='border' >search</button>
          </div>
          <div>
            {/* {map} */}
          </div>
        </div>
     </section>
      <section>
        <div></div>
        <Messages/>
     </section>
    </main>
  )
}

export default Page