import React from 'react'
import UsersList from '../../features/users/UsersList'

const UsersSection = () => {
  return (
   <section className='flex flex-col overflow-hidden w-full  bg-[#E6E4E0] text-[#010101] pt-[3rem]'>
    <h2 className="font-[400] text-6xl p-5">Top <br/>authors</h2>
    <UsersList />
   </section>
  )
}

export default UsersSection