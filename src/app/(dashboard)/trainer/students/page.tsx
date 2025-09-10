"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "../../../../../public/Icons";

function StudentList() {
  const [appearanceShape, setAppearanceShape] = useState("one-column");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const students = [
    {
      studentId: "60a7d5b1e0c2a8f3b2c1cd4e5", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-001", // Harici kimlik doğrulama servisi ID'si
      firstName: "Ayşe",
      lastName: "Yılmaz",
      email: "ayse.yilmaz@example.com",
      phoneNumber: "+905321234567",
      dateOfBirth: "1995-03-15T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
      level: "Beginner",
      progress: 75,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        // Bu öğrenciye atanmış antrenörlerin referansları
        {
          trainerId: "60a7d5b1e0c2a8f3b2c1d4e6", // Trainers koleksiyonundaki _id
          startDate: "2025-01-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        // İç içe belge
        medicalConditions: "Yok",
        injuries: "Sağ dizde eski menisküs sakatlığı, hafif",
        allergies: "Polen",
        medications: "Yok",
        activityLevel: "Hafif Aktif",
        dietaryRestrictions: "Laktozsuz",
        sleepPattern: "Ortalama 7 saat, düzensiz",
        stressLevel: "Orta",
        lastUpdated: "2025-06-20T10:00:00Z",
      },
      goals: [
        // İç içe dizi (alt belgeler)
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e7", // Benzersiz hedef ID'si
          goalType: "Kilo Verme",
          targetValue: 60.0,
          targetUnit: "kg",
          startDate: "2025-01-01T00:00:00Z",
          endDate: "2025-06-30T00:00:00Z",
          isAchieved: false,
          description: "6 ayda 10 kg vermek.",
          createdAt: "2025-01-01T08:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e8",
          goalType: "Dayanıklılık",
          targetValue: 5.0,
          targetUnit: "km koşu",
          startDate: "2025-05-01T00:00:00Z",
          endDate: "2025-08-31T00:00:00Z",
          isAchieved: false,
          description: "5K koşuyu 30 dakikanın altında bitirmek.",
          createdAt: "2025-05-01T10:00:00Z",
        },
      ],
      measurements: [
        // İç içe dizi (alt belgeler)
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4e9",
          measurementDate: "2025-01-01T00:00:00Z",
          weightKg: 70.0,
          heightCm: 165.0,
          bmi: 25.71,
          bodyFatPercentage: 30.5,
          muscleMassKg: 25.0,
          chestCm: 95.0,
          waistCm: 80.0,
          hipsCm: 100.0,
          armCm: 28.0,
          legCm: 55.0,
          notes: "Başlangıç ölçümleri, kilo verme hedefi için.",
        },
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4ea",
          measurementDate: "2025-04-01T00:00:00Z",
          weightKg: 67.5,
          heightCm: 165.0,
          bmi: 24.81,
          bodyFatPercentage: 28.0,
          muscleMassKg: 25.5,
          chestCm: 94.0,
          waistCm: 78.0,
          hipsCm: 98.0,
          armCm: 28.5,
          legCm: 54.5,
          notes:
            "3 aylık ilerleme. Kilo kaybı devam ediyor, kas kütlesinde artış var.",
        },
      ],
    },
    {
      studentId: "60a7d5b1e0zc2a8f3b2c1d4eb", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-002", // Harici kimlik doğrulama servisi ID'si
      firstName: "Mehmet",
      lastName: "Demir",
      email: "sdsd",
      phoneNumber: "+905321234568",
      dateOfBirth: "1990-07-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
      level: "Intermediate",
      progress: 50,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "60a7d5b1e0c2a8f3b2c1d4e6",
          startDate: "2025-01-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yok",
        injuries: "Sağ dizde eski menisküs sakatlığı, hafif",
        allergies: "Polen",
        medications: "Yok",
        activityLevel: "Hafif Aktif",
        dietaryRestrictions: "Laktozsuz",
        sleepPattern: "Ortalama 7 saat, düzensiz",
        stressLevel: "Orta",
        lastUpdated: "2025-06-20T10:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e7",
          goalType: "Kilo Verme",
          targetValue: 60.0,
          targetUnit: "kg",
          startDate: "2025-01-01T00:00:00Z",
          endDate: "2025-06-30T00:00:00Z",
          isAchieved: false,
          description: "6 ayda 10 kg vermek.",
          createdAt: "2025-01-01T08:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e8",
          goalType: "Dayanıklılık",
          targetValue: 5.0,
          targetUnit: "km koşu",
          startDate: "2025-05-01T00:00:00Z",
          endDate: "2025-08-31T00:00:00Z",
          isAchieved: false,
          description: "5K koşuyu 30 dakikanın altında bitirmek.",
          createdAt: "2025-05-01T10:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4e9",
          measurementDate: "2025-01-01T00:00:00Z",
          weightKg: 70.0,
          heightCm: 165.0,
          bmi: 25.71,
          bodyFatPercentage: 30.5,
          muscleMassKg: 25.0,
          chestCm: 95.0,
          waistCm: 80.0,
          hipsCm: 100.0,
          armCm: 28.0,
          legCm: 55.0,
          notes: "Başlangıç ölçümleri, kilo verme hedefi için.",
        },
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4ea",
          measurementDate: "2025-04-01T00:00:00Z",
          weightKg: 67.5,
          heightCm: 165.0,
          bmi: 24.81,
          bodyFatPercentage: 28.0,
          muscleMassKg: 25.5,
          chestCm: 94.0,
          waistCm: 78.0,
          hipsCm: 98.0,
          armCm: 28.5,
          legCm: 54.5,
          notes:
            "3 aylık ilerleme. Kilo kaybı devam ediyor, kas kütlesinde artış var.",
        },
      ],
    },
    {
      studentId: "60a7d5b1es0c2a8f3b2c1d4f3", // Yeni öğrenci ID
      userId: "user-s-004",
      firstName: "Deniz",
      lastName: "Aslan",
      email: "deniz.aslan@example.com",
      phoneNumber: "+905064567890",
      dateOfBirth: "1998-09-01T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-01-20T14:00:00Z",
      lastLogin: "2025-07-06T10:00:00Z",
      isActive: true,
      level: "Advanced",
      progress: 90,
      preferences: {
        notifications: { email: true, push: true, sms: false },
        theme: "dark",
      },
      assignedTrainers: [
        {
          trainerId: "t1u2v3w4-x5y6-7890-1234-567890abcdef", // Burak Özdemir
          startDate: "2025-02-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Astım (hafif)",
        injuries: "Yok",
        allergies: "Yok",
        medications: "Astım spreyi (ihtiyaç halinde)",
        activityLevel: "Sedanter",
        dietaryRestrictions: "Vejetaryen",
        sleepPattern: "Ortalama 6 saat, uykusuzluk sorunları",
        stressLevel: "Yüksek",
        lastUpdated: "2025-06-25T11:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f4",
          goalType: "Genel Sağlık ve Zindelik",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-01T00:00:00Z",
          endDate: "2025-12-31T00:00:00Z",
          isAchieved: false,
          description: "Genel kondisyonu artırmak ve daha enerjik hissetmek.",
          createdAt: "2025-01-25T09:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f5",
          goalType: "Stres Azaltma",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-15T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description: "Meditasyon ve yoga ile stres seviyesini düşürmek.",
          createdAt: "2025-02-10T10:30:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4f6",
          measurementDate: "2025-02-01T00:00:00Z",
          weightKg: 68.0,
          heightCm: 170.0,
          bmi: 23.53,
          bodyFatPercentage: 28.0,
          muscleMassKg: 24.5,
          chestCm: 90.0,
          waistCm: 75.0,
          hipsCm: 98.0,
          armCm: 27.0,
          legCm: 52.0,
          notes: "Başlangıç ölçümleri, genel iyilik hali hedefli.",
        },
      ],
    },
    {
      studentId: "60a7d5b1e0ac2a8f3b2c1d4f7", // Yeni öğrenci ID
      userId: "user-s-005",
      firstName: "Emre",
      lastName: "Şahin",
      email: "emre.sahin@example.com",
      phoneNumber: "+905335678901",
      dateOfBirth: "1985-05-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-03-10T09:00:00Z",
      lastLogin: "2025-07-06T16:00:00Z",
      isActive: true,
      level: "Beginner",
      progress: 80,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "u2v3w4x5-y6z7-8901-2345-67890abcdef0", // Cemre Ersoy
          startDate: "2025-03-15T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yüksek Tansiyon (kontrol altında)",
        injuries: "Sol omuzda kronik ağrı (hafif)",
        allergies: "Yok",
        medications: "Tansiyon ilacı",
        activityLevel: "Orta Aktif",
        dietaryRestrictions: "Düşük Tuz",
        sleepPattern: "Ortalama 7.5 saat, zaman zaman kesintili",
        stressLevel: "Orta",
        lastUpdated: "2025-07-01T09:30:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f8",
          goalType: "Denge ve Koordinasyon",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-03-15T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description: "Günlük aktivitelerde daha iyi denge sağlamak.",
          createdAt: "2025-03-12T10:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f9",
          goalType: "Postür Düzeltme",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-04-01T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description:
            "Oturma duruşunu iyileştirmek, sırt ağrılarını azaltmak.",
          createdAt: "2025-03-25T14:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4fa",
          measurementDate: "2025-03-15T00:00:00Z",
          weightKg: 85.0,
          heightCm: 175.0,
          bmi: 27.76,
          bodyFatPercentage: 22.0,
          muscleMassKg: 38.0,
          chestCm: 100.0,
          waistCm: 95.0,
          hipsCm: 102.0,
          armCm: 32.0,
          legCm: 58.0,
          notes: "Başlangıç ölçümleri, denge ve postür odaklı.",
        },
      ],
    },
    {
      studentId: "60a7d5b1ee0c2a8f3b2c1d4fb", // Yeni öğrenci ID
      userId: "user-s-006",
      firstName: "Zeynep",
      lastName: "Kaya",
      email: "zeynep.kaya@example.com",
      phoneNumber: "+905446789012",
      dateOfBirth: "1992-12-05T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-02-01T10:00:00Z",
      lastLogin: "2025-07-04T12:00:00Z",
      isActive: true,
      level: "Intermediate",
      progress: 65,
      preferences: {
        notifications: { email: false, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "u2v3w4x5-y6z7-8901-2345-67890abcdef0", // Cemre Ersoy
          startDate: "2025-02-10T00:00:00Z",
          endDate: "2025-05-10T00:00:00Z", // İlişki sona ermiş
          isActive: false,
        },
        {
          trainerId: "t1u2v3w4-x5y6-7890-1234-567890abcdef", // Burak Özdemir
          startDate: "2025-05-11T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yok",
        injuries: "Yok",
        allergies: "Yok",
        medications: "Yok",
        activityLevel: "Orta Aktif",
        dietaryRestrictions: "Bitki Bazlı",
        sleepPattern: "Ortalama 8 saat, kaliteli",
        stressLevel: "Düşük",
        lastUpdated: "2025-06-30T15:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4fc",
          goalType: "Esneklik ve Mobilite",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-10T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description:
            "Yoga ile esnekliği artırmak ve eklem hareketliliğini geliştirmek.",
          createdAt: "2025-02-05T11:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4fd",
          measurementDate: "2025-02-10T00:00:00Z",
          weightKg: 60.0,
          heightCm: 168.0,
          bmi: 21.26,
          bodyFatPercentage: 25.0,
          muscleMassKg: 26.0,
          chestCm: 88.0,
          waistCm: 70.0,
          hipsCm: 95.0,
          armCm: 26.0,
          legCm: 50.0,
          notes: "Başlangıç ölçümleri, esneklik ve mobilite hedefli.",
        },
      ],
    },
    {
      studentId: "60a7d5b1e0c2a8tf3b2c1d4e5", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-001", // Harici kimlik doğrulama servisi ID'si
      firstName: "Ayşe",
      lastName: "Yılmaz",
      email: "ayse.yilmaz@example.com",
      phoneNumber: "+905321234567",
      dateOfBirth: "1995-03-15T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
      level: "Beginner",
      progress: 75,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        // Bu öğrenciye atanmış antrenörlerin referansları
        {
          trainerId: "60a7d5b1e0c2a8f3b2c1d4e6", // Trainers koleksiyonundaki _id
          startDate: "2025-01-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        // İç içe belge
        medicalConditions: "Yok",
        injuries: "Sağ dizde eski menisküs sakatlığı, hafif",
        allergies: "Polen",
        medications: "Yok",
        activityLevel: "Hafif Aktif",
        dietaryRestrictions: "Laktozsuz",
        sleepPattern: "Ortalama 7 saat, düzensiz",
        stressLevel: "Orta",
        lastUpdated: "2025-06-20T10:00:00Z",
      },
      goals: [
        // İç içe dizi (alt belgeler)
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e7", // Benzersiz hedef ID'si
          goalType: "Kilo Verme",
          targetValue: 60.0,
          targetUnit: "kg",
          startDate: "2025-01-01T00:00:00Z",
          endDate: "2025-06-30T00:00:00Z",
          isAchieved: false,
          description: "6 ayda 10 kg vermek.",
          createdAt: "2025-01-01T08:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e8",
          goalType: "Dayanıklılık",
          targetValue: 5.0,
          targetUnit: "km koşu",
          startDate: "2025-05-01T00:00:00Z",
          endDate: "2025-08-31T00:00:00Z",
          isAchieved: false,
          description: "5K koşuyu 30 dakikanın altında bitirmek.",
          createdAt: "2025-05-01T10:00:00Z",
        },
      ],
      measurements: [
        // İç içe dizi (alt belgeler)
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4e9",
          measurementDate: "2025-01-01T00:00:00Z",
          weightKg: 70.0,
          heightCm: 165.0,
          bmi: 25.71,
          bodyFatPercentage: 30.5,
          muscleMassKg: 25.0,
          chestCm: 95.0,
          waistCm: 80.0,
          hipsCm: 100.0,
          armCm: 28.0,
          legCm: 55.0,
          notes: "Başlangıç ölçümleri, kilo verme hedefi için.",
        },
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4ea",
          measurementDate: "2025-04-01T00:00:00Z",
          weightKg: 67.5,
          heightCm: 165.0,
          bmi: 24.81,
          bodyFatPercentage: 28.0,
          muscleMassKg: 25.5,
          chestCm: 94.0,
          waistCm: 78.0,
          hipsCm: 98.0,
          armCm: 28.5,
          legCm: 54.5,
          notes:
            "3 aylık ilerleme. Kilo kaybı devam ediyor, kas kütlesinde artış var.",
        },
      ],
    },
    {
      studentId: "60a7d5b1e0c2ya8f3b2c1d4eb", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-002", // Harici kimlik doğrulama servisi ID'si
      firstName: "Mehmet",
      lastName: "Demir",
      email: "sdsd",
      phoneNumber: "+905321234568",
      dateOfBirth: "1990-07-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
      level: "Intermediate",
      progress: 50,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "60a7d5b1e0c2a8f3b2c1d4e6",
          startDate: "2025-01-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yok",
        injuries: "Sağ dizde eski menisküs sakatlığı, hafif",
        allergies: "Polen",
        medications: "Yok",
        activityLevel: "Hafif Aktif",
        dietaryRestrictions: "Laktozsuz",
        sleepPattern: "Ortalama 7 saat, düzensiz",
        stressLevel: "Orta",
        lastUpdated: "2025-06-20T10:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e7",
          goalType: "Kilo Verme",
          targetValue: 60.0,
          targetUnit: "kg",
          startDate: "2025-01-01T00:00:00Z",
          endDate: "2025-06-30T00:00:00Z",
          isAchieved: false,
          description: "6 ayda 10 kg vermek.",
          createdAt: "2025-01-01T08:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4e8",
          goalType: "Dayanıklılık",
          targetValue: 5.0,
          targetUnit: "km koşu",
          startDate: "2025-05-01T00:00:00Z",
          endDate: "2025-08-31T00:00:00Z",
          isAchieved: false,
          description: "5K koşuyu 30 dakikanın altında bitirmek.",
          createdAt: "2025-05-01T10:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4e9",
          measurementDate: "2025-01-01T00:00:00Z",
          weightKg: 70.0,
          heightCm: 165.0,
          bmi: 25.71,
          bodyFatPercentage: 30.5,
          muscleMassKg: 25.0,
          chestCm: 95.0,
          waistCm: 80.0,
          hipsCm: 100.0,
          armCm: 28.0,
          legCm: 55.0,
          notes: "Başlangıç ölçümleri, kilo verme hedefi için.",
        },
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4ea",
          measurementDate: "2025-04-01T00:00:00Z",
          weightKg: 67.5,
          heightCm: 165.0,
          bmi: 24.81,
          bodyFatPercentage: 28.0,
          muscleMassKg: 25.5,
          chestCm: 94.0,
          waistCm: 78.0,
          hipsCm: 98.0,
          armCm: 28.5,
          legCm: 54.5,
          notes:
            "3 aylık ilerleme. Kilo kaybı devam ediyor, kas kütlesinde artış var.",
        },
      ],
    },
    {
      studentId: "60a7d5bu1e0c2a8f3b2c1d4f3", // Yeni öğrenci ID
      userId: "user-s-004",
      firstName: "Deniz",
      lastName: "Aslan",
      email: "deniz.aslan@example.com",
      phoneNumber: "+905064567890",
      dateOfBirth: "1998-09-01T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-01-20T14:00:00Z",
      lastLogin: "2025-07-06T10:00:00Z",
      isActive: true,
      level: "Advanced",
      progress: 90,
      preferences: {
        notifications: { email: true, push: true, sms: false },
        theme: "dark",
      },
      assignedTrainers: [
        {
          trainerId: "t1u2v3w4-x5y6-7890-1234-567890abcdef", // Burak Özdemir
          startDate: "2025-02-01T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Astım (hafif)",
        injuries: "Yok",
        allergies: "Yok",
        medications: "Astım spreyi (ihtiyaç halinde)",
        activityLevel: "Sedanter",
        dietaryRestrictions: "Vejetaryen",
        sleepPattern: "Ortalama 6 saat, uykusuzluk sorunları",
        stressLevel: "Yüksek",
        lastUpdated: "2025-06-25T11:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f4",
          goalType: "Genel Sağlık ve Zindelik",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-01T00:00:00Z",
          endDate: "2025-12-31T00:00:00Z",
          isAchieved: false,
          description: "Genel kondisyonu artırmak ve daha enerjik hissetmek.",
          createdAt: "2025-01-25T09:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f5",
          goalType: "Stres Azaltma",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-15T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description: "Meditasyon ve yoga ile stres seviyesini düşürmek.",
          createdAt: "2025-02-10T10:30:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4f6",
          measurementDate: "2025-02-01T00:00:00Z",
          weightKg: 68.0,
          heightCm: 170.0,
          bmi: 23.53,
          bodyFatPercentage: 28.0,
          muscleMassKg: 24.5,
          chestCm: 90.0,
          waistCm: 75.0,
          hipsCm: 98.0,
          armCm: 27.0,
          legCm: 52.0,
          notes: "Başlangıç ölçümleri, genel iyilik hali hedefli.",
        },
      ],
    },
    {
      studentId: "60a7ıd5b1e0c2a8f3b2c1d4f7", // Yeni öğrenci ID
      userId: "user-s-005",
      firstName: "Emre",
      lastName: "Şahin",
      email: "emre.sahin@example.com",
      phoneNumber: "+905335678901",
      dateOfBirth: "1985-05-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-03-10T09:00:00Z",
      lastLogin: "2025-07-06T16:00:00Z",
      isActive: true,
      level: "Beginner",
      progress: 80,
      preferences: {
        notifications: { email: true, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "u2v3w4x5-y6z7-8901-2345-67890abcdef0", // Cemre Ersoy
          startDate: "2025-03-15T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yüksek Tansiyon (kontrol altında)",
        injuries: "Sol omuzda kronik ağrı (hafif)",
        allergies: "Yok",
        medications: "Tansiyon ilacı",
        activityLevel: "Orta Aktif",
        dietaryRestrictions: "Düşük Tuz",
        sleepPattern: "Ortalama 7.5 saat, zaman zaman kesintili",
        stressLevel: "Orta",
        lastUpdated: "2025-07-01T09:30:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f8",
          goalType: "Denge ve Koordinasyon",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-03-15T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description: "Günlük aktivitelerde daha iyi denge sağlamak.",
          createdAt: "2025-03-12T10:00:00Z",
        },
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4f9",
          goalType: "Postür Düzeltme",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-04-01T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description:
            "Oturma duruşunu iyileştirmek, sırt ağrılarını azaltmak.",
          createdAt: "2025-03-25T14:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4fa",
          measurementDate: "2025-03-15T00:00:00Z",
          weightKg: 85.0,
          heightCm: 175.0,
          bmi: 27.76,
          bodyFatPercentage: 22.0,
          muscleMassKg: 38.0,
          chestCm: 100.0,
          waistCm: 95.0,
          hipsCm: 102.0,
          armCm: 32.0,
          legCm: 58.0,
          notes: "Başlangıç ölçümleri, denge ve postür odaklı.",
        },
      ],
    },
    {
      studentId: "60a7d5b1e0oc2a8f3b2c1d4fb", // Yeni öğrenci ID
      userId: "user-s-006",
      firstName: "Zeynep",
      lastName: "Kaya",
      email: "zeynep.kaya@example.com",
      phoneNumber: "+905446789012",
      dateOfBirth: "1992-12-05T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "/images/IMG_20190507_232453_781.jpg",
      registrationDate: "2025-02-01T10:00:00Z",
      lastLogin: "2025-07-04T12:00:00Z",
      isActive: true,
      level: "Intermediate",
      progress: 65,
      preferences: {
        notifications: { email: false, push: true },
        theme: "light",
      },
      assignedTrainers: [
        {
          trainerId: "u2v3w4x5-y6z7-8901-2345-67890abcdef0", // Cemre Ersoy
          startDate: "2025-02-10T00:00:00Z",
          endDate: "2025-05-10T00:00:00Z", // İlişki sona ermiş
          isActive: false,
        },
        {
          trainerId: "t1u2v3w4-x5y6-7890-1234-567890abcdef", // Burak Özdemir
          startDate: "2025-05-11T00:00:00Z",
          endDate: null,
          isActive: true,
        },
      ],
      healthInfo: {
        medicalConditions: "Yok",
        injuries: "Yok",
        allergies: "Yok",
        medications: "Yok",
        activityLevel: "Orta Aktif",
        dietaryRestrictions: "Bitki Bazlı",
        sleepPattern: "Ortalama 8 saat, kaliteli",
        stressLevel: "Düşük",
        lastUpdated: "2025-06-30T15:00:00Z",
      },
      goals: [
        {
          goalId: "60a7d5b1e0c2a8f3b2c1d4fc",
          goalType: "Esneklik ve Mobilite",
          targetValue: null,
          targetUnit: null,
          startDate: "2025-02-10T00:00:00Z",
          endDate: null,
          isAchieved: false,
          description:
            "Yoga ile esnekliği artırmak ve eklem hareketliliğini geliştirmek.",
          createdAt: "2025-02-05T11:00:00Z",
        },
      ],
      measurements: [
        {
          measurementId: "60a7d5b1e0c2a8f3b2c1d4fd",
          measurementDate: "2025-02-10T00:00:00Z",
          weightKg: 60.0,
          heightCm: 168.0,
          bmi: 21.26,
          bodyFatPercentage: 25.0,
          muscleMassKg: 26.0,
          chestCm: 88.0,
          waistCm: 70.0,
          hipsCm: 95.0,
          armCm: 26.0,
          legCm: 50.0,
          notes: "Başlangıç ölçümleri, esneklik ve mobilite hedefli.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-full max-w-screen bg-gray-200 text-black">
      {/* Header Section */}
      <div className=" bg-[#27ae60] h-72 flex max-md:flex-col items-center justify-between text-center px-4 lg:px-14 py-8 min-h-max overflow-x-scroll">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            Try the application
          </h1>
          <p className="text-gray-300">
            To see what the app offers you, download the app try the app
          </p>
          <button className="bg-black text-white font-semibold text-lg px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
            Download APP
          </button>
        </div>
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
          className=" flex justify-center items-center p-3"
        >
          {["1", "2", "3", "4", "5"].map((item) => (
            <div
              key={item}
              className={clsx(
                "border rounded-full -mx-3  flex items-center justify-center",
                item === "1"
                  ? "z-10 h-20 w-20 bg-gray-300 opacity-35"
                  : item === "2"
                  ? "z-20 h-24 w-24 bg-gray-200"
                  : item === "3"
                  ? "z-30 h-28 w-28 bg-white "
                  : item === "4"
                  ? " z-20 h-24 w-24 bg-gray-200"
                  : item === "5"
                  ? "z-10 h-20 w-20 bg-gray-300 opacity-35"
                  : ""
              )}
            >
              <h2 className="text-2xl font-semibold ">{item}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        {/* Title and Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-2 my-6 md:flex-row max-md:text-center">
          <div className="space-y-2 p-0 pb-3 flex-1">
            <h1 className="text-4xl font-semibold px-4">Students</h1>
          </div>
        </div>

        {/* Summary Section */}
        <div className="border border-gray-300 rounded-2xl flex max-md:flex-col items-center bg-white mb-6">
          <div className="flex items-center justify-center max-md:w-full gap-2 text-2xl border-b md:border-r border-gray-300 p-10">
            <Image
              src={"/images/calendar.png"}
              width={36}
              height={36}
              alt="calendar"
            />
            <div>Today</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 place-content-center font-semibold w-full">
            <div className="p-4">
              <h1 className="text-gray-500">Total Students </h1>
              <h1 className="text-2xl ">5</h1>
            </div>
            <div className="border-l border-gray-300 p-4 ">
              <h1 className="text-gray-500">Total Cost</h1>
              <h1 className="text-2xl">100$</h1>
            </div>
            <div className="border-l border-gray-300 p-4">
              <h1 className="text-gray-500">Total Active</h1>
              <h1 className="text-2xl ">5</h1>
            </div>
            <div className="border-l border-gray-300 p-4">
              <h1 className="text-gray-500">Total Inactive</h1>
              <h1 className="text-2xl">0</h1>
            </div>
            <div className="border-l border-gray-300 p-4">
              <h1 className="text-gray-500">Total Cancelled</h1>
              <h1 className="text-2xl">0</h1>
            </div>
          </div>
        </div>

        {/* Status Filter Section */}
        <section>
          <nav className="flex items-center justify-start overflow-scroll mb-6 text-gray-500 border-b border-gray-300">
            {[
              "All",
              "Active",
              "Inactive",
              "Cancelled",
              "Archived",
              "Deleted",
              "Pending",
              "Free",
            ].map((status, index) => (
              <button
                key={index}
                onClick={() => setSelectedStatus(status)}
                className={clsx(
                  "px-4 py-2",
                  status === selectedStatus
                    ? "border-b-2 !border-[#27ae60] text-[#27ae60]"
                    : "",
                  "hover:bg-gray-200 transition-colors "
                )}
              >
                {status}
              </button>
            ))}
          </nav>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-6 flex max-md:flex-col items-start gap-2 justify-between">
          <div className="p-2 border border-gray-300 bg-white rounded-lg max-md:w-full max-w-lg flex-1 shadow-md relative flex items-center">
            <Icon name="search" size={20} />
            <input
              type="text"
              placeholder="Search student"
              className="pl-2 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 max-md:w-full">
            <div className="hidden md:flex bg-white min-w-max rounded-lg shadow-md py-2">
              <button
                onClick={() => setAppearanceShape("one-column")}
                className={clsx(
                  "border-r-1 border-black",
                  appearanceShape === "one-column"
                    ? " text-white"
                    : " text-black transition-colors"
                )}
              >
                <Image
                  src="/images/list.png"
                  alt="One Column View"
                  width={24}
                  height={24}
                  className="inline-block mx-2"
                />
              </button>
              <button
                onClick={() => setAppearanceShape("four-columns")}
                className={clsx(
                  "rounded-lg",
                  appearanceShape === "four-columns"
                    ? " text-white"
                    : " text-blacktransition-colors"
                )}
              >
                <Image
                  src="/images/squares.png"
                  alt="four Column View"
                  width={24}
                  height={24}
                  className="inline-block mx-2"
                />
              </button>
            </div>

            <button className="flex items-center justify-center min-w-max bg-white shadow-md p-2 px-4 rounded-lg">
              <Image
                src="/images/filter.png"
                alt="Add Student"
                width={24}
                height={24}
                className=""
              />
              <div className="ml-2">Filter</div>
            </button>
            <button className="bg-black text-white px-6 p-2 shadow-md rounded-lg hover:bg-blue-600 transition duration-200 min-w-min w-full">
              <span className="text-lg"> + </span> Add New
            </button>
          </div>
        </section>

        {/* Student List Section */}
        <section
          className={clsx("gap-2 grid h-full bg-gray-100 py-6 rounded-2xl", {
            "grid-cols-1": appearanceShape === "one-column",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ":
              appearanceShape === "four-columns",
          })}
        >
          {/* Sticky Header for Student List */}
          <section
            className={clsx(
              "sticky max-lg:hidden top-0 flex items-center gap-1 px-2 w-full h-16 bg-white rounded-2xl shadow-md font-semibold",
              {
                hidden: appearanceShape === "four-columns",
                "": appearanceShape === "one-column",
              }
            )}
          >
            <input type="checkbox" className="mr-2 w-10" />
            <div className="grid grid-cols-8 place-content-center w-full h-16 ">
              <h3 className="flex items-center justify-center h-16 pl-2 col-span-2 border-x border-gray-300 border-r-0">
                Name
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300 border-r-0">
                Level
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300 border-r-0">
                Last Session
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300 border-r-0">
                Progress
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300 border-r-0">
                Goal
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300 border-r-0">
                STATUS
              </h3>
              <h3 className="flex items-center justify-center h-16 pl-2 border-x border-gray-300">
                Injury Risk
              </h3>
            </div>
            <div className="flex items-center justify-center h-16 w-24 pl-2 ">
              ACTIONS
            </div>
          </section>

          {students.map((student) => (
            <div
              key={student.studentId}
              className={clsx(
                "bg-gray-100 shadow-md flex items-center h-full p-2 gap-1 md:w-full",
                {
                  "hover:shadow-lg transition-shadow duration-300 flex-col":
                    appearanceShape === "four-columns",
                  "": appearanceShape === "one-column",
                }
              )}
            >
              <input type="checkbox" className="mr-2 w-10" />

              <div
                className={clsx("w-full h-full mt-3", {
                  "grid place-content-center grid-cols-8":
                    appearanceShape === "one-column",
                  "flex flex-col": appearanceShape === "four-columns",
                })}
              >
                <div className="flex items-center gap-x-3 text-nowrap col-span-2 w-full">
                  <div className="min-w-12 h-12 bg-gray-300 border-white border-2 rounded-full overflow-hidden">
                    <Image
                      src={student.profilePictureUrl}
                      width={160}
                      height={160}
                      alt="profile"
                      className="w-12 h-12"
                    />
                  </div>
                  <h2>
                    {student.firstName} {student.lastName}
                  </h2>
                </div>
                <p className="flex items-center justify-center w-full overflow-hidden">
                  {student.level || "Beginner"}
                </p>
                <p className="flex items-center justify-center w-full">
                  {new Date(student.lastLogin).toLocaleDateString()}
                </p>
                <div className="flex items-center justify-center w-full">
                  {student.progress ? `${student.progress}%` : "0%"}
                </div>
                <div className="flex items-center justify-center w-full">
                  {student.goals.length > 0
                    ? student.goals[0].goalType
                    : "No Goals"}
                </div>
                <div
                  className={clsx(
                    "flex items-center  py-1 justify-center w-full text-xl rounded-full",
                    {
                      "bg-[#27ae60]/20 text-[#10cc5e]": student.isActive,
                      "": !student.isActive,
                    }
                  )}
                >
                  {student.isActive ? "Active" : "Inactive"}
                </div>
                <div className="flex items-center justify-center w-full">
                  {new Date(student.dateOfBirth).toLocaleDateString()}
                </div>
              </div>

              {/* action buttons */}
              <div className="flex flex-col justify-center gap-2 h-full w-24">
                <button className=" flex items-center justify-center">
                  <span className="h-0.5 w-0.5 bg-black"></span>
                </button>
                <button className=" flex items-center justify-center">
                  <span className="h-0.5 w-0.5 bg-black"></span>
                </button>
                <button className=" flex items-center justify-center">
                  <span className="h-0.5 w-0.5 bg-black"></span>
                </button>
              </div>
            </div>
          ))}

          {/* Pagination Section */}
          <section className="flex max-md:flex-col justify-between items-center h-full max-w-screen border-t-3 border-gray-300 py-3 my-4">
            <div className="flex items-center gap-4">
              <div>Items per page</div>
              <div className="flex items-center gap-2">
                <select className="p-2 border border-gray-300 rounded-lg">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>Previous</div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                  1
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-200 transition-colors">
                  4
                </button>
              </div>
              <div>Next</div>
            </div>
          </section>
        </section>
      </div>

      {/* Client Preview Modal */}
      <div className="fixed hidden inset-0 bg-black/70 items-center justify-center z-50">
        <div className="bg-white absolute max-h-screen overflow-y-auto right-4 top-4 bottom-4 rounded-2xl p-6 w-11/12 max-w-xl shadow-lg">

          <header className="flex items-center justify-between gap-4 relative">
            <h2 className="text-2xl flex-1">Client Preview</h2>
            <button className="p-1 px-2 flex items-center justify-center gap-1 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-200 transition duration-200">
              <div>
                <Icon name="edit" size={20} />{" "}
              </div>
              <div>Edit</div>
            </button>
            <button className="">
              <Icon name="close" size={24} />
            </button>
          </header>

          <main className="flex flex-col gap-4 mt-4">
            {/* Profile Section */}
            <section className="min-h-72 rounded-2xl overflow-hidden relative flex flex-col items-center justify-end border border-gray-100">
              <Image
                src={"/images/IMG_20190507_232453_781.jpg"}
                width={1600}
                height={1600}
                alt="profile"
                className="absolute h-full w-full object-cover blur-lg contrast-50"
              />

              <div className="z-20 text-center text-white flex flex-col items-center justify-center gap-1 p-4 py-10">
                <Image
                  src={"/images/IMG_20190507_232453_781.jpg"}
                  width={160}
                  height={160}
                  alt="profile"
                  className="z-20 w-20 h-20 rounded-full"
                />
                <h2 className="text-2xl">Berat Murathan Bayram</h2>
                <p className="text-lg">Male | 27 yo | Beginner</p>
              </div>
              <div className="bg-gray-50 w-full grid grid-cols-2 px-4 z-10 text-sm">
                <div className="flex items-center justify-start h-12 z-10">
                  <div className="p-1.5 bg-white rounded-full shadow-md">
                    <Icon name="calendar" size={12} />
                  </div>
                  <span className="ml-2">+90 (534) 927 52 61</span>
                </div>
                <div className="flex items-center justify-start h-12 z-10">
                  <div className="p-1.5 bg-white rounded-full shadow-md">
                    <Icon name="calendar" size={12} />
                  </div>
                  <span className="ml-2">brtbyram.61@gmail.com</span>
                </div>
              </div>
            </section>

            {/* Health Info Section */}
            <section className="space-y-4">
              <h2 className="text-xl">Progress Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl text-black border border-gray-100">
                <div className="px-4 my-4">
                  <h4 className="text-xs text-gray-500">Goal</h4>
                  <p className="mt-2">Core Stability</p>
                </div>
                <div className="px-4 my-4 border-l border-gray-100">
                  <h4 className="text-xs text-gray-500">Injury Risk</h4>
                  <p className="text-yellow-600 mt-2">Medium</p>
                </div>
                <div className="px-4 my-4 border-l border-gray-100">
                  <h4 className="text-xs text-gray-500">Strength</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="">Improved </p>
                    <div>
                      <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-full">
                        <div className="p-1 border rounded-full -rotate-90">
                          <Icon name="arrowRight" size={6} />
                        </div>
                        <span className="text-sm">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl text-black border border-gray-100 p-4">
                <h4 className="mb-2">Weekly Target</h4>
                <div className="w-full h-6 bg-green-100 relative rounded-2xl overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-2xl"
                    style={{ width: "75%" }}
                  ></div>
                  <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                    <span className="text-xs text-white">75% Completed</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Goals Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Season History</h2>
                <button className="text-sm text-green-700">See more</button>
              </div>
              <div className="flex justify-between p-4 rounded-2xl text-gray-500 border border-gray-100">
                <div>
                  <h4 className="text-black">Cardio</h4>
                  <p className="">Focus on flexibility and strength</p>
                  <div className="text-xs mt-4">14 Nov 2025, 03:00 PM</div>
                </div>
                <div className="flex items-center justify-center bg-green-100 text-green-600 rounded-full px-3 py-1 max-h-max">
                  On Schedule
                </div>
              </div>

              <div className="flex justify-between p-4 rounded-2xl text-gray-500 border border-gray-100">
                <div>
                  <h4 className="text-black">Strength</h4>
                  <p className="">Focus on building muscle and endurance</p>
                  <div className="text-xs mt-4">20 Nov 2025, 05:00 PM</div>
                </div>
                <div className="flex items-center justify-center bg-red-100 text-red-600 rounded-full px-3 py-1 max-h-max">
                  Behind Schedule
                </div>
              </div>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
}

export default StudentList;
