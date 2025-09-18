import { ArrowRightIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50 text-black p-10 gap-y-8 overflow-hidden">
      <section className="flex flex-col justify-center md:justify-start">
        <h1 className="text-lg">GOOD MORNING</h1>
        <p className="text-4xl">Berat Murathan Bayram</p>
        <p className="text-neutral-500 mt-2">
          Have a great day ahead! Let's make the most of it.
        </p>
      </section>

      {/* weekly steps and calories target */}
      <section className="grid grid-cols-7 gap-3">
        <div className="col-span-10 md:col-span-7 lg:col-span-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">Weekly Targets</h2>
            <div className="px-4 border-2 border-gray-200 rounded-full">
                <select className="py-2 focus:outline-none bg-transparent text-black">
                  <option value="steps" selected>Steps</option>
                  <option value="calories">Calories</option>
                  <option value="distance">Distance</option>
                  <option value="active-time">Active Time</option>
                  <option value="heart-rate">Heart Rate</option>
                </select>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <div className="col-span-7 grid grid-cols-7 gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <div
                  key={index}
                  className="rounded-full flex flex-col items-center justify-center"
                >
                  <span className="text-xs text-neutral-700 mt-2">{day}</span>
                </div>
              ))}
            </div>
            {[
              { date: "27 07 2025", steps: 5000, calories: 300 },
              { date: "28 07 2025", steps: 6500, calories: 350 },
              { date: "29 07 2025", steps: 7200, calories: 400 },
              { date: "30 07 2025", steps: 8000, calories: 450 },
              { date: "31 07 2025", steps: 9500, calories: 500 },
              { date: "01 08 2025", steps: 10000, calories: 550 },
              { date: "02 08 2025", steps: 4000, calories: 600 },
            ].map((day, index) => (
              <div
                key={index}
                className={`h-40 w-40 rounded-full flex flex-col items-center justify-center`}
                style={{
                  background: `linear-gradient(to top left, #333, ${(day.steps / 12000) * 100}%, #eee ${(day.steps / 12000) * 100}%)`,
                }}
              >
                <div className="flex flex-col items-center justify-center h-[80%] w-[80%] bg-neutral-800 rounded-full">
                  <p className="text-2xl text-neutral-200 font-semibold">{day.steps}</p>
                  <p className="text-sm text-neutral-400">Steps</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative flex items-start flex-col justify-center bg-gradient-to-r from-[#d43a3a] to-[#e27e7e] p-6 rounded-4xl mb-8 min-h-64 overflow-hidden">
        <p className="!leading-[3.8rem] text-[48px] font-semibold w-8/1 text-neutral-200">
          Fast-Track with a personal Trainer
        </p>
        <button className="bg-black text-white p-2 pl-5 rounded-full mt-4 text-xl">
          Explore
          <ArrowRightIcon
            size={28}
            className="inline-block ml-2 p-1 rounded-full bg-white text-black -rotate-45"
          />
        </button>
        <div className="absolute  top-1/2 -translate-y-1/2 -right-3 lg:right-16 bg-white h-40 w-40 rounded-full">
          <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-white opacity-10 " />
          <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-white opacity-20 " />
          <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-88 w-88 rounded-full bg-white opacity-30 " />
        </div>
        <div className="absolute -top-2 right-[7%] md:right-[19%] bg-white h-28 w-28 rounded-full" />
        <div className="absolute -bottom-2 right-[20%] lg:right-[24%] bg-white h-36 w-36 rounded-full" />
      </section>

      <section className="flex flex-col justify-center md:justify-start">
        <h2>News Community</h2>
        <p className="text-4xl">Discover the latest in fitness</p>
        <p className="text-neutral-500 mt-2">
          Stay updated with the latest trends, tips, and stories from the
          fitness world.
        </p>
      </section>


      <section>
        <h2>Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-neutral-200 p-6 rounded-4xl">
            <h3 className="text-xl font-semibold">Yoga Retreat</h3>
            <p className="text-neutral-500 mt-2">
              Join us for a relaxing weekend of yoga and meditation.
            </p>
            <button className="bg-[#D7FFA4] text-black p-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>
          <div className="bg-neutral-200 p-6 rounded-4xl">
            <h3 className="text-xl font-semibold">CrossFit Challenge</h3>
            <p className="text-neutral-500 mt-2">
              Test your limits in our upcoming CrossFit challenge.
            </p>
            <button className="bg-[#D7FFA4] text-black p-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>
          <div className="bg-neutral-200 p-6 rounded-4xl">
            <h3 className="text-xl font-semibold">Nutrition Workshop</h3>
            <p className="text-neutral-500 mt-2">
              Learn how to fuel your body for optimal performance.
            </p>
            <button className="bg-[#D7FFA4] text-black p-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
