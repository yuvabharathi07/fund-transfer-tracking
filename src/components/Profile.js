import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-bold mt-4">Olivia Carter</h1>
          <p className="text-gray-200">Senior Operations Manager</p>
          <p className="text-sm text-gray-300">Joined: 2021</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Personal Information */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem label="Full Name" value="Olivia Carter" />
            <InfoItem label="Date of Birth" value="July 12, 1988" />
            <InfoItem label="Gender" value="Female" />
            <InfoItem label="Nationality" value="American" />
          </div>
        </section>

        {/* Contact Details */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem label="Email" value="olivia.carter@email.com" />
            <InfoItem label="Phone" value="+1 (555) 123-4567" />
            <InfoItem
              label="Address"
              value="123 Financial Street, New York, NY 10001"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Activity Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard title="Total Transactions" value="250" />
            <StatCard title="Active Users" value="500" />
            <StatCard title="Reports Generated" value="25" />
          </div>
        </section>

        {/* Actions */}
        <section className="flex flex-wrap gap-4 justify-center">
          <button className="px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition">
            Settings
          </button>
          <button className="px-5 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition">
            Logout
          </button>
        </section>
      </div>
    </div>
  );
};

// Small reusable info block
const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-base font-medium text-gray-200">{value}</p>
  </div>
);

// Reusable stat card
const StatCard = ({ title, value }) => (
  <div className="bg-gray-800 rounded-xl p-4 text-center shadow-md">
    <p className="text-2xl font-bold text-indigo-400">{value}</p>
    <p className="text-gray-300 text-sm mt-1">{title}</p>
  </div>
);

export default Profile;
