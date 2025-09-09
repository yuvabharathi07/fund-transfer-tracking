import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Olivia Carter",
    dob: "1988-07-12",
    gender: "Female",
    nationality: "American",
    email: "olivia.carter@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Financial Street, New York, NY 10001",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can add API call here to save changes
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/Images/profile_image.jpg"
            className="w-28 h-12 rounded-full border-4 border-white shadow-lg" alt="profile image"
          />
          <h1 className="text-2xl font-bold mt-4">{profile.fullName}</h1>
          <p className="text-gray-200">Senior Operations Manager</p>
          <p className="text-sm text-gray-300">Joined: 2021</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Personal Information */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <EditableField
              label="Full Name"
              name="fullName"
              value={profile.fullName}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableField
              label="Date of Birth"
              name="dob"
              type="date"
              value={profile.dob}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableField
              label="Gender"
              name="gender"
              type="select"
              options={["Female", "Male", "Other"]}
              value={profile.gender}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableField
              label="Nationality"
              name="nationality"
              value={profile.nationality}
              isEditing={isEditing}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Contact Details */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <EditableField
              label="Email"
              name="email"
              value={profile.email}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableField
              label="Phone"
              name="phone"
              value={profile.phone}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableField
              label="Address"
              name="address"
              value={profile.address}
              isEditing={isEditing}
              onChange={handleChange}
            />
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end pe-2 pb-2">
              <button
                onClick={handleSave}
                className="btn btn-primary btn-sm"
              >
                Save Changes
              </button>
            </div>
          )}
        </section>

        {/* Stats */}
        <section className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            Activity Stats
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <StatCard title="Total Transactions" value="250" />
            <StatCard title="Active Users" value="500" />
            <StatCard title="Reports Generated" value="25" />
          </div>
        </section>

        {/* Actions */}
        <section className="flex flex-wrap gap-4 justify-center">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 bg-gray-600 rounded-xl hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          )}
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

// Editable field component
const EditableField = ({ label, name, value, type = "text", options, isEditing, onChange }) => (
  <div>
    <p className="text-sm text-gray-400 mb-1">{label}</p>
    {isEditing ? (
      type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
        />
      )
    ) : (
      <p className="text-base font-medium text-gray-200">{value}</p>
    )}
  </div>
);

// Reusable stat card
const StatCard = ({ title, value }) => (
  <div className="bg-gray-800 rounded-xl p-4 text-center shadow-md hover:scale-105 transform transition">
    <p className="text-2xl font-bold text-indigo-400">{value}</p>
    <p className="text-gray-300 text-sm mt-1">{title}</p>
  </div>
);

export default Profile;
