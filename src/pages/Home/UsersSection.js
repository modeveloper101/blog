import React from 'react'
import UsersList from '../../features/users/UsersList'

const UsersSection = () => {
  return (
   <section className='flex flex-col overflow-hidden w-full px-5 py-[3rem]'>
    <h2 className="font-[500] text-xl mb-1">Explore by author</h2>
    <UsersList />
   </section>
  )
}

export default UsersSection