"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "../../public/Icons";

function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="bg-[#F3F4F6] text-gray-900 flex flex-col items-center justify-center relative size-full min-h-screen overflow-x-hidden">
        {/* Hero section */}
        <section className="hero-bg bg-cover bg-center w-screen">
          <div className="container mx-auto flex min-h-[calc(100vh-80px)] h-screen flex-col items-center justify-center px-6 text-center lg:px-10">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-extrabold !leading-24 tracking-[-0.07em] text-white  sm:text-7xl xl:text-9xl">
                UNLOCK YOUR POTENTIAL.{" "}
                <span className="text-[var(--accent-color)]">
                  CONNECT &amp; CONQUER.
                </span>
              </h1>
              <p className="mt-6 text-lg max-w-7/12 xl:max-w-5/12 text-neutral-200 sm:text-xl">
                Whether you&apos;re seeking expert guidance to smash your
                fitness goals or you&apos;re a trainer ready to inspire,s
                yourTrainer is your ultimate platform.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <button className="bg-[var(--accent-color)] text-white hover:bg-opacity-90  transition-colors duration-300 flex w-full sm:w-auto min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center rounded-[2rem] py-4 px-6  hover:shadow-md shadow-[#27ae60]  transform hover:scale-105 ">
                  <span className="">I&apos;m Looking for a Trainer</span>
                </button>
                <button className="bg-white text-[var(--primary-color)] hover:bg-neutral-100 flex w-full sm:w-auto min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center  rounded-[2rem] py-4 px-6 hover:shadow-md shadow-neutral-100 transform hover:scale-105 transition-all duration-300">
                  <span className="">I&apos;m a Trainer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        {/* <section className="container mx-auto px-6 py-16 my-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why use yourTrainer?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your journey to fitness excellence starts here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">
                Connect with certified trainers who are passionate about helping
                you achieve your goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600">
                Get customized workout and nutrition plans tailored to your
                unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of fitness enthusiasts for motivation
                and support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Book sessions at your convenience, whether in-person or online.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your progress with our easy-to-use tracking tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Enjoy competitive rates and flexible payment options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Your Success is Our Mission
              </h3>
              <p className="text-gray-600">
                At yourTrainer, we are dedicated to helping you achieve your
                fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section> */}

        {/* Why use yourTrainer section */}
        <section
          data-container
          data-scroll
          ref={scrollRef}
          className="h-screen flex overflow-hidden relative container mx-auto bg-[#F3F4F6]"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div
            data-scroll
            data-scroll-to
            data-scroll-direction="horizontal"
            data-scroll-speed="-0.8"
            data-scroll-position="top"
            className="basis-1/2 sticky top-0 left-0 flex flex-col items-start justify-center px-6 lg:px-10"
          >
            <h2 className="text-4xl font-bold mb-4">
              Choose Your Coaching Model
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you prefer one-on-one training, group sessions, or online
              coaching, we have the perfect fit for you. Our platform connects
              you with experienced trainers who tailor their approach to your
              unique goals, schedule, and lifestyle. Enjoy the flexibility to
              choose the coaching model that works best for you—be it in-person,
              virtual, or hybrid. With a wide range of specialties and training
              styles, you can find the guidance and motivation you need to
              achieve lasting results, all within a supportive and inspiring
              community.
            </p>
            <button className="bg-[var(--accent-color)] text-white hover:bg-opacity-90 transition-colors duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
              Find a Trainer
            </button>
          </div>
          <div className="flex space-x-4 ">
            <div data-scroll data-scroll-speed="-0.2" className="space-y-3">
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/group-coaching-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/hybrid-coaching-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/nutritionist-coaching.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/online-personal-training-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div data-scroll data-scroll-speed="-0.4" className="space-y-3 ">
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/hybrid-coaching-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/online-personal-training-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/in-person-coaching.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-80 h-64 border rounded-2xl">
                <Image
                  src="/images/group-coaching-1.png"
                  alt="Group Coaching"
                  width={256}
                  height={288}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="w-screen bg-[#F3F4F6] pt-10">
          <div className="relative top-0 left-0 w-screen overflow-hidden">
            <div className="border-b-[4rem] border-b-gray-200 border-l-[100vw] border-l-[#F3F4F6] static " />
          </div>
          <div className="flex justify-center items-start  bg-gray-200">
            <div className="p-20">
              <h2 className="text-7xl">FAQ</h2>
            </div>
            <div className="">
              <div className="container mx-auto px-6 py-16">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">What is yourTrainer?</h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    yourTrainer is a platform that connects individuals with
                    certified fitness trainers for personalized training and
                    nutrition plans.
                  </p> */}
                    </div>
                  </div>

                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl mt-6">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">How do I find a trainer?</h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    You can search for trainers based on your location, fitness
                    goals, and preferences on our platform.
                  </p> */}
                    </div>
                  </div>

                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl mt-6">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">
                        What types of training do you offer?
                      </h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    We offer a wide range of training options, including
                    personal training, group classes, and online coaching.
                  </p> */}
                    </div>
                  </div>

                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl mt-6">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">How do I book a session?</h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    You can easily book a session with your chosen trainer
                    through our platform.
                  </p> */}
                    </div>
                  </div>

                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl mt-6">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">
                        What payment options are available?
                      </h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    We accept various payment methods, including credit cards and
                    online payment platforms.
                  </p> */}
                    </div>
                  </div>

                  <div className="flex items-center p-4 px-8 space-x-6 bg-[#F3F4F6] rounded-xl mt-6">
                    <div className="rounded-full h-12 w-12 relative cursor-pointer group bg-gray-200">
                      <span className="h-[2px] w-4 bg-gray-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                      <span className="h-[2px] w-4 bg-gray-500 rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-0 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-3xl">How do I contact support?</h3>
                      {/* <p className="text-gray-600 mb-6 mt-4">
                    You can reach our support team through the contact form on
                    our website or via email.
                  </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="bg-white py-16 w-screen h-screen flex flex-col items-center justify-center text-center gap-y-4">
  
            <h2 className="!leading-12 text-7xl font-bold text-center mb-8">
              We let our{" "}
              <span className="text-green-500">clients' success</span> <br /> be
              our speaker
            </h2>

            <p className="w-7/12 mx-auto my-2">
              Access a wealth of success stories from our clients who have
              transformed their lives with the help of yourTrainer. From weight
              loss to muscle gain, our trainers have guided countless
              individuals on their fitness journeys. Read their inspiring
              testimonials and see how personalized training and nutrition plans
              have made a difference in their lives.
            </p>

            <button className="flex justify-center items-center  gap-x-3 mx-auto my-6 bg-green-500 font-semibold  text-white hover:bg-green-600 transition-all duration-300 px-5 py-3 rounded-full group">
              Order Now
              <div className="-rotate-45 group-hover:rotate-0 text-black rounded-full bg-white w-7 h-7 flex items-center justify-center transition-transform group-hover:animate-pulse">
                <Icon name="arrowRight" size={16} />
              </div>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-start mb-4 gap-1">
                  <div className="w-13 h-13 rounded-full bg-gray-300">
                    <Image
                      src="/images/IMG_20190507_232453_781.jpg"
                      alt="Client Avatar"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <h3 className="text-xl text-black">Berat Bayram</h3>
                    <p className="text-gray-600 text-sm">
                      Fitness Enthusiast | Client since 2022
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-start">
                  yourTrainer has transformed my fitness journey! The trainers
                  are knowledgeable and truly care about my progress.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-start mb-4 gap-1">
                  <div className="w-13 h-13 rounded-full bg-gray-300">
                    <Image
                      src="/images/IMG_20190507_232453_781.jpg"
                      alt="Client Avatar"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <h3 className="text-xl text-black">Berat Bayram</h3>
                    <p className="text-gray-600 text-sm">
                      Fitness Enthusiast | Client since 2022
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-start">
                  I love the personalized approach! My trainer created a plan
                  that fits my lifestyle, and I've seen amazing results.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-start mb-4 gap-1">
                  <div className="w-13 h-13 rounded-full bg-gray-300">
                    <Image
                      src="/images/IMG_20190507_232453_781.jpg"
                      alt="Client Avatar"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <h3 className="text-xl text-black">Berat Bayram</h3>
                    <p className="text-gray-600 text-sm">
                      Fitness Enthusiast | Client since 2022
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-start">
                  The community support is incredible! I've made friends and
                  found motivation that keeps me going.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-start mb-4 gap-1">
                  <div className="w-13 h-13 rounded-full bg-gray-300">
                    <Image
                      src="/images/IMG_20190507_232453_781.jpg"
                      alt="Client Avatar"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <h3 className="text-xl text-black">Berat Bayram</h3>
                    <p className="text-gray-600 text-sm">
                      Fitness Enthusiast | Client since 2022
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-start">
                  yourTrainer has been a game-changer for me! The trainers are
                  supportive, and the platform is easy to use. I've never felt
                  more motivated to reach my goals.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-8">
              <div className="flex  justify-center mt-8">
                <Icon name="star" size={20} color="oklch(62.7% .194 149.214)" />
                <div className="text-lg font-semibold">Trustpilot</div>
              </div>
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div
                      className={` text-white p-0.5 ${
                        index < 4
                          ? "bg-green-600 "
                          : "bg-gradient-to-r from-50% from-green-600 to-50% to-gray-300"
                      }`}
                    >
                      <Icon name="star" size={14} color="#fff" />
                    </div>
                  </div>
                ))}
              </div>
              <p>Data provided by trustpilot.</p>
            </div>
            
        </section>

        {/* Subscribe section */}
        <section className="bg-[#27ae60] text-[#faf5ec] w-screen rounded-t-[10rem] py-16">
          <div className="flex flex-col justify-center items-center px-6 py-16">
            <h2 className="text-6xl font-bold  mb-4">
              Join the yourTrainer Community
            </h2>
            <p className="text-xl text-[#faf5ec]/80 mb-8 w-7/12 text-center">
              Sign up today and take the first step towards achieving your
              fitness goals with the support of our expert trainers. Join a
              vibrant community, access exclusive tips, and stay motivated on
              your journey to a healthier you!
            </p>
            <div className="flex justify-center gap-x-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md px-4 py-3 rounded-lg text-lg bg-[#faf5ec] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#27ae60] transition-colors duration-300"
              />
              <button className="bg-black text-[#faf5ec] hover:bg-opacity-90 transition-colors duration-300 px-6 py-3 rounded-lg text-lg font-semibold">
                Sign Up Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
