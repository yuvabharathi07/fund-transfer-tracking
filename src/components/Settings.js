import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

<ChevronRightIcon className="w-5 h-5 text-gray-400" />

const Settings = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-6 py-5">
          <div className="flex flex-col w-full max-w-[960px]">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141b] text-2xl sm:text-3xl font-bold leading-tight">
                Settings
              </p>
            </div>

            {/* ===== Profile & Account ===== */}
            <h3 className="px-4 pt-4 pb-2 text-lg font-bold text-[#0d141b]">
              Profile & Account
            </h3>
            <div className="flex items-center gap-4 px-4 py-2 min-h-[72px]">
              <div
                className="h-14 w-14 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/a-/AAuE7mD6pP_example")',
                }}
              />
              <div className="flex flex-col">
                <p className="text-base font-medium text-[#0d141b]">
                  Emma Johnson
                </p>
                <p className="text-sm text-[#4c739a]">
                  emma.johnson@email.com
                </p>
              </div>
            </div>

            {/* {[
              "Edit Profile",
              "Change Password",
              "Logout",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 min-h-14 hover:bg-slate-100 rounded-lg cursor-pointer transition"
              >
                <p className="flex-1 truncate text-base text-[#0d141b]">
                  {item}
                </p>
               <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            ))} */}

            {/* ===== Preferences ===== */}
            <h3 className="px-4 pt-6 pb-2 text-lg font-bold text-[#0d141b]">
              Preferences
            </h3>
            {/* Theme toggle */}
            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="flex-1 truncate text-base text-[#0d141b]">
                Theme Mode
              </p>
              <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#e7edf3] p-0.5">
                <div
                  className="h-full w-[27px] rounded-full bg-white transition"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                  }}
                />
                <input type="checkbox" className="absolute invisible" />
              </label>
            </div>
            {/* Language */}
            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="flex-1 truncate text-base text-[#0d141b]">
                Language
              </p>
              <p className="text-base text-[#0d141b]">English</p>
            </div>
            {/* Notifications */}
            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="flex-1 truncate text-base text-[#0d141b]">
                Notifications
              </p>
              <input type="checkbox" className="w-5 h-5 accent-sky-600" />
            </div>

            {/* ===== Security ===== */}
            <h3 className="px-4 pt-6 pb-2 text-lg font-bold text-[#0d141b]">
              Security
            </h3>
            {/* {["Two-Factor Authentication", "Login Devices", "Active Sessions"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 min-h-14 hover:bg-slate-100 rounded-lg cursor-pointer transition"
                >
                  <p className="flex-1 truncate text-base text-[#0d141b]">
                    {item}
                  </p>
                    <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
              )
            )} */}

            {/* ===== App Settings ===== */}
            <h3 className="px-4 pt-6 pb-2 text-lg font-bold text-[#0d141b]">
              App Settings
            </h3>
            {/* {["Privacy", "Data Usage", "Storage"].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 min-h-14 hover:bg-slate-100 rounded-lg cursor-pointer transition"
              >
                <p className="flex-1 truncate text-base text-[#0d141b]">
                  {item}
                </p>
                <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            ))} */}

            {/* ===== Support & About ===== */}
            <h3 className="px-4 pt-6 pb-2 text-lg font-bold text-[#0d141b]">
              Support & About
            </h3>
            {/* {["Help Center", "Contact Support", "App Version 1.0.0"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 min-h-14 hover:bg-slate-100 rounded-lg cursor-pointer transition"
                >
                  <p className="flex-1 truncate text-base text-[#0d141b]">
                    {item}
                  </p>
                  {i !== 2 && (
                    <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  )}
                </div>
              )
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
