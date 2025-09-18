"use client";

import React, { useState } from "react";
import moment from "moment";
import clsx from "clsx";
import {
  ArrowBigDown,
  Calendar1,
  CalendarDays,
  CalendarFold,
  CalendarMinus2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  ClockPlus,
  EllipsisVertical,
  Eye,
  List,
  Maximize2,
  TimerReset,
} from "lucide-react";

function Calendar() {
  const [scale, setScale] = useState(4);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toDos = [
    {
      id: 1,
      title: "Morning Run",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      lessonType: "Online",
      type: "running",
      description: "30 minutes of running",
      startTime: "2025-07-21T07:40:00",
      endTime: "2025-07-21T08:10:00",
      trainingTime: "00:30:00",
      status: "upcoming",
      location: "Central Park",
      class: "outdoor",
      notes: "Bring water bottle",
      tags: ["fitness", "running"],
      attachments: [
        {
          id: 1,
          url: "https://example.com/image1.jpg",
          type: "image",
          description: "Morning run photo",
        },
      ],
      priority: "high",
      createdAt: moment().subtract(1, "days").toISOString(),
      updatedAt: moment().subtract(1, "days").toISOString(),
    },
    {
      id: 2,
      title: "Yoga Session",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "yoga",
      description: "2 hour of yoga",
      startTime: "2025-07-22T12:00:00",
      endTime: "2025-07-22T14:00:00",
      trainingTime: "02:00:00",
      status: "upcoming",
      priority: "medium",
      createdAt: moment().subtract(2, "days").toISOString(),
      updatedAt: moment().subtract(2, "days").toISOString(),
    },
    {
      id: 3,
      title: "Strength Training",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "strength",
      description: "45 minutes of strength training",
      startTime: "2025-09-09T15:00:00",
      endTime: "2025-09-09T15:45:00",
      trainingTime: "00:45:00",
      status: "upcoming",
      priority: "low",
      createdAt: moment().subtract(3, "days").toISOString(),
      updatedAt: moment().subtract(3, "days").toISOString(),
    },
    {
      id: 4,
      title: "Cardio Workout",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "cardio",
      description: "90 minutes of cardio workout",
      startTime: "2025-07-24T02:00:00",
      endTime: "2025-07-24T03:30:00",
      trainingTime: "01:30:00",
      status: "upcoming",
      priority: "high",
      createdAt: moment().subtract(4, "days").toISOString(),
      updatedAt: moment().subtract(4, "days").toISOString(),
    },
    {
      id: 5,
      title: "Pilates Class",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "pilates",
      description: "1 hour of Pilates class",
      startTime: "2025-07-26T06:20:00",
      endTime: "2025-07-26T07:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "medium",
      createdAt: moment().subtract(5, "days").toISOString(),
      updatedAt: moment().subtract(5, "days").toISOString(),
    },
    {
      id: 6,
      title: "Cycling Session",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "cycling",
      description: "1 hour of cycling",
      startTime: "2025-07-25T08:00:00",
      endTime: "2025-07-25T09:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "low",
      createdAt: moment().subtract(6, "days").toISOString(),
      updatedAt: moment().subtract(6, "days").toISOString(),
    },
    {
      id: 7,
      title: "Swimming Lesson",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "swimming",
      description: "1 hour of swimming lesson",
      startTime: "2025-07-23T10:00:00",
      endTime: "2025-07-23T11:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "high",
      createdAt: moment().subtract(7, "days").toISOString(),
      updatedAt: moment().subtract(7, "days").toISOString(),
    },
    {
      id: 8,
      title: "Dance Class",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "dance",
      description: "1 hour of dance class",
      startTime: "2025-07-26T05:00:00",
      endTime: "2025-07-26T06:10:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "medium",
      createdAt: moment().subtract(8, "days").toISOString(),
      updatedAt: moment().subtract(8, "days").toISOString(),
    },
    {
      id: 9,
      title: "Boxing Training",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "boxing",
      description: "1 hour of boxing training",
      startTime: "2025-07-22T09:00:00",
      endTime: "2025-07-22T10:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "high",
      createdAt: moment().subtract(9, "days").toISOString(),
      updatedAt: moment().subtract(9, "days").toISOString(),
    },
    {
      id: 10,
      title: "Meditation Session",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "meditation",
      description: "30 minutes of meditation",
      startTime: "2025-07-27T06:00:00",
      endTime: "2025-07-27T07:00:00",
      trainingTime: "00:30:00",
      status: "upcoming",
      priority: "low",
      createdAt: moment().subtract(10, "days").toISOString(),
      updatedAt: moment().subtract(10, "days").toISOString(),
    },
    {
      id: 11,
      title: "HIIT Workout",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "hiit",
      description: "30 minutes of HIIT workout",
      startTime: "2025-07-26T07:00:00",
      endTime: "2025-07-26T07:30:00",
      trainingTime: "00:30:00",
      status: "upcoming",
      priority: "high",
      createdAt: moment().subtract(11, "days").toISOString(),
      updatedAt: moment().subtract(11, "days").toISOString(),
    },
    {
      id: 12,
      title: "Zumba Class",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "zumba",
      description: "1 hour of Zumba class",
      startTime: "2025-07-24T08:20:00",
      endTime: "2025-07-24T09:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "medium",
      createdAt: moment().subtract(12, "days").toISOString(),
      updatedAt: moment().subtract(12, "days").toISOString(),
    },
    {
      id: 13,
      title: "Kickboxing Session",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "kickboxing",
      description: "1 hour of kickboxing session",
      startTime: "2025-07-26T10:00:00",
      endTime: "2025-07-26T11:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "high",
      createdAt: moment().subtract(13, "days").toISOString(),
      updatedAt: moment().subtract(13, "days").toISOString(),
    },
    {
      id: 14,
      title: "CrossFit Training",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "crossfit",
      description: "1 hour of CrossFit training",
      startTime: "2025-07-27T08:00:00",
      endTime: "2025-07-27T09:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "medium",
      createdAt: moment().subtract(14, "days").toISOString(),
      updatedAt: moment().subtract(14, "days").toISOString(),
    },
    {
      id: 15,
      title: "Barre Class",
      trainerId: "67890",
      trainer: "Jane Smith",
      studentId: "12345",
      student: "John Doe",
      type: "barre",
      description: "1 hour of Barre class",
      startTime: "2025-07-28T09:00:00",
      endTime: "2025-07-28T10:00:00",
      trainingTime: "01:00:00",
      status: "upcoming",
      priority: "low",
      createdAt: moment().subtract(15, "days").toISOString(),
      updatedAt: moment().subtract(15, "days").toISOString(),
    },
  ];

  const activeWeek = moment().startOf("week").add(1, "day"); // Start of the week, adjusted to next week
  const startOfWeek = activeWeek.clone().startOf("day");
  const weekOfYear = startOfWeek.week(); // Get the week number of the year

  const daysInWeek = Array.from({ length: 7 }, (_, i) => ({
    date: startOfWeek.clone().add(i, "days").format("YYYY-MM-DD"),
    dayOfMonth: startOfWeek.clone().add(i, "days").date(),
    dayName: startOfWeek.clone().add(i, "days").format("ddd"),
    day: i + 1, // bu kısım, haftanın gününü 1'den 7'ye kadar numaralandırır
    month: startOfWeek.clone().add(i, "days").format("MMMM"),
    year: startOfWeek.clone().add(i, "days").year(),
    weekOfYear: weekOfYear,
  }));

  const convertHourStringToMinutes = (hourString: string) => {
    const [hours, minutes] = hourString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const hours = Array.from(
    { length: 24 },
    (_, i) => moment().startOf("day").add(i, "hours").format("HH:mm") // burada moment.js kullanarak saatleri oluşturuyoruz
  );

  return (
    <main className="bg-gray-100 min-h-screen text-black py-10 overflow-hidden max-w-screen">
      <section className="flex justify-between px-[3%] mb-6">
        <div >
          <div className="flex items-center text-5xl">
            <h1 className="">August, 2025</h1>
            <button >
              <ChevronDown size={36} className="inline ml-3" />
            </button>
          </div>
          <div className="flex items-center text-gray-600">
            <CalendarDays size={20} className="inline mr-2" />
            <p>45 event&apos;s</p>
          </div>
        </div>

        <div className="flex items-center gap-x-1">
          <div className="flex items-center gap-x-2 h-12 border-1 border-gray-200 rounded-full p-1 bg-gray-50 shadow-md">
            <button className="rounded-full bg-gray-100 p-2">
              <ChevronLeft size={20} />
            </button>
            <Calendar1 size={20} />
            <button>
              This Week{" "}
              <span className="text-xs text-gray-500"> - W{weekOfYear}</span>
            </button>
            <button className="rounded-full bg-gray-100 p-2">
              <ChevronRight size={20} />
            </button>
          </div>

          <menu className="flex items-center gap-x-2 h-12 border border-gray-200 rounded-full p-1 px-3 bg-gray-50 shadow-md relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "week" ? "" : "week")
              }
              className="flex items-center gap-x-2"
            >
              <span>Week View</span>
              <ChevronDown size={20} />
            </button>
            <div
              className={`${
                activeDropdown === "week" ? "block" : "hidden"
              } absolute  min-w-max bg-white top-14 right-0 z-40 shadow-lg rounded-xl pt-4 overflow-hidden`}
            >
              <h2 className="px-4 text-lg">Time Entry View</h2>
              <ul className="grid grid-cols-3 gap-x-2 my-2 p-4">
                <li className="flex flex-col items-center justify-center border-2 rounded-lg p-3 w-20">
                  <List size={20} />
                  <span className="">List</span>
                </li>
                <li className="flex flex-col items-center text-green-500 justify-center border-2 border-green-100 rounded-lg p-3 w-20">
                  <CalendarMinus2 size={20} />
                  <span className="">Week</span>
                </li>
                <li className="flex flex-col items-center justify-center border-2 rounded-lg p-3 w-20">
                  <Calendar1 size={20} />
                  <span className="">Day</span>
                </li>
              </ul>
              <ul className="bg-gray-50 text-gray-400  flex flex-col p-2 gap-y-1">
                <li className="flex items-center justify-start gap-1 p-2 hover:bg-white rounded-full cursor-pointer">
                  <CalendarFold size={20} />
                  <span className="flex-1">Today/Week Total</span>
                </li>
                <li
                  className={`flex items-center justify-start gap-1 p-2 hover:bg-white rounded-full cursor-pointer`}
                >
                  <Maximize2 size={20} />
                  <span className="flex-1">Extra Visualization</span>
                </li>
                <li className="flex items-center justify-start gap-1 p-2 hover:bg-white rounded-full cursor-pointer">
                  <Eye size={20} />
                  <span className="flex-1">Show Weekends</span>
                  <input type="checkbox" />
                </li>
                <li className="flex items-center justify-start gap-1 p-2 hover:bg-white rounded-full cursor-pointer">
                  <Eye size={20} />
                  <span className="flex-1">Show Timeline In Day View</span>
                  <input type="checkbox" className="" />
                </li>
                <li className="flex items-center justify-start gap-1 p-2 hover:bg-white rounded-full  cursor-pointer">
                  <TimerReset size={20} />
                  <span className="flex-1">Calendar Hours</span>
                  <input type="checkbox" />
                </li>
              </ul>
            </div>
          </menu>

          <div className="flex items-center justify-center gap-x-2 h-12 w-12 border border-gray-300 rounded-full p-1 px-3 bg-gray-50 shadow-md">
            <button>
              <EllipsisVertical size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between px-[3%] gap-x-4 text-gray-600">
        <div className="text-5xl flex-1">What are you working on?</div>
        <div className="flex items-center gap-x-1">
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            1
          </button>
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            2
          </button>
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            3
          </button>
        </div>

        <button className="bg-gray-800 text-white text-lg flex items-center justify-center gap-x-2 h-12 px-5 rounded-full shadow-md">
          <ClockPlus size={24} />
          New Event
        </button>
      </section>

      <section className="mt-6 flex rounded-2xl border-2 border-gray-200 bg-white h-full">
        <div className="w-1/12">
          <div className="flex items-center justify-center border-b-2 space-x-2 border-gray-300 h-20">
            <button
              onClick={() => setScale(scale > 1 ? scale - 1 : scale)} // burada ölçeği azaltıyoruz, ancak 1'in altına düşmemesini sağlıyoruz}
              className="bg-white w-10 h-10 rounded-full shadow-md"
            >
              <span className="text-2xl">-</span>
            </button>
            <button
              onClick={() => setScale(scale + 1)}
              className="bg-white w-10 h-10 rounded-full shadow-md"
            >
              <span className="text-2xl">+</span>
            </button>
          </div>

          <div className="grid grid-rows-24 min-h-dvh">
            {hours.map((hour, index) => (
              <div
                style={
                  { height: `${60 * scale}px` } // burada her saat diliminin yüksekliğini ayarlıyoruz
                }
                key={index}
                className={clsx(
                  `flex items-start justify-center text-xl left-0 font-semibold text-gray-600 border-b-2 border-r-2 border-gray-300 w-full `,
                  { "text-green-500 bg-green-100 ": moment().hour() === index }
                )}
              >
                {hour}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-7 w-full h-full relative">
          {/* Generate days of the week for October 2023 */}
          {daysInWeek.map((day) => (
            <div
              key={day.day}
              className={`${
                day.dayOfMonth === moment().date() ? "bg-gray-100" : ""
              } border border-gray-200`}
            >
              <div className="flex max-md:flex-col items-start justify-center gap-1 border-b-2 border-gray-300  h-20 text-gray-600">
                <div className="text-2xl md:text-4xl xl:text-6xl font-semibold">
                  {day.dayOfMonth}
                </div>
                <div className="text-lg xl:text-xl py-2 italic">
                  <div>{day.dayName}</div>
                </div>
              </div>

              {/* Display to-dos for the day */}
              <div className="grid grid-rows-24 min-h-screen ">
                {toDos
                  .filter((todo) =>
                    moment(todo.startTime).isSame(day.date, "day")
                  )
                  .map((todo) => (
                    <div
                      key={todo.id}
                      style={{
                        top: `${moment(todo.startTime).minute() * scale}px`, // burada saat dilimini kullanarak konumu ayarlıyoruz
                        left: 0,
                        height: `${60 * scale}px`, // burada her to-do öğesinin yüksekliğini ayarlıyoruz
                        gridRowStart: moment(todo.startTime).hour() + 1, // burada saat dilimini kullanarak satırları ayarlıyoruz
                        gridRow: `${moment(todo.startTime).hour() + 1}/${
                          moment(todo.endTime).hour() + 1
                        }`,
                        gridColumn: "span 1", // bu satır, her to-do öğesinin bir sütun boyunca yayılmasını sağlar
                        position: "relative",
                      }}
                    >
                      <button
                        onClick={() => console.log(todo.title)}
                        style={{
                          height: `${
                            convertHourStringToMinutes(todo.trainingTime) *
                            scale
                          }px`,
                          minHeight: "100px",
                        }}
                        className="top-0 left-0 right-0 absolute flex flex-col justify-between overflow-hidden rounded-2xl border-y py-2 border-white  shadow-sm bg-blue-400"
                      >
                        <div className="flex flex-col border-l-3 border-blue-200 my-2 pl-2 text-start">
                          <div className="font-semibold text-lg text-white">
                            {todo.title}
                          </div>
                          <div className="text-xs text-gray-200 flex-1">
                            <Clock size={16} className="inline mr-1" />
                            {moment(todo.startTime).format("HH:mm")} -{" "}
                            {moment(todo.endTime).format("HH:mm")}
                          </div>
                        </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white border border-black translate-x-2" />
                            <div className="w-6 h-6 rounded-full bg-white border border-black -translate-x-1" />
                            <div className="w-6 h-6 rounded-full bg-white border border-black -translate-x-4" />
                          <div className="text-sm text-white -translate-x-3">
                            +10 Other
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Calendar;
