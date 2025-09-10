"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

function CategorySlider(props) {

  const { activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (category: string) => void; } = props;

  const categoriesData = [
    { name: "All", imageURL: "/images/trainer.png" },
    { name: "Yoga", imageURL: "/images/yoga-pose.png" },
    { name: "Pilates", imageURL: "/images/pilates.png" },
    { name: "Strength Training", imageURL: "/images/functional.png" },
    { name: "Cardio", imageURL: "/images/cardio.png" },
    { name: "Nutrition", imageURL: "/images/nutrition.png" },
    { name: "Flexibility", imageURL: "/images/flexibility.png" },
    { name: "Weight Loss", imageURL: "/images/weight-loss.png" },
    { name: "Muscle Gain", imageURL: "/images/muscle-gain.png" },
    { name: "Endurance", imageURL: "/images/endurance.png" },
    { name: "Wellness", imageURL: "/images/wellness.png" },
    { name: "Mindfulness", imageURL: "/images/mindfulness.png" },
    { name: "Balance", imageURL: "/images/balance.png" },
    { name: "Core Strength", imageURL: "/images/core-strength.png" },
  //    { name: "Mobility", imageURL: "/images/mobility.png" },
  //   { name: "Agility", imageURL: "/images/agility.png" },
  //   { name: "Recovery", imageURL: "/images/recovery.png" },
  //  { name: "Sports Training", imageURL: "/images/sports-training.png" },
  //   { name: "Functional Fitness", imageURL: "/images/functional-fitness.png" },
  //    { name: "Group Classes", imageURL: "/images/group-classes.png" },
    // { name: "Personal Training", imageURL: "/images/personal-training.png" },
    // { name: "Online Coaching", imageURL: "/images/online-coaching.png" },
    // { name: "Bootcamp", imageURL: "/images/bootcamp.png" },
    // { name: "HIIT", imageURL: "/images/hiit.png" },
    // { name: "Dance Fitness", imageURL: "/images/dance-fitness.png" },
    // { name: "Senior Fitness", imageURL: "/images/senior-fitness.png" },
    // { name: "Kids Fitness", imageURL: "/images/kids-fitness.png" },
    // { name: "Pregnancy Fitness", imageURL: "/images/pregnancy-fitness.png" },
    // { name: "Postnatal Fitness", imageURL: "/images/postnatal-fitness.png" },
    // { name: "Adaptive Fitness", imageURL: "/images/adaptive-fitness.png" },
    // { name: "Outdoor Training", imageURL: "/images/outdoor-training.png" },
    // { name: "Virtual Classes", imageURL: "/images/virtual-classes.png" },
  ];

  return (
    <div className="col-span-10 md:col-span-7 lg:col-span-8 bg-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView="auto"
        navigation
        className="category-slider "
      >
        {categoriesData.map((category, index) => (
          <SwiperSlide
            onClick={() => setActiveCategory(category.name)}
            key={index}
            className={clsx(
              "opacity-90 grid place-content-center place-items-center bg-white gap-y-2 h-[78px] hover:border-b cursor-pointer max-w-max mx-6 hover:opacity-100",
              {
                "border-b border-neutral-500 text-black !opacity-100":
                  category.name === activeCategory,
              }
            )}
          >
            <Image
              src={category.imageURL}
              alt={category.name}
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-xs ">{category.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
