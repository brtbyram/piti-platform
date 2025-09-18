import { Clock, Flame, Search, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50 text-black  p-10 gap-y-4 overflow-hidden">
      <section className="flex flex-col justify-center md:justify-start">
        <h1 className="text-lg">GOOD MORNING</h1>
        <p className="text-4xl">Berat Murathan Bayram</p>

        <label className="bg-neutral-100 px-4 py-3 mt-6 flex items-center justify-center md:justify-start min-w-sm w-7/12 max-w-3xl rounded-full">
          <Search size={24} className=" text-neutral-500" />
          <input
            type="text"
            className="focus:outline-0 px-3 placeholder:text-neutral-500 placeholder:text-xl w-full"
            placeholder="What do you learn today?"
          />
        </label>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <div className="relative flex items-end justify-end h-64  bg-neutral-200 rounded-2xl overflow-hidden">
          <Image
            src="/images/Growth.png"
            alt="crossfit"
            width={1472}
            height={832}
            objectPosition="center"
            className="absolute w-full h-full"
          />
          <div className="bg-[#D7FFA4] text-black p-3 px-4 z-10 rounded-full flex items-center m-6">
            Explore Now
          </div>
        </div>
        <div className="flex items-end justify-between h-64  bg-neutral-200 rounded-2xl p-6">
          <h3 className="text-3xl font-semibold py-1 ">Yoga</h3>
          <div className="bg-[#D7FFA4] text-black p-3 px-4 rounded-full flex items-center">
            Explore Now
          </div>
        </div>
        <div className="flex items-end justify-between h-64  bg-neutral-200 rounded-2xl p-6">
          <h3 className="text-3xl font-semibold py-1 ">Pilates</h3>
          <div className="bg-[#D7FFA4] text-black p-3 px-4 rounded-full flex items-center">
            Explore Now
          </div>
        </div>
        <div className="flex items-end justify-between h-64  bg-neutral-200 rounded-2xl p-6">
          <h3 className="text-3xl font-semibold py-1 ">Cardio</h3>
          <div className="bg-[#D7FFA4] text-black p-3 px-4 rounded-full flex items-center">
            Explore Now
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-between text-neutral-700 w-full mb-2">
          <h3 className="font-semibold">FOR YOU</h3>
          <button className="dark:text-[#D7FFA4] border-b border-neutral-700 dark:border-[#D7FFA4]">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-neutral-300 rounded-2xl flex flex-col items-center justify-start text-white overflow-hidden h-72"
            >
              <div className="h-[70%] w-full bg-neutral-200 "></div>
              <div className="p-3 flex flex-col items-start justify-between h-[40%] w-full !leading-0">
                <h4 className="text-xs text-neutral-100">FOR HOME </h4>
                <div className="flex items-center justify-between w-full">
                  <p className="flex-1">Full Body Workout</p>
                  <Flame
                    size={20}
                    className="text-[#D7FFA4] drop-shadow-sm drop-shadow-[#D7FFA4]"
                  />
                  <p className="text-neutral-100 text-sm">340 kcal</p>
                </div>
                <div className="flex items-center justify-start space-x-4 mt-2">
                  <div className="flex items-center justify-start space-x-1 w-full">
                    <StarIcon
                      size={16}
                      className="text-yellow-400 drop-shadow-sm shadow-amber-300"
                    />
                    <p className="text-neutral-100">4.8</p>
                  </div>
                  <div className="flex items-center justify-start space-x-1 w-full text-nowrap">
                    <Clock
                      size={16}
                      className="text-neutral-100 drop-shadow-sm"
                    />
                    <p className="text-neutral-100">30 min</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-between text-neutral-700 w-full mb-2">
          <h3 className="font-semibold">POPULAR TRAINERS</h3>
          <button className="dark:text-[#D7FFA4] border-b border-neutral-700 dark:border-[#D7FFA4]">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-neutral-300 p-4 rounded-2xl h-40 flex items-center justify-center text-white"
            >
              <p className="text-lg">Trainer {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-between text-neutral-700 w-full mb-2">
          <h3 className="font-semibold">FEATURED WORKOUTS</h3>
          <button className="dark:text-[#D7FFA4] border-b border-neutral-700 dark:border-[#D7FFA4]">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-neutral-300 p-4 rounded-2xl h-40 flex items-center justify-center text-white"
            >
              <p className="text-lg">Workout {item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default page;
