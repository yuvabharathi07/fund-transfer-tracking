import React from 'react'
import StatCard from "./StatCard";
import Search from "./Search";
import DynamicTable from "./DynamicTable";

const Users = ({ userTableHeaders, users, userHeaderValues, userSearch, setuserSearch}) => {

  const handleUserEdit = (id) => {

  }

  const handleUserDelete = (id) => {

  }

  const addNewUser = (e) => {

  }

  // console.log('users: ', users);
  
  return (
    <>
        {/*---------------------- Main content -----------------------*/}
        <main className="flex flex-col min-w-0">
          {/* Top: Dashboard title & stats */}
          <div className="px-4 sm:px-6 lg:px-10 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[#0d141c] text-2xl sm:text-3xl font-bold tracking-tight"> Users </p>
            </div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <StatCard title="Total Users " value={userHeaderValues.totalUsers} />
              <StatCard title="Active Users" value={userHeaderValues.activeUsers.length} />
              {/* <StatCard title="Total Users" value={totals.users.toLocaleString()} /> */}
            </div>
          </div>

          {/* Search */}
          {/* <Search search={userSearch} setSearch={setuserSearch} /> */}

          {/*----------------------- Transactions ----------------------*/}
          <section className="px-4 sm:px-6 lg:px-10 pb-6">
           <div className="flex flex-wrap justify-between gap-3 p-2">
              <h2 className="text-[#0d141c] tracking-light font-bold leading-tight ">Users</h2>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal"
              >
                <span id='add-new-user' className="truncate">Add User</span>
              </button>
            </div>

            {/* -------------------- Transaction Table ---------------------*/}
           <DynamicTable tableId='users' tableHeaders={userTableHeaders} tableBodies={users} handleEdit={handleUserEdit} handleDelete={handleUserDelete} addNewUser={addNewUser} />

            

            {/* Pagination mock (centered) */}
            {/* <div className="flex items-center justify-center gap-1 mt-4">
              <button className="size-10 inline-flex items-center justify-center rounded-full hover:bg-slate-100">
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="text-[#0d141c]">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </button>
              <button className="size-10 rounded-full bg-[#e7edf4] text-[#0d141c] text-sm font-bold">1</button>
              <button className="size-10 rounded-full text-[#0d141c] text-sm">2</button>
              <button className="size-10 rounded-full text-[#0d141c] text-sm">3</button>
              <button className="size-10 inline-flex items-center justify-center rounded-full hover:bg-slate-100">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" className="text-[#0d141c]">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </button>
            </div> */}
          </section>
        </main>
    </>
  )
}

export default Users