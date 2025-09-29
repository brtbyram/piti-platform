"use client";

import CategorySlider from "./components/categories/CategorySlider";
import CategoryFilter from "./components/categories/CategoryFilter";
import { useState } from "react";
import Link from "next/link";

function Trainers() {
  const [activeCategory, setActiveCategory] = useState("All");

  interface Trainer {
    id: number;
    name: string;
    specialization: string;
    image: string;
    packages: {
      id: number;
      name: string;
      price: number;
      duration: string;
    }[];
    reviews: {
      id: number;
      user: string;
      rating: number;
      comment: string;
    }[];
    socialLinks: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    contact: {
      email?: string;
      phone?: string;
    };
    availability: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  }

  const allTrainers = [
    {
      id: 1,
      name: "John Doe",
      specialization: "Yoga Instructor",
      image: "/images/trainers1.jpg",
      packages: [
        { id: 1, name: "Basic Yoga Package", price: 50, duration: "1 month" },
        {
          id: 2,
          name: "Advanced Yoga Package",
          price: 100,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Yoga Package",
          price: 150,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Yoga Package",
          price: 200,
          duration: "1 year",
        },
        { id: 5, name: "Group Yoga Package", price: 30, duration: "1 month" },
        {
          id: 6,
          name: "Corporate Yoga Package",
          price: 500,
          duration: "6 months",
        },
        { id: 7, name: "Online Yoga Package", price: 40, duration: "1 month" },
        { id: 8, name: "Yoga Retreat Package", price: 300, duration: "1 week" },
        {
          id: 9,
          name: "Yoga for Beginners Package",
          price: 60,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Yoga for Seniors Package",
          price: 70,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Yoga for Athletes Package",
          price: 80,
          duration: "4 months",
        },
      ],
      reviews: [
        { id: 1, user: "Alice", rating: 5, comment: "Great instructor!" },
        { id: 2, user: "Bob", rating: 4, comment: "Very helpful." },
      ],
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
      contact: {
        email: "",
        phone: "123-456-7890",
      },
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 2:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      specialization: "Pilates Instructor",
      image: "/images/trainer2.jpg",
      packages: [
        { id: 1, name: "Basic Pilates", price: 60, duration: "1 month" },
        { id: 2, name: "Advanced Pilates", price: 120, duration: "3 months" },
        { id: 3, name: "Premium Pilates", price: 180, duration: "6 months" },
        { id: 4, name: "Personalized Pilates", price: 240, duration: "1 year" },
        { id: 5, name: "Group Pilates", price: 40, duration: "1 month" },
        { id: 6, name: "Corporate Pilates", price: 600, duration: "6 months" },
        { id: 7, name: "Online Pilates", price: 50, duration: "1 month" },
        { id: 8, name: "Pilates Retreat", price: 350, duration: "1 week" },
        {
          id: 9,
          name: "Pilates for Beginners",
          price: 70,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Pilates for Seniors",
          price: 80,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Pilates for Athletes",
          price: 90,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Charlie",
          rating: 5,
          comment: "Amazing Pilates classes!",
        },
        { id: 2, user: "Diana", rating: 4, comment: "Very effective." },
      ],
      socialLinks: {
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
      contact: {
        email: "",
        phone: "987-654-3210",
      },
      availability: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "11:00 AM - 3:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 3,
      name: "Mike Johnson",
      specialization: "Strength Training Coach",
      image: "/images/trainer3.jpg",
      packages: [
        {
          id: 1,
          name: "Basic Strength Training",
          price: 70,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Strength Training",
          price: 140,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Strength Training",
          price: 210,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Strength Training",
          price: 280,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Strength Training",
          price: 50,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Strength Training",
          price: 700,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Strength Training",
          price: 60,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Strength Training Retreat",
          price: 400,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Strength Training for Beginners",
          price: 80,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Strength Training for Seniors",
          price: 90,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Strength Training for Athletes",
          price: 100,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Eve",
          rating: 5,
          comment: "Best strength training coach!",
        },
        { id: 2, user: "Frank", rating: 4, comment: "Very knowledgeable." },
      ],
      socialLinks: {
        facebook: "https://facebook.com/mikejohnson",
        instagram: "https://instagram.com/mikejohnson",
        twitter: "https://twitter.com/mikejohnson",
      },
      contact: {
        email: "",
        phone: "456-789-1230",
      },
      availability: {
        monday: "8:00 AM - 4:00 PM",
        tuesday: "8:00 AM - 4:00 PM",
        wednesday: "8:00 AM - 4:00 PM",
        thursday: "8:00 AM - 4:00 PM",
        friday: "8:00 AM - 4:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 4,
      name: "Sarah Williams",
      specialization: "Cardio Fitness Trainer",
      image: "/images/trainer4.png",
      packages: [
        { id: 1, name: "Basic Cardio Package", price: 55, duration: "1 month" },
        {
          id: 2,
          name: "Advanced Cardio Package",
          price: 110,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Cardio Package",
          price: 165,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Cardio Package",
          price: 220,
          duration: "1 year",
        },
        { id: 5, name: "Group Cardio Package", price: 35, duration: "1 month" },
        {
          id: 6,
          name: "Corporate Cardio Package",
          price: 550,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Cardio Package",
          price: 45,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Cardio Retreat Package",
          price: 330,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Cardio for Beginners Package",
          price: 65,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Cardio for Seniors Package",
          price: 75,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Cardio for Athletes Package",
          price: 85,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Grace",
          rating: 5,
          comment: "Fantastic cardio workouts!",
        },
        { id: 2, user: "Hank", rating: 4, comment: "Very effective training." },
      ],
      socialLinks: {
        facebook: "https://facebook.com/sarahwilliams",
        instagram: "https://instagram.com/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
      },
      contact: {
        email: "",
        phone: "321-654-9870",
      },
      availability: {
        monday: "7:00 AM - 3:00 PM",
        tuesday: "7:00 AM - 3:00 PM",
        wednesday: "7:00 AM - 3:00 PM",
        thursday: "7:00 AM - 3:00 PM",
        friday: "7:00 AM - 3:00 PM",
        saturday: "8:00 AM - 12:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 5,
      name: "David Brown",
      specialization: "Nutrition Coach",
      image: "/images/trainer5.png",
      packages: [
        {
          id: 1,
          name: "Basic Nutrition Package",
          price: 65,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Nutrition Package",
          price: 130,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Nutrition Package",
          price: 195,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Nutrition Package",
          price: 260,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Nutrition Package",
          price: 40,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Nutrition Package",
          price: 600,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Nutrition Package",
          price: 50,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Nutrition Retreat Package",
          price: 370,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Nutrition for Beginners Package",
          price: 70,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Nutrition for Seniors Package",
          price: 80,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Nutrition for Athletes Package",
          price: 90,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Ivy",
          rating: 5,
          comment: "Excellent nutrition advice!",
        },
        {
          id: 2,
          user: "Jack",
          rating: 4,
          comment: "Very helpful and informative.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/davidbrown",
        instagram: "https://instagram.com/davidbrown",
        twitter: "https://twitter.com/davidbrown",
      },
      contact: {
        email: "",
        phone: "789-123-4560",
      },
      availability: {
        monday: "9 AM - 5 PM",
        tuesday: "9 AM - 5 PM",
        wednesday: "9 AM - 5 PM",
        thursday: "9 AM - 5 PM",
        friday: "9 AM - 5 PM",
        saturday: "10 AM - 2 PM",
        sunday: "Closed",
      },
    },
    {
      id: 6,
      name: "Emily Davis",
      specialization: "Flexibility Trainer",
      image: "/images/trainer6.png",
      packages: [
        {
          id: 1,
          name: "Basic Flexibility Package",
          price: 45,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Flexibility Package",
          price: 90,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Flexibility Package",
          price: 135,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Flexibility Package",
          price: 180,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Flexibility Package",
          price: 30,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Flexibility Package",
          price: 450,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Flexibility Package",
          price: 40,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Flexibility Retreat Package",
          price: 300,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Flexibility for Beginners Package",
          price: 60,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Flexibility for Seniors Package",
          price: 70,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Flexibility for Athletes Package",
          price: 80,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Liam",
          rating: 5,
          comment: "Great flexibility training!",
        },
        {
          id: 2,
          user: "Mia",
          rating: 4,
          comment: "Very effective and enjoyable.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        twitter: "https://twitter.com/emilydavis",
      },
      contact: {
        email: "",
        phone: "123-456-7890",
      },
      availability: {
        monday: "8:00 AM - 4:00 PM",
        tuesday: "8:00 AM - 4:00 PM",
        wednesday: "8:00 AM - 4:00 PM",
        thursday: "8:00 AM - 4:00 PM",
        friday: "8:00 AM - 4:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 7,
      name: "Oliver Wilson",
      specialization: "Weight Loss Specialist",
      image: "/images/trainer7.png",
      packages: [
        {
          id: 1,
          name: "Basic Weight Loss Package",
          price: 55,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Weight Loss Package",
          price: 110,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Weight Loss Package",
          price: 165,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Weight Loss Package",
          price: 220,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Weight Loss Package",
          price: 35,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Weight Loss Package",
          price: 550,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Weight Loss Package",
          price: 45,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Weight Loss Retreat Package",
          price: 330,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Weight Loss for Beginners Package",
          price: 65,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Weight Loss for Seniors Package",
          price: 75,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Weight Loss for Athletes Package",
          price: 85,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Noah",
          rating: 5,
          comment: "Incredible weight loss results!",
        },
        {
          id: 2,
          user: "Olivia",
          rating: 4,
          comment: "Very supportive and motivating.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/oliverwilson",
        instagram: "https://instagram.com/oliverwilson",
        twitter: "https://twitter.com/oliverwilson",
      },
      contact: {
        email: "",
        phone: "987-654-3210",
      },
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 2:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 8,
      name: "Sophia Martinez",
      specialization: "Muscle Gain Coach",
      image: "/images/trainer8.png",
      packages: [
        {
          id: 1,
          name: "Basic Muscle Gain Package",
          price: 65,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Muscle Gain Package",
          price: 130,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Muscle Gain Package",
          price: 195,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Muscle Gain Package",
          price: 260,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Muscle Gain Package",
          price: 40,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Muscle Gain Package",
          price: 600,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Muscle Gain Package",
          price: 50,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Muscle Gain Retreat Package",
          price: 370,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Muscle Gain for Beginners Package",
          price: 70,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Muscle Gain for Seniors Package",
          price: 80,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Muscle Gain for Athletes Package",
          price: 90,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Liam",
          rating: 5,
          comment: "Excellent muscle gain program!",
        },
        {
          id: 2,
          user: "Emma",
          rating: 4,
          comment: "Very effective and well-structured.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/sophiamartinez",
        instagram: "https://instagram.com/sophiamartinez",
        twitter: "https://twitter.com/sophiamartinez",
      },
      contact: {
        email: "",
        phone: "321-654-9870",
      },
      availability: {
        monday: "8:00 AM - 4:00 PM",
        tuesday: "8:00 AM - 4:00 PM",
        wednesday: "8:00 AM - 4:00 PM",
        thursday: "8:00 AM - 4:00 PM",
        friday: "8:00 AM - 4:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 9,
      name: "James Taylor",
      specialization: "Endurance Coach",
      image: "/images/trainer9.png",
      packages: [
        {
          id: 1,
          name: "Basic Endurance Package",
          price: 75,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Endurance Package",
          price: 150,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Endurance Package",
          price: 225,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Endurance Package",
          price: 300,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Endurance Package",
          price: 50,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Endurance Package",
          price: 750,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Endurance Package",
          price: 60,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Endurance Retreat Package",
          price: 450,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Endurance for Beginners Package",
          price: 80,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Endurance for Seniors Package",
          price: 90,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Endurance for Athletes Package",
          price: 100,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Ava",
          rating: 5,
          comment: "Outstanding endurance training!",
        },
        {
          id: 2,
          user: "Mason",
          rating: 4,
          comment: "Very challenging and rewarding.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/jamestaylor",
        instagram: "https://instagram.com/jamestaylor",
        twitter: "https://twitter.com/jamestaylor",
      },
      contact: {
        email: "",
        phone: "456-789-1230",
      },
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 2:00 PM",
        sunday: "Closed",
      },
    },
    {
      id: 10,
      name: "Isabella Anderson",
      specialization: "Wellness Coach",
      image: "/images/trainer10.png",
      packages: [
        {
          id: 1,
          name: "Basic Wellness Package",
          price: 50,
          duration: "1 month",
        },
        {
          id: 2,
          name: "Advanced Wellness Package",
          price: 100,
          duration: "3 months",
        },
        {
          id: 3,
          name: "Premium Wellness Package",
          price: 150,
          duration: "6 months",
        },
        {
          id: 4,
          name: "Personalized Wellness Package",
          price: 200,
          duration: "1 year",
        },
        {
          id: 5,
          name: "Group Wellness Package",
          price: 30,
          duration: "1 month",
        },
        {
          id: 6,
          name: "Corporate Wellness Package",
          price: 500,
          duration: "6 months",
        },
        {
          id: 7,
          name: "Online Wellness Package",
          price: 40,
          duration: "1 month",
        },
        {
          id: 8,
          name: "Wellness Retreat Package",
          price: 300,
          duration: "1 week",
        },
        {
          id: 9,
          name: "Wellness for Beginners Package",
          price: 60,
          duration: "2 months",
        },
        {
          id: 10,
          name: "Wellness for Seniors Package",
          price: 70,
          duration: "3 months",
        },
        {
          id: 11,
          name: "Wellness for Athletes Package",
          price: 80,
          duration: "4 months",
        },
      ],
      reviews: [
        {
          id: 1,
          user: "Sophia",
          rating: 5,
          comment: "Amazing wellness coaching!",
        },
        {
          id: 2,
          user: "Liam",
          rating: 4,
          comment: "Very relaxing and rejuvenating.",
        },
      ],
      socialLinks: {
        facebook: "https://facebook.com/isabellaanderson",
        instagram: "https://instagram.com/isabellaanderson",
        twitter: "https://twitter.com/isabellaanderson",
      },
      contact: {
        email: "",
        phone: "321-654-9870",
      },
      availability: {
        monday: "8:00 AM - 4:00 PM",
        tuesday: "8:00 AM - 4:00 PM",
        wednesday: "8:00 AM - 4:00 PM",
        thursday: "8:00 AM - 4:00 PM",
        friday: "8:00 AM - 4:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed",
      },
    },
  ];

  const categories = [
    {
      ad: "All",
      renk_kodu: "#000000",
      sloganlar: [
        "Her şey burada, fitness dünyasına hoş geldiniz!",
        "Tüm kategorilerde en iyisi, sağlıklı yaşam için tek adres!",
      ],
    },
    {
      ad: "Yoga",
      renk_kodu: "#8B4513",
      sloganlar: [
        "Zihninizi dinginleştirin, bedeninizi esnetin. **İçsel huzura giden yol.**",
        "Her nefeste güç, her duruşta denge. **Kendinize akışta kalın.**",
      ],
    },
    {
      ad: "Pilates",
      renk_kodu: "#6A5ACD",
      sloganlar: [
        "Merkezinizi keşfedin, duruşunuzu güçlendirin. **Kontrolün gücü.**",
        "Daha güçlü bir core, daha sağlıklı bir omurga. **Zarafetle güçlenin.**",
      ],
    },
    {
      ad: "Strength Training",
      renk_kodu: "#B22222",
      sloganlar: [
        "Sınırlarınızı zorlayın, kaslarınızı inşa edin. **Her tekrarda daha güçlü bir sen.**",
        "Demirle dans edin, potansiyelinizi açığa çıkarın. **Gücün zirvesine çıkın.**",
      ],
    },
    {
      ad: "Cardio",
      renk_kodu: "#FF4500",
      sloganlar: [
        "Kalbinizi hızlandırın, dayanıklılığınızı artırın. **Enerjiniz hiç bitmesin.**",
        "Her adımda daha fit, her nefeste daha enerjik. **Hayatınıza ritim katın.**",
      ],
    },
    {
      ad: "Nutrition",
      renk_kodu: "#228B22",
      sloganlar: [
        "Vücudunuza doğru yakıtı verin, performansı artırın. **Beslenmeyle değişimi başlatın.**",
        "Akıllı seçimler, kalıcı sonuçlar. **Sağlığınız tabağınızda başlar.**",
      ],
    },
    {
      ad: "Flexibility",
      renk_kodu: "#4682B4",
      sloganlar: [
        "Kaslarınızı rahatlatın, hareket özgürlüğünüzü artırın. **Bedensel akıcılığa ulaşın.**",
        "Her esneme, daha geniş bir hareket alanı. **Sınırlarınızı genişletin.**",
      ],
    },
    {
      ad: "Weight Loss",
      renk_kodu: "#8B0000",
      sloganlar: [
        "Hedefinize odaklanın, sağlıklı bir yaşama adım atın. **Hafifleyin, özgürleşin.**",
        "Her damla ter, bir adım daha ince. **Daha iyi bir sen için yola çık.**",
      ],
    },
    {
      ad: "Muscle Gain",
      renk_kodu: "#800000",
      sloganlar: [
        "Kaslarınızı besleyin, potansiyelinizi ortaya çıkarın. **Hacimli bir gelecek inşa edin.**",
        "Her idman bir yatırım, her kas bir zafer. **Güçlü dönüşüm başlasın.**",
      ],
    },
    {
      ad: "Endurance",
      renk_kodu: "#008B8B",
      sloganlar: [
        "Sınırlarınızı aşın, yorgunluğu geride bırakın. **Hiç durmadan ilerle.**",
        "Maraton ruhu, tükenmeyen enerji. **Sürekli gelişim, kesintisiz güç.**",
      ],
    },
    {
      ad: "Wellness",
      renk_kodu: "#3CB371",
      sloganlar: [
        "Beden, zihin ve ruh dengesi. **Topyekün iyi oluş hali.**",
        "Sağlıklı seçimlerle yaşam kalitenizi yükseltin. **Kendine iyi bakma sanatı.**",
      ],
    },
    {
      ad: "Mindfulness",
      renk_kodu: "#483D8B",
      sloganlar: [
        "Anı yaşayın, zihninizi sakinleştirin. **Şimdiki anın gücü.**",
        "Daha bilinçli adımlar, daha huzurlu bir yaşam. **Farkındalıkla dönüşün.**",
      ],
    },
    {
      ad: "Balance",
      renk_kodu: "#FFD700",
      sloganlar: [
        "Her hareket bir denge sanatı. **Daha sağlam adımlarla ilerle.**",
        "Beden ve zihin arasında uyum. **İçsel ve dışsal dengeyi yakala.**",
      ],
    },
    {
      ad: "Core Strength",
      renk_kodu: "#5F9EA0",
      sloganlar: [
        "Vücudunuzun merkezi, tüm gücün kaynağı. **Merkezinizi sağlamlaştırın.**",
        "Güçlü bir core, stabil bir yaşam. **Hareketlerinizi kökten güçlendirin.**",
      ],
    },
    {
      ad: "Mobility",
      renk_kodu: "#DAA520",
      sloganlar: [
        "Eklem özgürlüğü, daha iyi performans. **Sınır tanımayan hareket.**",
        "Acısız hareket, dolu dolu yaşam. **Hareket kalitenizi artırın.**",
      ],
    },
    {
      ad: "Agility",
      renk_kodu: "#FF8C00",
      sloganlar: [
        "Hızlı düşün, hızlı hareket et. **Adımların çevikleşsin.**",
        "Reaksiyon süreniz kısalsın, performansınız yükselsin. **Çevikliğinle fark yarat.**",
      ],
    },
    {
      ad: "Recovery",
      renk_kodu: "#B0C4DE",
      sloganlar: [
        "Vücudunuza hak ettiği dinlenmeyi verin. **Daha güçlü geri dönün.**",
        "Toparlanma bir süreç, iyileşme bir sanattır. **Performansınız toparlanmayla yükselsin.**",
      ],
    },
    {
      ad: "Sports Training",
      renk_kodu: "#4169E1",
      sloganlar: [
        "Branşınızda zirveye ulaşın. **Saha senin, zafer senin.**",
        "Performansını bir üst seviyeye taşı. **Şampiyonlar burada hazırlanır.**",
      ],
    },
    {
      ad: "Functional Fitness",
      renk_kodu: "#6B8E23",
      sloganlar: [
        "Günlük yaşamınıza güç katın. **Amaca yönelik antrenmanlarla yaşama hazırlan.**",
        "Hayatın kendisi bir antrenmandır. **Fonksiyonel hareketlerle güçlenin.**",
      ],
    },
    {
      ad: "Group Classes",
      renk_kodu: "#9370DB",
      sloganlar: [
        "Birlikte terleyin, birlikte başarın. **Motivasyonun gücü grupla başlar.**",
        "Enerjiyi paylaş, hedeflerine birlikte ulaş. **Grupça daha iyiyiz.**",
      ],
    },
    {
      ad: "Personal Training",
      renk_kodu: "#DC143C",
      sloganlar: [
        "Hedeflerine özel, sana özel rehberlik. **Kişiselleştirilmiş başarının anahtarı.**",
        "Uzman bir gözle, doğrudan sonuçlara. **Senin için tasarlanmış fitness.**",
      ],
    },
    {
      ad: "Online Coaching",
      renk_kodu: "#1E90FF",
      sloganlar: [
        "Nerede olursanız olun, uzman koçluğunuz yanınızda. **Fitness cebinizde.**",
        "Dijital dünyada kişisel rehberlik. **Zamandan ve mekandan bağımsız gelişim.**",
      ],
    },
    {
      ad: "Bootcamp",
      renk_kodu: "#800080",
      sloganlar: [
        "Sınırları zorla, gücünü test et. **Açık havada gerçek dönüşüm.**",
        "Yoğun antrenman, kalıcı değişim. **Cesaretinle ilerle.**",
      ],
    },
    {
      ad: "HIIT",
      renk_kodu: "#FF0000",
      sloganlar: [
        "Kısa sürede maksimum etki. **Az zamanda çok iş başarın.**",
        "Limitlerini zorla, hızla forma gir. **Yoğunluğun gücünü hisset.**",
      ],
    },
    {
      ad: "Dance Fitness",
      renk_kodu: "#FF69B4",
      sloganlar: [
        "Dans ederek forma girin, enerjinizi yükseltin. **Ritme kapıl, fitness'a tutul.**",
        "Eğlenerek terleyin, müziğin tadını çıkarın. **Dansla gelen fitlik.**",
      ],
    },
    {
      ad: "Senior Fitness",
      renk_kodu: "#A9A9A9",
      sloganlar: [
        "Daha enerjik, daha hareketli bir yaşam. **Yaşam kalitenizi artırın.**",
        "Sağlıklı yaş alın, aktif kalın. **Hayatınıza hareket katın.**",
      ],
    },
    {
      ad: "Kids Fitness",
      renk_kodu: "#ADD8E6",
      sloganlar: [
        "Oyunla öğrenin, eğlenerek büyüyün. **Sağlıklı geleceğin temelleri.**",
        "Aktif çocuklar, mutlu yarınlar. **Çocuklar için enerji ve eğlence.**",
      ],
    },
    {
      ad: "Pregnancy Fitness",
      renk_kodu: "#F08080",
      sloganlar: [
        "Sağlıklı bir hamilelik, güçlü bir doğum. **Hem kendinize hem bebeğinize yatırım yapın.**",
        "Keyifli ve zinde bir bekleyiş. **Anne ve bebek sağlığı için hareket.**",
      ],
    },
    {
      ad: "Postnatal Fitness",
      renk_kodu: "#90EE90",
      sloganlar: [
        "Doğum sonrası bedeninizi yeniden keşfedin. **Gücünüzü geri kazanın.**",
        "Yeni anneler için nazik ve etkili dönüşüm. **Kendine özen göster, yenilen.**",
      ],
    },
    {
      ad: "Adaptive Fitness",
      renk_kodu: "#808080",
      sloganlar: [
        "Her beden güçlüdür. <b>Potansiyelinizi engel tanımadan keşfedin.**",
        "Size özel çözümler, sınırsız imkanlar. **Fitness herkes içindir.**",
      ],
    },
    {
      ad: "Outdoor Training",
      renk_kodu: "#556B2F",
      sloganlar: [
        "Doğanın enerjisiyle canlanın. **Açık havada özgürce antrenman yapın.**",
        "Sınırlarınız gökyüzü, spor alanınız dünya. **Temiz havada forma girin.**",
      ],
    },
    {
      ad: "Virtual Classes",
      renk_kodu: "#48D1CC",
      sloganlar: [
        "Evden, dilediğin yerden katılım. **Sanal derslerle fitness kapınızda.**",
        "Canlı etkileşim, sanal konfor. **Tek tıkla egzersize başla.**",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black max-w-screen ">
            <div className="sticky top-0 left-0 h-28 z-10 bg-white/70 backdrop-blur-xl" />

      {/* Hero Section */}

      <section className="max-w-screen overflow-hidden h-[400px] z-20">
        {categories.map(
          (category, index) =>
            activeCategory === category.ad && (
              <div
                key={index}
                className=" h-full flex justify-between px-[10%] bg-gradient-to-r from-green-300 to-green-500"
                style={
                  {
                    //  background: `linear-gradient(135deg, ${category.renk_kodu} 0%, rgba(255, 255, 255, 0.5) 100%)`,
                  }
                }
              >
                <div className={`h-full flex flex-col justify-center`}>
                  <h1 className="text-white text-6xl font-bold  mb-6">
                    {category.ad}
                  </h1>
                  <p className="text-neutral-50 text-2xl mb-4">
                    {category.sloganlar[0]}
                  </p>
                  <p className="text-neutral-50 text-2xl mb-4">
                    {category.sloganlar[1]}
                  </p>
                </div>

                <div className="flex items-end justify-center gap-4 mb-6">
                  <div className="h-72 w-32 rounded-t-full bg-white" />
                  <div className="flex flex-col items-start gap-y-4">
                    <div className="h-32 w-72 rounded-r-full bg-white" />
                    <div className="h-32 w-64 rounded-r-full bg-white" />
                  </div>
                  <div className="h-64 w-32 rounded-tl-full bg-white" />
                </div>
              </div>
            )
        )}
      </section>
      {/* <h1 className="text-4xl font-bold  mb-6">Meet Our Trainers</h1>
          <p className="text-lg mb-8">
            Our trainers are here to help you achieve your fitness goals with
            personalized training plans and expert guidance.
          </p> */}

      {/* Filter Section */}

      {/* Trainers List Section */}

      {/* Popular Trainers Section */}
      <section className="pb-6">
        <section className="sticky z-40 top-22 px-[4%] mb-8  flex items-center justify-center bg-white text-black shadow-md">
          <div className="grid grid-cols-10 gap-x-3">
            <CategorySlider
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <CategoryFilter activeCategory={activeCategory} />
          </div>
        </section>

        <h2 className="text-3xl font-bold mb-6 container mx-auto">
          Popular Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 container mx-auto mb-3">
          {allTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-neutral-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 h-96"
            >
              <div className="flex justify-center items-center text-7xl h-40 w-40 mb-4 bg-neutral-200 rounded-full">
                s
              </div>
              <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-4 flex-1">
                {trainer.specialization}
              </p>
              <div className="flex justify-between space-x-4 items-center w-full">
                <Link
                  href={`/trainers/${trainer.id}`}
                  className="text-gray-400 hover:underline"
                >
                  View Profile
                </Link>
                <span className="text-gray-500">
                  {trainer.packages.length} Packages
                </span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-6 container mx-auto">
          Popular Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 container mx-auto mb-3">
          {allTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-neutral-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 h-96"
            >
              <div className="flex justify-center items-center text-7xl h-40 w-40 mb-4 bg-neutral-200 rounded-full">
                s
              </div>
              <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-4 flex-1">
                {trainer.specialization}
              </p>
              <div className="flex justify-between space-x-4 items-center w-full">
                <Link
                  href={`/trainers/${trainer.id}`}
                  className="text-gray-400 hover:underline"
                >
                  View Profile
                </Link>
                <span className="text-gray-500">
                  {trainer.packages.length} Packages
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Today Trainers Section */}

      {/* Pagination Section */}

      <section className="container mx-auto p-6">
        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Previous
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
