"use client";

import clsx from "clsx";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";

function Settings() {
  const [activeSetting, setActiveSetting] = useState("Account");

  return (
    <main className="bg-white p-8 min-h-screen">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-lg">
          Manage your account settings and preferences here.
        </p>
        <nav className="flex">
          {["Account", "Notifications", "Sharing", "Billing", "Privacy", "Integrations"].map(
            (setting) => (
              <button
                onClick={() => setActiveSetting(setting)}
                key={setting}
                className={clsx(
                  "flex flex-col items-center mx-1 rounded-full px-4 py-2 hover:bg-neutral-200",
                  setting === activeSetting && "bg-black text-white ",
                  setting !== activeSetting && "bg-neutral-100"
                )}
              >
                <h2>{setting}</h2>
              </button>
            )
          )}
        </nav>
      </section>

      {activeSetting === "Account" && (
        <section className="pt-8 ">
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Profile</h2>
              <p className="text-sm text-gray-600">Set your account details</p>
            </div>
            <div className="col-span-5 w-full">
              <div className="flex space-x-3 w-full mb-4">
                <label className="flex flex-col basis-1/2 mb-2 text-sm text-neutral-500">
                  <div>Name</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-2"
                    placeholder="Your Name"
                  />
                </label>
                <label className="flex flex-col basis-1/2 mb-2 text-sm text-neutral-500">
                  <div>Surname</div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-2"
                    placeholder="Your Surname"
                  />
                </label>
              </div>
              <label className="block w-full text-sm text-neutral-500">
                Email
                <input
                  type="email"
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Your Email"
                />
              </label>
              <label className="block w-full text-sm text-neutral-500 mt-4">
                Bio
                <textarea
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="A short bio about yourself"
                  rows={4}
                />
              </label>
            </div>
            <div className="col-span-2">
              <div className="w-full aspect-square rounded-full bg-gray-200 mb-2" />
              <div className="flex items-center justify-center gap-2">
                <button className="h-10 text-sm px-3 py-1.5 border border-neutral-200 text-neutral-500 rounded-full">
                  Edit Photo
                </button>
                <Trash className="rounded-full border border-neutral-200 text-neutral-400 cursor-pointer p-2.5 w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Timezone</h2>
              <p className="text-sm text-gray-600">
                Let us know your timezone to personalize your experience
              </p>
            </div>
            <div className="col-span-7 flex space-x-3 w-full">
              <label className="block mb-2 w-full text-sm text-neutral-500">
                City
                <input
                  type="text"
                  className="border border-gray-300 text-neutral-500 rounded p-2 w-full"
                  placeholder="Your City"
                />
              </label>
              <label className="block mb-2 w-full text-sm text-neutral-500">
                Timezone
                <select className="border border-gray-300 rounded p-2 w-full">
                  <option value="GMT-12:00">GMT-12:00</option>
                  <option value="GMT-11:00">GMT-11:00</option>
                  <option value="GMT-10:00">GMT-10:00</option>
                  <option value="GMT-09:00">GMT-09:00</option>
                  <option value="GMT-08:00">GMT-08:00</option>
                  <option value="GMT-07:00">GMT-07:00</option>
                  <option value="GMT-06:00">GMT-06:00</option>
                  <option value="GMT-05:00">GMT-05:00</option>
                  <option value="GMT-04:00">GMT-04:00</option>
                  <option value="GMT-03:00">GMT-03:00</option>
                  <option value="GMT-02:00">GMT-02:00</option>
                  <option value="GMT-01:00">GMT-01:00</option>
                  <option value="GMT+00:00" selected>
                    GMT+00:00
                  </option>
                  <option value="GMT+01:00">GMT+01:00</option>
                  <option value="GMT+02:00">GMT+02:00</option>
                  <option value="GMT+03:00">GMT+03:00</option>
                  <option value="GMT+04:00">GMT+04:00</option>
                  <option value="GMT+05:00">GMT+05:00</option>
                  <option value="GMT+06:00">GMT+06:00</option>
                  <option value="GMT+07:00">GMT+07:00</option>
                  <option value="GMT+08:00">GMT+08:00</option>
                  <option value="GMT+09:00">GMT+09:00</option>
                  <option value="GMT+10:00">GMT+10:00</option>
                  <option value="GMT+11:00">GMT+11:00</option>
                  <option value="GMT+12:00">GMT+12:00</option>
                </select>
              </label>
              <label className="block mb-2 w-full text-sm text-neutral-500">
                Date & Time format
                <select className="border border-gray-300 rounded p-2 w-full">
                  <option value="MM/DD/YYYY, HH:mm">MM/DD/YYYY, HH:mm</option>
                  <option value="DD/MM/YYYY, HH:mm">DD/MM/YYYY, HH:mm</option>
                  <option value="YYYY/MM/DD, HH:mm">YYYY/MM/DD, HH:mm</option>
                </select>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 pt-10">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Password & Security</h2>
              <p className="text-sm text-gray-600">
                Update your password and secure your account
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full">
              <div className="w-full py-4 border-b border-neutral-200  flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Email address</h2>
                  <p className="text-sm text-neutral-400">
                    The email address associated with your account.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 mb-1">
                    brtbyram.61@gmail.com
                  </span>
                  <button className="text-sm text-red-500 text-end">
                    Unverified
                  </button>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4">
                  Edit
                  <Edit className="inline ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Password</h2>
                  <p className="text-neutral-400 text-sm">
                    Set a unique password to protect your account.
                  </p>
                </div>
                <button className="text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Change Password
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">2-step verification</h2>
                  <p className="text-neutral-400 text-sm">
                    Make your account extra secure. Along with your password,
                    you'll need to enter a code
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <span className="sr-only">Enable 2-step verification</span>
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Restricted Members</h2>
                  <p className="text-neutral-400 text-sm">
                    This will shut down your account. Your account will be
                    reactive when you sign in again.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 px-4">
                  None
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Deactivate my account
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    This will shut down your account. Your account will be
                    reactive when you sign in again.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 px-4">
                  Deactivate
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Delete Account</h2>
                  <p className="text-neutral-400 text-sm">
                    This will permanently delete your account. You will not be
                    able to recover it.
                  </p>
                </div>
                <button className="h-10 text-sm text-red-500 px-4">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSetting === "Notifications" && (
        <section className="pt-8 ">
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Email Notifications</h2>
              <p className="text-sm text-gray-600">
                Manage your email notification preferences
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Schedule Reminders</h2>
                  <p className="text-neutral-400 text-sm">
                    Sends an email 15-30 minutes before activities (e.g.,
                    workout or appointment).
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Coach Updates</h2>
                  <p className="text-neutral-400 text-sm">
                    Notifies you when your coach makes changes to the program or
                    assigns a new plan.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Community Activity</h2>
                  <p className="text-neutral-400 text-sm">
                    Sends a summary email about comments and likes on posts.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">YourTrainer Updates</h2>
                  <p className="text-neutral-400 text-sm">
                    Informs you about new features or announcements.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Weekly Summary Report
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Get an email summary of your workouts, progress, and
                    calories burned throughout the week.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 py-10 border-b border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Push Notifications</h2>
              <p className="text-sm text-gray-600">
                Control push notifications on your devices
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Workout Reminders</h2>
                  <p className="text-neutral-400 text-sm">
                    Sends push notifications 15 minutes before scheduled
                    workouts.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Message Alerts</h2>
                  <p className="text-neutral-400 text-sm">
                    Notifies you of new messages from coaches or community
                    members.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Start Support</h2>
                  <p className="text-neutral-400 text-sm">
                    Receive gentle reminders if you haven't exercised yet or
                    haven't reached your water intake goal during the day.
                    (E.g., “Don't forget to drink 1 more liter of water today!”)
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 py-10">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">
                Smart Notification Management
              </h2>
              <p className="text-sm text-gray-600">
                This section allows you to control not only what type of
                notifications you receive, but also when you receive them.
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Notification Sounds and Vibration:
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Turn notification sounds and vibration on or off. (May be
                    integrated with iOS and Android settings.)
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value="true"
                    className="sr-only peer"
                  />
                  <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Do Not Disturb Mode:
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Auto Silence: Automatically silence all notifications during
                    a specific time range (e.g., between 10:00 PM and 8:00 AM).
                  </p>
                </div>
                <section className="flex flex-col items-end">
                  <label className="relative inline-flex items-center cursor-pointer mb-2">
                    <input
                      type="checkbox"
                      value="true"
                      className="sr-only peer"
                    />
                    <div className="w-16 h-10 bg-gray-200 rounded-full peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black"></div>
                  </label>
                  <div className="flex items-center space-x-2 text-sm text-neutral-500">
                    <input
                      type="time"
                      className="border border-gray-300 rounded p-2"
                      defaultValue="22:00"
                    />
                    <span>-</span>
                    <input
                      type="time"
                      className="border border-gray-300 rounded p-2"
                      defaultValue="08:00"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="bg-green-500 text-white flex items-center justify-center w-full h-46 rounded-2xl">
            <p className="text-center text-3xl font-semibold px-4">
              Are our notifications bothering you? Please let us know what we
              can improve.
            </p>
          </div>
        </section>
      )}

       {activeSetting === "Billing" && (
        <section className="pt-8">
          <h2>Plans & Billing</h2>
          <p>Manage your subscription and billing information.</p>

          <div className="grid grid-cols-4 gap-x-3">
            <div className="w-full h-72 bg-green-300 rounded-tr-4xl border border-black border-b-4 border-l-4 relative flex flex-col items-start justify-between space-y-4 p-4">
              <label className="absolute flex items-center text-gray-700 bg-black w-12 h-12">
                <input type="radio" name="plan" className="w-5 h-5 hidden" checked />

              </label>
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-5xl font-bold">$10 <span className="text-xl font-semibold">per month</span></p>
              <p>
                Essential features to get you started with fitness tracking.
              </p>
              <button className="bg-black text-white w-full mx-auto py-3">Current Plan</button>
            </div>
            
          </div>
        </section>
      )}
    </main>
  );
}

export default Settings;
