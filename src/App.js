import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import { Routes, Route, Link, useNavigate  } from "react-router-dom";
import Menu from './components/Menu';
import Header from './components/Header';
import { useEffect, useMemo, useState } from 'react';
import Profile from './components/Profile';
import Reports from './components/Reports';
import Settings from './components/Settings';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userSearch, setuserSearch] = useState("");

  const USERTABLEHEADERS = [
    {name : 'SI No', colKey : 'id'},
    {name : 'Name', colKey : 'firstName', field : 'text'},
    {name : 'Age', colKey : 'age', field : 'text'},
    {name : 'DOB', colKey : 'dob', field : 'text'},
    {name : 'Status', colKey : 'status', className : 'w-40', field : 'dropdown' },
    {name : 'Action', colKey : 'action', isActionCol : true, field : 'action', showAddIcon : false },
  ];

  const USERS = [
    { id: "1", firstName: "Sophia", lastName: "Clark", age: 18, dob: "2025-09-20", status: 'Active' },
    { id: "2", firstName: "Ethan", lastName: "Miller", age: 20, dob: "2025-09-20", status: 'Active' },
    { id: "3", firstName: "Olivia", lastName: "Davis", age: 21, dob: "2025-09-20", status: 'Active' },
    { id: "4", firstName: "Liam", lastName: "Wilson", age: 25, dob: "2023-09-20", status: 'Inactive' },
    { id: "5", firstName: "Ava", lastName: "Martinez", age: 30, dob: "2023-09-20", status: 'Active' },
    { id: "6", firstName: "Noah", lastName: "Anderson", age: 40, dob: "2023-09-20", status: 'Active' },
    { id: "7", firstName: "Isabella", lastName: "Thomas", age: 32, dob: "2023-09-20", status: 'Active' },
    { id: "8", firstName: "Jackson", lastName: "Jackson", age: 25, dob: "2023-09-20", status: 'Inactive' },
    { id: "9", firstName: "Mia", lastName: "Garcia", age: 23, dob: "2023-09-20", status: 'Active' },
    { id: "10", firstName: "Aiden", lastName: "Lopez", age: 21, dob: "2023-09-20", status: 'Active' },
  ];
  
  const filteredUsers = useMemo(() => {
    const searchedText = userSearch.trim().toLowerCase();
    if (!searchedText) return USERS;  //return all if search value is empty
    return USERS.filter((user) => user.firstName.toLowerCase().includes(searchedText) || user.lastName.toLowerCase().includes(searchedText) || user.age.toString().includes(searchedText) || user.dob.includes(searchedText));
  }, [userSearch]);

  const userHeaderValues = useMemo(() => {
    const totalUsers = USERS.length;
    const activeUsers = USERS.filter((user) => user.status.toLowerCase() === 'active' );
    return {totalUsers, activeUsers};
  }, []);


 return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden">
      {/* Always visible */}
      <Header setMobileNavOpen={setMobileNavOpen} />

      <div className="grid md:grid-cols-[240px_1fr] gap-0 flex-1">
        {/* Sidebar */}
        <Menu mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />

        {/* Routed pages */}
        <main className="flex flex-col min-w-0">
          <Routes>
            <Route path="/AdminDashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="Users" >
              <Route index element = {<Users userTableHeaders={USERTABLEHEADERS} users={filteredUsers} userHeaderValues ={userHeaderValues} userSearch={userSearch} setuserSearch={setuserSearch} />} />
            </Route>
            <Route path="/Reports" element={<Reports />} />
             <Route path="/Settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
