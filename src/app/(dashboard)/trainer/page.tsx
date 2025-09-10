import Image from "next/image";
import React from "react";
import { Icon } from "../../../../public/Icons";

function Trainer() {
  return (
    <main className="flex flex-col gap-4 p-4 bg-gray-200 min-h-screen h-full">
      <section className="bg-gradient-to-r from-[#27ae60] to-[#1d8548] text-white flex max-sm:flex-col items-center justify-between p-8 rounded-xl shadow-md">
        <div className="flex max-md:flex-col items-end justify-between gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">Upcoming Lesson</h1>
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/images/IMG_20190507_232453_781.jpg"
                alt="Lesson Image"
                width={60}
                height={60}
                className="rounded-full shadow-xl"
              />
              <h2 className="text-2xl text-white font-semibold">
                Berat Murathan Bayram
              </h2>
            </div>
          </div>
          <div className="flex gap-4 text-lg">
            <div className="text-white flex flex-col gap-1">
              <div className="text-gray-200 italic">Lesson Type:</div>
              <div className="font-semibold">Online</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-gray-200 italic">Duration:</div>
              <div className="font-semibold">60 minutes</div>
            </div>
            <div className=" flex flex-col gap-1">
              <div className="text-gray-200 italic">Level:</div>
              <div className="font-semibold">Beginner</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  text-start">
          <div className="flex items-center gap-2 text-gray-300">
            <Icon name="calendar" size={24} />
            <h2 className="text-xl ">25 Jan, 2025</h2>
            <p className="text-xl text-white">10:00 AM - 11:00 AM</p>
          </div>
          <div className="text-white text-6xl font-bold">02:25:43</div>
          <p className="text-gray-300">Left to next lesson</p>
        </div>
      </section>

      <section className="grid md:grid-cols-5 gap-4 max-w-screen ">
        <section className="bg-gray-100 text-black py-8 px-4 rounded-xl col-span-3">
          <div className="flex items-center justify-between gap-2 mb-4 w-full">
            <h1 className="text-3xl font-semibold">My Lessons(6)</h1>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <div>All lessons</div> 
              <Icon name="arrowRight" size={24} /> 
              </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 h-32 rounded-lg shadow-md border-l-6 ring-1 ring-gray-300 border-[#27ae60] flex max-sm:flex-col items-start md:items-center justify-center md:justify-between gap-4">
              <div className="flex items-center justify-start gap-1 text-white">
                <Image
                  src="/images/IMG_20190507_232453_781.jpg"
                  alt="Lesson Image"
                  width={60}
                  height={60}
                  className="rounded-full shadow-xl"
                />
                <h2 className="text-lg text-black">Berat Murathan Bayram</h2>
              </div>
              <div className="flex items-end">
                <div className="text-gray-500 flex items-center gap-1 border-r px-2">
                  <Icon name="calendar" size={20} />
                  <span>25 Jan, 2025</span>
                </div>
                <div className="text-gray-500 flex items-center gap-1 px-2">
                  <Icon name="clock" size={20} />
                  <span>10:00 AM</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 h-32 rounded-lg shadow-md border-l-6 ring-1 ring-gray-300 border-[#27ae60] flex max-sm:flex-col items-start md:items-center justify-center md:justify-between gap-4">
              <div className="flex items-center justify-start gap-1 text-white">
                <Image
                  src="/images/IMG_20190507_232453_781.jpg"
                  alt="Lesson Image"
                  width={60}
                  height={60}
                  className="rounded-full shadow-xl"
                />
                <h2 className="text-lg text-black">Berat Murathan Bayram</h2>
              </div>
              <div className="flex items-end">
                <div className="text-gray-500 flex items-center gap-1 border-r px-2">
                  <Icon name="calendar" size={20} />
                  <span>25 Jan, 2025</span>
                </div>
                <div className="text-gray-500 flex items-center gap-1 px-2">
                  <Icon name="clock" size={20} />
                  <span>10:00 AM</span>
                </div>
              </div>
            </div>
                        <div className="bg-white p-4 h-32 rounded-lg shadow-md border-l-6 ring-1 ring-gray-300 border-[#27ae60] flex max-sm:flex-col items-start md:items-center justify-center md:justify-between gap-4">
              <div className="flex items-center justify-start gap-1 text-white">
                <Image
                  src="/images/IMG_20190507_232453_781.jpg"
                  alt="Lesson Image"
                  width={60}
                  height={60}
                  className="rounded-full shadow-xl"
                />
                <h2 className="text-lg text-black">Berat Murathan Bayram</h2>
              </div>
              <div className="flex items-end">
                <div className="text-gray-500 flex items-center gap-1 border-r px-2">
                  <Icon name="calendar" size={20} />
                  <span>25 Jan, 2025</span>
                </div>
                <div className="text-gray-500 flex items-center gap-1 px-2">
                  <Icon name="clock" size={20} />
                  <span>10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 text-black py-8 px-4 rounded-xl flex flex-col items-center justify-start gap-y-10 col-span-2">
          <div className="flex items-center justify-between gap-2 mb-4 w-full">
            <h1 className="text-2xl font-semibold">My review rating</h1>
            <Icon name="arrowRight" size={24} /> 
          </div>
          <div className="h-80 w-80 rounded-full border-8 border-b-0 border-[#27ae60] flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2 h-64 w-64 rounded-full bg-[#27ae60]/10 text-white">
              <div className="text-5xl font-semibold text-[#27ae60]">4.8/5</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index}>
                    <Icon name="star" size={28} color="#dfb024" />
                  </div>
                ))}
              </div>
              <p className="text-[#27ae60]/70 text-center text-xl">
                Students love <br /> your work
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-gray-100 text-black py-8 px-4 rounded-xl">
        <div className="flex items-center justify-between gap-2 mb-4">
          <h1 className="text-2xl font-semibold">My Students</h1>
          <div className="flex items-center gap-2 text-lg font-semibold"><div>View All</div> <Icon name="arrowRight" size={24} /> </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-between gap-4 bg-[#27ae60]/10 h-88 p-8 rounded-xl shadow-md">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Lesson Image"
              width={140}
              height={140}
              className="rounded-full shadow-xl"
            />
            <h2 className="text-xl">Berat Murathan Bayram</h2>
            <div className="text-lg text-gray-500">Beginner, Powerlifter</div>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Progress
              </button>
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 bg-[#27ae60]/10 h-88 p-8 rounded-xl shadow-md">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Lesson Image"
              width={140}
              height={140}
              className="rounded-full shadow-xl"
            />
            <h2 className="text-xl">Berat Murathan Bayram</h2>
            <div className="text-lg text-gray-500">Beginner, Powerlifter</div>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Progress
              </button>
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 bg-[#27ae60]/10 h-88 p-8 rounded-xl shadow-md">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Lesson Image"
              width={140}
              height={140}
              className="rounded-full shadow-xl"
            />
            <h2 className="text-xl">Berat Murathan Bayram</h2>
            <div className="text-lg text-gray-500">Beginner, Powerlifter</div>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Progress
              </button>
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 bg-[#27ae60]/10 h-88 p-8 rounded-xl shadow-md">
            <Image
              src="/images/IMG_20190507_232453_781.jpg"
              alt="Lesson Image"
              width={140}
              height={140}
              className="rounded-full shadow-xl"
            />
            <h2 className="text-xl">Berat Murathan Bayram</h2>
            <div className="text-lg text-gray-500">Beginner, Powerlifter</div>
            <div className="grid grid-cols-2 w-full gap-2 mt-2">
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Progress
              </button>
              <button className=" border-2 bg-white border-gray-200 h-12 rounded-full">
                Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-5 gap-4">
        <section className="bg-gray-100 text-black p-8 rounded-xl col-span-3">
          <h1 className="text-2xl font-semibold mb-4">Earning</h1>
          <div className="flex items-center gap-4">
            <Image
              src="/images/earning.png"
              alt="Earning Image"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-3xl font-bold">$500</div>
          </div>
        </section>

        <section className="bg-gray-100 text-black p-8 rounded-xl col-span-2">
          <h1 className="text-2xl font-semibold">Calendar</h1>
          <input
            type="date"
            className="mt-4 p-2 rounded-lg bg-white text-black w-full"
          />
        </section>
      </section>
    </main>
  );
}

export default Trainer;
