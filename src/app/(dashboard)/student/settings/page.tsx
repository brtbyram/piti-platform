"use client";

import clsx from "clsx";
import {
  CloudDownload,
  Edit,
  ExternalLink,
  SettingsIcon,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { Icon } from "../../../../../public/Icons";

function Settings() {

  const [activeSetting, setActiveSetting] = useState("Account");

  return (
    <main className="bg-neutral-50 p-8 min-h-screen">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-lg">
          Manage your account settings and preferences here.
        </p>
        <nav className="flex">
          {[
            "Account",
            "Notifications",
            "Sharing",
            "Billing",
            "Privacy",
            "Integrations",
          ].map((setting) => (
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
          ))}
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

          <div className="bg-green-400 border-4 border-black text-white flex items-center justify-center w-full h-46 rounded-2xl">
            <p className="text-center text-3xl font-semibold px-4">
              Are our notifications bothering you? Please let us know what we
              can improve.
            </p>
          </div>
        </section>
      )}

      {activeSetting === "Sharing" && (
        <section className="pt-8">
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Community Sharing</h2>
              <p className="text-sm text-gray-600">
                Control how your workout data and activities are shared with the
                community.
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Automatically Share Training Summaries
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    When enabled, your workout summaries will be automatically
                    shared with the community.
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
                  <h2 className="text-neutral-600 mb-1">
                    Who can see my shares?
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Control the visibility of your shared content within the
                    community.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Manage
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Who can comment?</h2>
                  <p className="text-neutral-400 text-sm">
                    Choose who can leave comments on your shared posts.
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
                    Visibility in leaderboards
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Choose whether your profile appears in community
                    leaderboards.
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
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Social Media Sharing</h2>
              <p className="text-sm text-gray-600">
                Connect your social accounts and manage your sharing templates.
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Connect Your Social Media Accounts
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Link your social media accounts for easy sharing.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Manage
                </button>
              </div>
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Sharing Templates</h2>
                  <p className="text-neutral-400 text-sm">
                    Customize the templates used when sharing to social media.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Edit
                </button>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Default Tags (Hashtags)
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Suggest automatically adding tags such as #yourTrainer,
                    #YTFit, #coaching to post templates. Users can edit these as
                    they wish.
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-2 w-48"
                    placeholder="#yourTrainer, #YTFit, #coaching"
                  />
                  <span className="text-xs text-neutral-500 mt-1">
                    (separate with commas)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 border-b py-10 border-neutral-200">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">Coach Sharing</h2>
              <p className="text-sm text-gray-600">
                These settings determine which data students share with their
                coaches.
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Share Progress Data</h2>
                  <p className="text-neutral-400 text-sm">
                    Ensure that all data, such as weight, measurements, and
                    workout performance, is automatically shared with your
                    coach.
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
                  <h2 className="text-neutral-600 mb-1">
                    Share Nutrition Log Data
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    If you use the nutrition tracking feature, control whether
                    this data is visible to your coach.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Manage
                </button>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">Private Notes</h2>
                  <p className="text-neutral-400 text-sm">
                    Offer the option to keep certain notes or data private.
                    (E.g., add a “Do not share with coach” tag).
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
          <div className="grid grid-cols-10 gap-8 pt-10">
            <div className="col-span-3">
              <h2 className="text-xl font-semibold">
                Advanced Sharing Settings
              </h2>
              <p className="text-sm text-gray-600">
                Additional options for more detailed control.
              </p>
            </div>
            <div className="col-span-7 flex flex-col w-full space-y-6">
              <div className="w-full py-4 border-b border-neutral-200 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Share a Specific Workout
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    At the end of each workout, the user should be given the
                    option to manually share that specific workout with the
                    community or on social media.
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
                  <h2 className="text-neutral-600 mb-1">Anonymous Sharing</h2>
                  <p className="text-neutral-400 text-sm">
                    An anonymous sharing option where your name is not visible,
                    but your statistics are shared. This allows even
                    privacy-conscious users to contribute to community data.
                  </p>
                </div>
                <button className="h-10 text-sm text-neutral-500 rounded-full border border-neutral-200 min-w-max px-4 mt-2">
                  Manage
                </button>
              </div>
              <div className="w-full py-4 flex justify-between text-neutral-400">
                <div>
                  <h2 className="text-neutral-600 mb-1">
                    Reference and Success Story Permission
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    An approval mechanism allowing coaches to share your
                    reference or success story on their profiles with your
                    permission.
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
        </section>
      )}

      {activeSetting === "Billing" && (
        <section className="pt-8">
          <h2 className="text-3xl font-semibold">Plans & Billing</h2>
          <p className="text-xl">
            Manage your subscription and billing information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 my-8">
            <div className="min-w-54 w-full min-h-72 bg-green-300 hover:bg-green-200 rounded-tr-4xl border border-neutral-200 border-b-2 border-l-2 relative flex flex-col items-start justify-between space-y-4 p-4">
              <label className="absolute right-4 top-4 rounded-full border-2 bg-white flex items-center text-gray-700 w-6 h-6">
                <input
                  type="radio"
                  name="plan"
                  className="w-5 h-5 hidden"
                  checked
                />
              </label>
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-5xl font-bold">
                $10<span className="text-lg font-semibold">per month</span>
              </p>
              <p>
                Essential features to get you started with fitness tracking.
              </p>
              <button className="bg-black text-white w-full mx-auto py-3 rounded-lg">
                Current Plan
              </button>
            </div>
            <div className="min-w-54 w-full min-h-80 bg-white hover:bg-neutral-100 rounded-tr-4xl border border-neutral-200 border-b-2 border-l-2 relative flex flex-col items-start justify-between space-y-4 p-4">
              <label className="absolute right-4 top-4 rounded-full border-2 bg-white flex items-center text-gray-700 w-6 h-6">
                <input
                  type="radio"
                  name="plan"
                  className="w-5 h-5 hidden"
                  checked
                />
              </label>
              <h3 className="text-xl font-bold">Growth</h3>
              <p className="text-5xl font-bold">
                $20<span className="text-lg font-semibold">per month</span>
              </p>
              <p>Advanced features for growing your fitness journey.</p>
              <button className="bg-black text-white w-full mx-auto py-3 rounded-lg">
                Upgrade Plan
              </button>
            </div>
            <div className="min-w-54 w-full min-h-72 bg-white hover:bg-neutral-100 rounded-tr-4xl border border-neutral-200 border-b-2 border-l-2 relative flex flex-col items-start justify-between space-y-4 p-4">
              <label className="absolute right-4 top-4 rounded-full border-2 bg-white flex items-center text-gray-700 w-6 h-6">
                <input
                  type="radio"
                  name="plan"
                  className="w-5 h-5 hidden"
                  checked
                />
              </label>
              <h3 className="text-xl font-bold">Scale</h3>
              <p className="text-5xl font-bold">
                $30<span className="text-lg font-semibold">per month</span>
              </p>
              <p>All features unlocked for scaling your fitness goals.</p>
              <button className="bg-black text-white w-full mx-auto py-3 rounded-lg">
                Upgrade Plan
              </button>
            </div>
            <div className="min-w-54 w-full min-h-72 bg-white hover:bg-neutral-100 rounded-tr-4xl border border-neutral-200 border-b-2 border-l-2 relative flex flex-col items-start justify-between space-y-4 p-4">
              <label className="absolute right-4 top-4 rounded-full border-2 bg-white flex items-center text-gray-700 w-6 h-6">
                <input
                  type="radio"
                  name="plan"
                  className="w-5 h-5 hidden"
                  checked
                />
              </label>
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-5xl font-bold">
                $40<span className="text-lg font-semibold">per month</span>
              </p>
              <p>Comprehensive solutions for enterprise-level fitness needs.</p>
              <button className="bg-black text-white w-full mx-auto py-3 rounded-lg">
                Upgrade Plan
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-4">Billing History</h3>
            <button className="mb-4 p-2 px-4 text-white bg-black rounded-md gap-x-2 flex items-center">
              <CloudDownload />
              Download all
            </button>
          </div>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item}>
              <div className="flex items-center justify-between gap-x-10 border-t-2 border-neutral-200 p-4 text-gray-600 text-sm">
                <input type="checkbox" className="" />
                <div className="flex-1 flex items-center gap-x-2 w-48 font-semibold text-black">
                  <Icon name="pdf" size={30} />
                  <div>Invoice #{item}</div>
                </div>
                <div>Jan 1, 2024</div>
                <div>Basic Plan</div>
                <div>USD $10.00</div>
                <div className="hidden sm:flex items-center gap-x-2">
                  <Icon name="creditCard" size={30} />
                  <div>4242 **** **** 4242</div>
                </div>
                <button className="pl-4 hover:text-green-400">
                  <CloudDownload />
                </button>
              </div>
            </div>
          ))}
        </section>
      )}

      {activeSetting === "Privacy" && (
        <section className="pt-8">
          <h2 className="text-3xl font-semibold">Privacy & Data</h2>
          <p className="text-xl">
            Manage your privacy settings and data preferences.
          </p>
        </section>
      )}

      {activeSetting === "Integrations" && (
        <section className="pt-8">
          <h2 className="text-3xl font-semibold">Connected Apps</h2>
          <p className="text-xl">
            Manage your connected applications and integrations.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 my-8">
            {[
              {
                name: "Google Fit",
                icon: "googleFit",
                description:"Connect with Google Fit to sync your fitness data.",
              },
              {
                name: "Zoom",
                icon: "zoom",
                description: "Integrate with Zoom for virtual training sessions.",
              },
              {
                name: "Google Calendar",
                icon: "googleCalendar",
                description:
                  "Sync your workout schedule with Google Calendar.",
              },
              {
                name: "Microsoft Teams",
                icon: "microsoftTeams",
                description: "Integrate with Microsoft Teams for group workouts.",
              },
              {
                name: "Mapbox",
                icon: "mapbox",
                description: "Integrate with Mapbox for advanced mapping solutions.",
              },
              {
                name: "Google Meet",
                icon: "googleMeet",
                description: "Connect with Google Meet for virtual training.",
              },

              {
                name: "Apple Health",
                icon: "appleHealth",
                description:
                  "Integrate with Apple Health for seamless data sharing.",
              },
              {
                name: "Strava",
                icon: "strava",
                description: "Sync your activities with Strava.",
              },
              {
                name: "Fitbit",
                icon: "fitbit",
                description: "Connect with Fitbit to track your workouts.",
              },
              {
                name: "MyFitnessPal",
                icon: "googleFit",
                description:
                  "Log your meals and track calories with MyFitnessPal.",
              },
              {
                name: "Garmin Connect",
                icon: "garmin",
                description:
                  "Sync your Garmin devices for comprehensive tracking.",
              },
              {
                name: "Samsung Health",
                icon: "appleHealth",
                description:
                  "Integrate with Samsung Health for detailed insights.",
              },
              {
                name: "Withings",
                icon: "strava",
                description:
                  "Connect with Withings to monitor your health metrics.",
              },
              {
                name: "Polar Flow",
                icon: "fitbit",
                description:
                  "Sync your Polar devices for accurate fitness data.",
              },
            ].map((app) => (
              <div
                key={app.name}
                className="min-w-54 w-full min-h-70 bg-white hover:bg-neutral-100 rounded-tr-4xl border border-b-2 border-l-2 relative flex flex-col items-start justify-between pt-4"
              >
                <div className="flex items-start justify-between w-full text-neutral-200 space-x-2 px-4">
                  <div className="rounded-xl overflow-hidden bg-white border-2 border-neutral-200 p-1">
                    <div className="rounded-lg overflow-hidden">
                      <Icon name={app.icon} size={48} />
                    </div>
                  </div>
                  <ExternalLink />
                </div>
                <h3 className="text-xl font-bold px-4">{app.name}</h3>
                <p className="p-4 py-0">{app.description}</p>
                <div className="flex items-center justify-between w-full p-4 border-t border-neutral-200">
                  <button className="py-2 flex items-center justify-center gap-x-1 border border-neutral-200 rounded-xl px-4 text-sm hover:bg-black hover:text-white">
                    <SettingsIcon />
                    Settings
                  </button>
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
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Settings;
