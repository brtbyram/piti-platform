import { MessageCircle, Share, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-80 w-full bg-gray-900 relative border-b-2">
        <Image
          src="/images/fitnessperson.jpg"
          alt="Profile Picture"
          width={1472}
          height={832}
          className="h-full w-full object-cover"
        />
        <div className="absolute -bottom-20 left-[7%] rounded-full border-4 border-white bg-gray-800 h-44 w-44">
          <Image
            src="/images/IMG_20190507_232453_781.jpg"
            alt="Profile Picture"
            width={144}
            height={144}
            className="rounded-full h-full w-full object-cover"
          />
        </div>
      </div>

      <main className="flex flex-col bg-white">
        <section className="px-[7%] pb-10 flex items-start justify-between border-b-2 shadow-md">
          <div className="min-h-min min-w-min pt-24">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl font-bold text-gray-800">
                Berat Murathan Bayram
              </h1>
              <p className="text-gray-400">@brtbyram</p>
              <p className="text-black w-[60%] mt-3">
                Hey! I have a passion for fitness and nutrition, and I&apos;m
                excited to share my journey with you all. Let&apos;s connect and
                inspire each other to lead healthier lives together! Be sure to
                check out my workouts and nutrition tips. Feel free to reach out
                if you have any questions or just want to chat about fitness!
              </p>
              <button className="bg-red-600 text-white mt-5 px-8 py-2 rounded-md hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-flow-col place-content-center gap-4 pt-4 ">
            <button className="text-red-600 border-2 border-gray-200  h-16 w-16 rounded-full">
              <MessageCircle size={24} className="inline" />
            </button>
            <button className="text-red-600 border-2 border-gray-200  h-16 w-16 rounded-full">
              <Star size={24} className="inline" />
            </button>

            <button className="text-red-600 border-2 border-gray-200  h-16 w-16 rounded-full">
              <Share size={24} className="inline" />
            </button>
          </div>
        </section>

        <section className="px-[7%] py-10 mt-6  text-gray-700 shadow-md">
          <nav className="flex items-center justify-start space-x-4">
            <button className="text-lg px-8 py-3 bg-red-600/10 text-black rounded-full">
              Exclusive Workouts
            </button>
            <button className="text-lg px-8 py-3 hover:bg-yellow-600/10 text-black rounded-full">
              Progress Tracker
            </button>
            <button className="text-lg px-8 py-3 hover:bg-green-600/10 text-black rounded-full">
              Nutrition Tips
            </button>
            <button className="text-lg px-8 py-3 hover:bg-blue-600/10 text-black rounded-full">
              Achievements
            </button>
          </nav>
        </section>


      
          <section className="px-[7%] py-10 mt-6 text-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 w-full">
              <h3 className="text-xl font-semibold mb-2">Weekly Workout Goal</h3>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                <div
                  className="bg-red-600 h-6 rounded-full flex items-center justify-end pr-3 text-white text-sm font-bold transition-all"
                  style={{ width: "70%" }}
                >
                  7/10
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calories Burned</h3>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                <div
                  className="bg-green-500 h-6 rounded-full flex items-center justify-end pr-3 text-white text-sm font-bold transition-all"
                  style={{ width: "60%" }}
                >
                  1800/3000 kcal
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Water Intake</h3>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-blue-500 h-6 rounded-full flex items-center justify-end pr-3 text-white text-sm font-bold transition-all"
                  style={{ width: "80%" }}
                >
                  2L/2.5L
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-red-600 mb-2">70%</span>
              <span className="text-gray-600">Overall Progress</span>
              <p className="mt-4 text-center text-gray-500 max-w-xs">
                Harika gidiyorsun! Hedeflerine ulaşmak için bu tempoyu koru. Her gün küçük adımlar büyük değişimler yaratır.
              </p>
            </div>
            
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Today&apos;s Activities</h3>
            <ul className="pl-5 mt-2">
              <li className="">30 minutes of cardio</li>
              <li className="">Strength training: Upper body</li>
              <li className="">10,000 steps walked</li>
              <li className="">2 liters of water consumed</li>
            </ul>

            
          </div>

          

        
        </section>
      </main>
    </div>
  );
}

export default page;
