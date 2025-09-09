import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Initialize form with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "Olivia Carter",
      dob: "1988-07-12",
      gender: "Female",
      nationality: "American",
      email: "olivia.carter@email.com",
      phone: "+1 (555) 123-4567",
      address: "123 Financial Street, New York, NY 10001",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    // Example API call
    // fetch("/api/profile", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log("Saved:", result);
    //     setIsEditing(false);
    //   });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/Images/profile_image.jpg"
            className="w-28 h-12 rounded-full border-4 border-white shadow-lg"
            alt="profile"
          />
          <h1 className="text-2xl font-bold mt-4">Olivia Carter</h1>
          <p className="text-gray-200">Senior Operations Manager</p>
          <p className="text-sm text-gray-300">Joined: 2021</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* -------------------------- Personal Information ------------------------------- */}
          <section className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold mb-4 text-indigo-400">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EditableField
                label="Full Name"
                name="fullName"
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
              <EditableField
                label="Date of Birth"
                name="dob"
                type="date"
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
              <EditableField
                label="Gender"
                name="gender"
                type="select"
                options={["Female", "Male", "Other"]}
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
              <EditableField
                label="Nationality"
                name="nationality"
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
            </div>
          </section>

          {/* ----------------------------- Contact Details ------------------------------- */}
          <section className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold mb-4 text-indigo-400">
              Contact Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EditableField
                label="Email"
                name="email"
                register={register}
                errors={errors}
                isEditing={isEditing}
                rules={{ required: "Email is required" }}
              />
              <EditableField
                label="Phone"
                name="phone"
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
              <EditableField
                label="Address"
                name="address"
                register={register}
                errors={errors}
                isEditing={isEditing}
              />
            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end pe-2 pb-2">
                <button type="submit" className="btn btn-primary btn-sm">
                  Save Changes
                </button>
              </div>
            )}
          </section>
        </form>

        {/* --------------------------------------- Stats ---------------------------------------- */}
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

        {/* --------------------------------- Actions ------------------------------------- */}
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
              onClick={() => {
                setIsEditing(false);
                reset(); // Reset to last saved values
              }}
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

// Editable field with RHF
const EditableField = ({
  label,
  name,
  type = "text",
  options,
  register,
  errors,
  isEditing,
  rules = {},
}) => (
  <div>
    <p className="text-sm text-gray-400 mb-1">{label}</p>
    {isEditing ? (
      type === "select" ? (
        <select
          {...register(name, rules)}
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
          {...register(name, rules)}
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
        />
      )
    ) : (
      <p className="text-base font-medium text-gray-200">
        {errors[name] ? (
          <span className="text-red-400">{errors[name].message}</span>
        ) : (
          <>{/* This shows the default value on view mode */}</>
        )}
      </p>
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
