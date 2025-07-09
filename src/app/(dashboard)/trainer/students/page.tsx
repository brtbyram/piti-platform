"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

function StudentList() {
  const [appearanceShape, setAppearanceShape] = useState("one-column");

  const students = [
    {
      studentId: "60a7d5b1e0c2a8f3b2c1d4e5", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-001", // Harici kimlik doğrulama servisi ID'si
      firstName: "Ayşe",
      lastName: "Yılmaz",
      email: "ayse.yilmaz@example.com",
      phoneNumber: "+905321234567",
      dateOfBirth: "1995-03-15T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/ayse.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4eb", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-002", // Harici kimlik doğrulama servisi ID'si
      firstName: "Mehmet",
      lastName: "Demir",
      email: "sdsd",
      phoneNumber: "+905321234568",
      dateOfBirth: "1990-07-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "https://example.com/profiles/mehmet.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4f3", // Yeni öğrenci ID
      userId: "user-s-004",
      firstName: "Deniz",
      lastName: "Aslan",
      email: "deniz.aslan@example.com",
      phoneNumber: "+905064567890",
      dateOfBirth: "1998-09-01T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/deniz.jpg",
      registrationDate: "2025-01-20T14:00:00Z",
      lastLogin: "2025-07-06T10:00:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4f7", // Yeni öğrenci ID
      userId: "user-s-005",
      firstName: "Emre",
      lastName: "Şahin",
      email: "emre.sahin@example.com",
      phoneNumber: "+905335678901",
      dateOfBirth: "1985-05-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "https://example.com/profiles/emre.jpg",
      registrationDate: "2025-03-10T09:00:00Z",
      lastLogin: "2025-07-06T16:00:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4fb", // Yeni öğrenci ID
      userId: "user-s-006",
      firstName: "Zeynep",
      lastName: "Kaya",
      email: "zeynep.kaya@example.com",
      phoneNumber: "+905446789012",
      dateOfBirth: "1992-12-05T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/zeynep.jpg",
      registrationDate: "2025-02-01T10:00:00Z",
      lastLogin: "2025-07-04T12:00:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4e5", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-001", // Harici kimlik doğrulama servisi ID'si
      firstName: "Ayşe",
      lastName: "Yılmaz",
      email: "ayse.yilmaz@example.com",
      phoneNumber: "+905321234567",
      dateOfBirth: "1995-03-15T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/ayse.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4eb", // MongoDB tarafından otomatik oluşturulur veya manuel atanır
      userId: "user-s-002", // Harici kimlik doğrulama servisi ID'si
      firstName: "Mehmet",
      lastName: "Demir",
      email: "sdsd",
      phoneNumber: "+905321234568",
      dateOfBirth: "1990-07-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "https://example.com/profiles/mehmet.jpg",
      registrationDate: "2024-01-10T10:00:00Z",
      lastLogin: "2025-07-06T15:30:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4f3", // Yeni öğrenci ID
      userId: "user-s-004",
      firstName: "Deniz",
      lastName: "Aslan",
      email: "deniz.aslan@example.com",
      phoneNumber: "+905064567890",
      dateOfBirth: "1998-09-01T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/deniz.jpg",
      registrationDate: "2025-01-20T14:00:00Z",
      lastLogin: "2025-07-06T10:00:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4f7", // Yeni öğrenci ID
      userId: "user-s-005",
      firstName: "Emre",
      lastName: "Şahin",
      email: "emre.sahin@example.com",
      phoneNumber: "+905335678901",
      dateOfBirth: "1985-05-20T00:00:00Z",
      gender: "Erkek",
      profilePictureUrl: "https://example.com/profiles/emre.jpg",
      registrationDate: "2025-03-10T09:00:00Z",
      lastLogin: "2025-07-06T16:00:00Z",
      isActive: true,
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
      studentId: "60a7d5b1e0c2a8f3b2c1d4fb", // Yeni öğrenci ID
      userId: "user-s-006",
      firstName: "Zeynep",
      lastName: "Kaya",
      email: "zeynep.kaya@example.com",
      phoneNumber: "+905446789012",
      dateOfBirth: "1992-12-05T00:00:00Z",
      gender: "Kadın",
      profilePictureUrl: "https://example.com/profiles/zeynep.jpg",
      registrationDate: "2025-02-01T10:00:00Z",
      lastLogin: "2025-07-04T12:00:00Z",
      isActive: true,
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
    <div className="w-full h-full p-4 bg-gray-200 text-black">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Öğrenci Listesi</h1>
      </header>

      {/* Description Section */}
      <section>
        <p className="text-gray-700 mb-4">
          Bu sayfa, eğitmenlerin atandığı öğrencilerin listesini görüntüler. Her
          öğrenci için temel bilgiler ve kayıt tarihi gibi detaylar yer alır.
        </p>
        <p className="text-gray-700 mb-4">
          Öğrenciler, antrenörler tarafından yönetilir ve her birinin sağlık
          bilgileri, hedefleri ve ölçümleri bulunur.
        </p>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-6 flex items-center justify-between ">
        <input
          type="text"
          placeholder="Öğrenci Ara"
          className="p-2 border border-gray-300 bg-white rounded-lg flex-1 max-w-md"
        />
        <div className="flex items-center gap-4">
          <div className="flex bg-white  rounded-lg shadow-md py-2">
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

          <button className="flex items-center justify-center bg-white shadow-md p-2 rounded-lg">
            <Image
              src="/images/filter.png"
              alt="Add Student"
              width={24}
              height={24}
              className=""
            />
            <div className="ml-2">Filtrele</div>
          </button>
        </div>
      </section>

      {/* Student List Section */}
      <section
        className={clsx("grid gap-2 bg-gray-100 py-6 px-4 rounded-2xl", {
          "grid-cols-1": appearanceShape === "one-column",
          "grid-cols-4 h-[700px]": appearanceShape === "four-columns",
        })}
      >
        <section className="sticky top-0 flex items-center gap-1 px-2 w-full h-16 bg-white rounded-2xl">
          <input type="checkbox" className="mr-2" />
          <div className="grid grid-cols-8 place-content-center w-full h-16 ">
            <h3 className="flex items-center h-16 pl-2 col-span-2 border-x border-gray-300 border-r-0">
              ÖĞRENCİ ADI
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300 border-r-0">
              E-POSTA
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300 border-r-0">
              TELEFON
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300 border-r-0">
              KAYIT TARİHİ
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300 border-r-0">
              SON GİRİŞ
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300 border-r-0">
              DURUM
            </h3>
            <h3 className="flex items-center h-16 pl-2 border-x border-gray-300">
              DOĞUM TARİHİ
            </h3>
          </div>
          <div className="flex items-center h-16 w-24 pl-2 ">ACTIONS</div>
        </section>
        {students.map((student) => (
          <div
            key={student.studentId}
            className={clsx(
              "bg-gray-100 shadow-md rounded-2xl flex items-center h-full p-2 gap-1",
              {
                "hover:shadow-lg transition-shadow duration-300":
                  appearanceShape === "four-columns",
                "w-full": appearanceShape === "one-column",
                "flex-col": appearanceShape === "four-columns",
              }
            )}
          >
            <input type="checkbox" className="mr-2" />

            <div className=" w-full h-full rounded-3xl  grid grid-cols-8 place-content-center mt-3">
              <div className="flex items-center gap-x-3 text-nowrap col-span-2 border border-gray-300 border-r-0 rounded-l-xl w-full h-32">
                <div className="w-32 h-32 bg-gray-300 border-white border-2 rounded-full" />
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
              </div>

              <p className=" border border-gray-300 border-r-0 flex items-center w-full h-32">
                {student.email}
              </p>
              <p className="border border-gray-300 border-r-0 flex items-center w-full h-32">
                {student.phoneNumber}
              </p>
              <p className="border border-gray-300 border-r-0 flex items-center w-full h-32">
                {new Date(student.registrationDate).toLocaleDateString()}
              </p>
              <p className="border border-gray-300 border-r-0 flex items-center w-full h-32">
                {new Date(student.lastLogin).toLocaleDateString()}
              </p>
              <p className="border border-gray-300 border-r-0 flex items-center w-full h-32">
                {student.isActive ? "Aktif" : "Pasif"}
              </p>
              <p className="border border-gray-300 flex items-center w-full h-32">
                {new Date(student.dateOfBirth).toLocaleDateString()}
              </p>
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
      </section>
    </div>
  );
}

export default StudentList;
