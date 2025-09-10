"use client";

import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Community() {
  const [activeTab, setActiveTab] = useState("feed");

  // dummyData.js - Piti Topluluk Sayfası İçin Örnek Veriler

  // --- Kullanıcı ve Koç Profilleri ---
  // Gerçek uygulamada bu veriler genellikle bir API'den gelir.
  const sampleUsers = [
    {
      id: "user_ayse_yilmaz",
      name: "Ayşe Yılmaz",
      username: "ayse.fit",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Fitness yolculuğunda yeni hedefler peşinde! 🏋️‍♀️ Koçum Burak Yılmaz ile harika ilerliyorum.",
      followersCount: 185,
      followingCount: 92,
      isCoach: false,
      coachId: "coach_burak_yilmaz",
      totalWorkouts: 58,
      totalHoursTrained: 65,
      lastActive: new Date("2025-07-27T19:05:00Z"),
      badges: ["Başlangıç Seviyesi", "50 Antrenman"],
    },
    {
      id: "user_can_demir",
      name: "Can Demir",
      username: "candemir_run",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "Maraton koşucusu ve güç antrenmanı tutkunu. Her gün daha iyiye!",
      followersCount: 410,
      followingCount: 155,
      isCoach: false,
      coachId: "coach_elif_aksoy",
      totalWorkouts: 95,
      totalHoursTrained: 110,
      lastActive: new Date("2025-07-27T18:40:00Z"),
      badges: ["10K Koşucu", "Kas Canavarı"],
    },
    {
      id: "coach_burak_yilmaz",
      name: "Burak Yılmaz",
      username: "coach_burak",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/50.jpg",
      bio: "7 yıllık tecrübeyle kişisel antrenör ve beslenme danışmanı. Gücünü keşfet!",
      followersCount: 1850,
      followingCount: 75,
      isCoach: true,
      specialties: ["Güç Antrenmanı", "Kilo Verme", "Vücut Geliştirme"],
      experienceYears: 7,
      clientCount: 52,
      averageRating: 4.9,
      testimonials: [
        {
          student: "user_ayse_yilmaz",
          text: "Burak Hocam sayesinde 10kg verdim ve kendimi hiç bu kadar iyi hissetmemiştim!",
        },
        {
          student: "user_zeynep_kaya",
          text: "Programları kişiye özel ve çok motive edici. Kesinlikle tavsiye ederim.",
        },
      ],
      pricingInfo: "Aylık paketler ₺800'den başlıyor.",
      availability: "Hafta içi 09:00 - 18:00",
      lastActive: new Date("2025-07-27T19:15:00Z"),
    },
    {
      id: "coach_elif_aksoy",
      name: "Elif Aksoy",
      username: "elif.coach",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/40.jpg",
      bio: "Yoga eğitmeni ve bütünsel yaşam koçu. Zihin ve beden uyumu için buradayım.",
      followersCount: 1300,
      followingCount: 40,
      isCoach: true,
      specialties: ["Yoga", "Pilates", "Esneklik", "Zihinsel Sağlık"],
      experienceYears: 5,
      clientCount: 38,
      averageRating: 4.8,
      testimonials: [
        {
          student: "user_can_demir",
          text: "Elif Hocam ile yoga dersleri sayesinde esnekliğim çok arttı, koşu performansımı bile etkiledi.",
        },
        {
          student: "user_gamze_soylu",
          text: "Harika bir enerjiye sahip. Her ders sonrası kendimi yenilenmiş hissediyorum.",
        },
      ],
      pricingInfo: "Grup dersleri ₺150/saat, Özel dersler ₺500/saat.",
      availability: "Hafta içi akşamlar ve Cumartesi",
      lastActive: new Date("2025-07-27T17:50:00Z"),
    },
    {
      id: "user_zeynep_kaya",
      name: "Zeynep Kaya",
      username: "zeynep.healthy",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/70.jpg",
      bio: "Fitnessa yeni başladım ve çok heyecanlıyım! Her gün yeni bir şeyler öğreniyorum.",
      followersCount: 95,
      followingCount: 65,
      isCoach: false,
      coachId: "coach_burak_yilmaz",
      totalWorkouts: 22,
      totalHoursTrained: 28,
      lastActive: new Date("2025-07-26T15:00:00Z"),
      badges: ["İlk Adım", "10 Antrenman"],
    },
    {
      id: "user_emre_celik",
      name: "Emre Çelik",
      username: "emre.crossfit",
      profilePictureUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "CrossFit aşığı, yeni rekorlar peşinde. Push yourself!",
      followersCount: 520,
      followingCount: 180,
      isCoach: false,
      coachId: "coach_burak_yilmaz",
      totalWorkouts: 125,
      totalHoursTrained: 140,
      lastActive: new Date("2025-07-27T17:00:00Z"),
      badges: ["CrossFit Canavarı", "100 Antrenman"],
    },
    {
      id: "user_gamze_soylu",
      name: "Gamze Soylu",
      username: "gamze.fitlife",
      profilePictureUrl: "https://randomuser.me/api/portraits/women/60.jpg",
      bio: "Daha sağlıklı bir yaşam için Piti ile yol alıyorum. 🍏",
      followersCount: 110,
      followingCount: 70,
      isCoach: false,
      coachId: "coach_elif_aksoy",
      totalWorkouts: 35,
      totalHoursTrained: 40,
      lastActive: new Date("2025-07-27T12:00:00Z"),
      badges: ["Sağlıklı Beslenme"],
    },
  ];

  // Mevcut kullanıcıyı belirtin (Bu örnekte Ayşe Yılmaz'ı varsayalım)
  const currentUser = sampleUsers[0]; // Ayşe Yılmaz

  // --- "Feed" Sekmesi Verileri ---
  const samplePosts = [
    {
      id: "post_001",
      author: sampleUsers[0], // Ayşe Yılmaz
      type: "text",
      content:
        "Bugünkü bacak antrenmanı yakıcıydı ama harika hissettiriyor! Koçum Burak Yılmaz’a teşekkürler. 💪 #bacakgünü #fitnessmotivasyonu #piti",
      likesCount: 25,
      commentsCount: 3,
      createdAt: new Date("2025-07-27T18:00:00Z"),
      isLikedByCurrentUser: false,
    },
    {
      id: "post_002",
      author: sampleUsers[2], // Koç Burak Yılmaz
      type: "image",
      content:
        "Yeni başlayanlar için 5 etkili kardiyo hareketi. Detaylar Piti blogunda! Bağlantı profilde. #kardiyo #fitnessipuçları #sağlıklıyaşam",
      imageUrl: "https://picsum.photos/600/400?random=1",
      likesCount: 120,
      commentsCount: 15,
      createdAt: new Date("2025-07-27T17:30:00Z"),
      isLikedByCurrentUser: true,
    },
    {
      id: "post_003",
      author: sampleUsers[1], // Can Demir
      type: "workout_summary",
      content:
        "Sabah koşusu tamamlandı! 10k, 55 dakika. Yeni bir kişisel rekor! 🏃‍♂️💨 #maraton #koşu #pr",
      workoutSummary: {
        workoutId: "wk_run_10k_001",
        workoutTitle: "10K Sabah Koşusu",
        durationMinutes: 55,
        caloriesBurned: 700,
      },
      likesCount: 78,
      commentsCount: 8,
      createdAt: new Date("2025-07-27T16:45:00Z"),
      isLikedByCurrentUser: false,
    },
    {
      id: "post_004",
      author: sampleUsers[3], // Koç Elif Aksoy
      type: "image",
      content:
        "Güne esneme ve nefes egzersizleriyle başlamanın huzuru... Siz de denemelisiniz! #yoga #esneme #motivasyon",
      imageUrl: "https://picsum.photos/600/400?random=2",
      likesCount: 90,
      commentsCount: 10,
      createdAt: new Date("2025-07-27T15:00:00Z"),
      isLikedByCurrentUser: false,
    },
    {
      id: "post_005",
      author: sampleUsers[4], // Zeynep Kaya
      type: "milestone",
      content:
        "Piti ile 3 ayda 5 kilo verdim! Koçum Burak Yılmaz’a ve kendime teşekkürler! Hedefime bir adım daha yakınım! 🎉 #kiloverme #başarı #piti",
      milestone: {
        type: "weight_loss",
        description: "5 kg kilo kaybı",
        value: 5,
      },
      likesCount: 50,
      commentsCount: 5,
      createdAt: new Date("2025-07-26T10:00:00Z"),
      isLikedByCurrentUser: false,
    },
    {
      id: "post_006",
      author: sampleUsers[5], // Emre Çelik
      type: "text",
      content:
        "Bugünkü CrossFit antrenmanı tam bir canavardı! 🔥 Yeni bir Clean & Jerk PR geldi! #crossfit #pr #güç",
      likesCount: 65,
      commentsCount: 7,
      createdAt: new Date("2025-07-26T19:30:00Z"),
      isLikedByCurrentUser: false,
    },
    {
      id: "post_007",
      author: sampleUsers[2], // Koç Burak Yılmaz
      type: "video",
      content:
        "Formunu geliştirmek mi istiyorsun? İşte sana squat için 3 temel ipucu! (Video) #squat #form #antrenmanipucu",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Örnek YouTube video URL'si
      likesCount: 150,
      commentsCount: 20,
      createdAt: new Date("2025-07-25T11:00:00Z"),
      isLikedByCurrentUser: false,
    },
  ];

  const sampleComments = [
    {
      id: "comment_001_p1",
      postId: "post_001",
      author: sampleUsers[2], // Koç Burak Yılmaz
      content:
        "Tebrikler Ayşe! Çok iyi iş çıkardın, her geçen gün daha da güçleniyorsun!",
      createdAt: new Date("2025-07-27T18:05:00Z"),
    },
    {
      id: "comment_002_p1",
      postId: "post_001",
      author: sampleUsers[1], // Can Demir
      content: "Vay be Ayşe, helal olsun! 💪",
      createdAt: new Date("2025-07-27T18:10:00Z"),
    },
    {
      id: "comment_003_p1",
      postId: "post_001",
      author: sampleUsers[4], // Zeynep Kaya
      content: "Süper motivasyon! Ben de bugün bacak günü yapacağım.",
      createdAt: new Date("2025-07-27T18:15:00Z"),
    },
    {
      id: "comment_001_p3",
      postId: "post_003",
      author: sampleUsers[3], // Koç Elif Aksoy
      content: "Harika bir koşuydu Can! Tebrikler PR için!",
      createdAt: new Date("2025-07-27T17:00:00Z"),
    },
    {
      id: "comment_002_p3",
      postId: "post_003",
      author: sampleUsers[5], // Emre Çelik
      content: "Tebrikler Can! Çok iyi süre!",
      createdAt: new Date("2025-07-27T17:10:00Z"),
    },
  ];

  // --- "Sohbetler" Sekmesi Verileri ---
  const sampleChatRooms = [
    {
      id: "chat_room_ayse_burak",
      name: "Koç Burak Yılmaz ile Sohbet", // Birebir sohbetlerde isim dinamik olarak belirlenir
      participants: [sampleUsers[0], sampleUsers[2]], // Ayşe ve Koç Burak
      isGroupChat: false,
      lastMessage: {
        id: "msg_005",
        sender: sampleUsers[2],
        chatRoomId: "chat_room_ayse_burak",
        content: "Antrenman sonrası esnemeleri unutma. 💪",
        timestamp: new Date("2025-07-27T18:15:00Z"),
        isRead: false, // Ayşe için okunmamış
      },
      unreadMessagesCount: 1, // Ayşe için 1 okunmamış mesaj
    },
    {
      id: "chat_room_maraton_grubu",
      name: "Piti Maraton Grubu",
      participants: [
        sampleUsers[1],
        sampleUsers[3],
        sampleUsers[4],
        sampleUsers[5],
      ], // Can, Elif, Zeynep, Emre
      isGroupChat: true,
      lastMessage: {
        id: "msg_004",
        sender: sampleUsers[1],
        chatRoomId: "chat_room_maraton_grubu",
        content: "Yarın sabahki koşu için hazır mısınız? Hava güzel olacak!",
        timestamp: new Date("2025-07-27T19:00:00Z"),
        isRead: true,
      },
      unreadMessagesCount: 0,
    },
    {
      id: "chat_room_elif_gamze",
      name: "Koç Elif Aksoy ile Sohbet",
      participants: [sampleUsers[6], sampleUsers[3]], // Gamze ve Koç Elif
      isGroupChat: false,
      lastMessage: {
        id: "msg_003",
        sender: sampleUsers[6],
        chatRoomId: "chat_room_elif_gamze",
        content: "Bugünkü yoga harikaydı koçum! 😊",
        timestamp: new Date("2025-07-27T12:00:00Z"),
        isRead: true,
      },
      unreadMessagesCount: 0,
    },
    {
      id: "chat_room_can_elif",
      name: "Koç Elif Aksoy ile Sohbet",
      participants: [sampleUsers[1], sampleUsers[3]], // Can ve Koç Elif
      isGroupChat: false,
      lastMessage: {
        id: "msg_002",
        sender: sampleUsers[3],
        chatRoomId: "chat_room_can_elif",
        content: "Bugünkü esneme hareketlerini denedin mi?",
        timestamp: new Date("2025-07-26T14:30:00Z"),
        isRead: true,
      },
      unreadMessagesCount: 0,
    },
    {
      id: "chat_room_emre_burak",
      name: "Koç Burak Yılmaz ile Sohbet",
      participants: [sampleUsers[5], sampleUsers[2]], // Emre ve Koç Burak
      isGroupChat: false,
      lastMessage: {
        id: "msg_001",
        sender: sampleUsers[5],
        chatRoomId: "chat_room_emre_burak",
        content: "Antrenman planı için teşekkürler koç!",
        timestamp: new Date("2025-07-26T20:00:00Z"),
        isRead: true,
      },
      unreadMessagesCount: 0,
    },
  ];

  // Sohbet Odalarına Ait Mesaj Geçmişleri (Örnek)
  const sampleChatMessages = {
    chat_room_ayse_burak: [
      {
        id: "msg_001_ayse",
        sender: sampleUsers[2],
        content: "Merhaba Ayşe, bugünkü bacak antrenmanını tamamladın mı?",
        timestamp: new Date("2025-07-27T17:50:00Z"),
        isRead: true,
      },
      {
        id: "msg_002_ayse",
        sender: sampleUsers[0],
        content: "Merhaba Koç Burak! Evet, az önce bitirdim. Çok etkiliydi!",
        timestamp: new Date("2025-07-27T18:00:00Z"),
        isRead: true,
      },
      {
        id: "msg_003_ayse",
        sender: sampleUsers[2],
        content: "Harika! Antrenman sonrası esnemeleri unutma. 💪",
        timestamp: new Date("2025-07-27T18:15:00Z"),
        isRead: false,
      },
    ],
    chat_room_maraton_grubu: [
      {
        id: "msg_001_maraton",
        sender: sampleUsers[1],
        content: "Herkese merhaba! Yarın sabahki koşu için hazır mıyız?",
        timestamp: new Date("2025-07-27T18:50:00Z"),
        isRead: true,
      },
      {
        id: "msg_002_maraton",
        sender: sampleUsers[3],
        content: "Ben hazırım Can! Kaçta buluşuyoruz?",
        timestamp: new Date("2025-07-27T18:55:00Z"),
        isRead: true,
      },
      {
        id: "msg_003_maraton",
        sender: sampleUsers[1],
        content: "Sabah 7:00de park girişinde. Hava güzel olacak!",
        timestamp: new Date("2025-07-27T19:00:00Z"),
        isRead: true,
      },
    ],
    // Diğer sohbet odalarının mesajları buraya eklenebilir
  };

  // --- "Liderler" Sekmesi Verileri ---
  const sampleLeaderboardData = [
    {
      metric: "totalWorkouts",
      period: "monthly",
      data: [
        { user: sampleUsers[5], value: 25, rank: 1 }, // Emre Çelik
        { user: sampleUsers[1], value: 20, rank: 2 }, // Can Demir
        { user: sampleUsers[0], value: 18, rank: 3 }, // Ayşe Yılmaz
        { user: sampleUsers[4], value: 10, rank: 4 }, // Zeynep Kaya
        { user: sampleUsers[6], value: 8, rank: 5 }, // Gamze Soylu
      ],
    },
    // Toplam Antrenman Saati (Tüm Zamanlar)
    {
      metric: "totalHoursTrained",
      period: "all_time",
      data: [
        { user: sampleUsers[5], value: 140, rank: 1 }, // Emre Çelik
        { user: sampleUsers[1], value: 110, rank: 2 }, // Can Demir
        { user: sampleUsers[0], value: 65, rank: 3 }, // Ayşe Yılmaz
        { user: sampleUsers[6], value: 40, rank: 4 }, // Gamze Soylu
        { user: sampleUsers[4], value: 28, rank: 5 }, // Zeynep Kaya
      ],
    },
    // Kilo Kaybı (Tüm Zamanlar) - Bu daha detaylı bir metriktir ve geriye dönük veri tutar
    {
      metric: "weightLoss",
      period: "all_time",
      data: [
        { user: sampleUsers[4], value: 5.0, rank: 1 }, // Zeynep Kaya (5 kg)
        { user: sampleUsers[0], value: 3.5, rank: 2 }, // Ayşe Yılmaz (3.5 kg) - Örnek için eklendi
        // ...daha fazla kullanıcı ve değerleri
      ],
    },
  ];

  // --- "Koçlar" Sekmesi Verileri ---
  // sampleCoaches zaten yukarıda tanımlanmıştı ve sampleUsers dizisinden çekiliyor.
  const coachesList = sampleUsers.filter((user) => user.isCoach);

  // --- "Keşfet" Sekmesi Verileri ---
  const sampleDiscoveryItems = [
    {
      id: "discover_001",
      type: "article",
      title: "Yeni Başlayanlar İçin Evde 15 Dakika Full Vücut Antrenmanı",
      description:
        "Ekipmansız, kısa ve etkili bir rutinle evde nasıl formda kalabileceğinizi öğrenin. Bu makale ile ilk adımınızı atın!",
      imageUrl: "https://picsum.photos/400/250?random=7",
      author: sampleUsers[2], // Koç Burak Yılmaz
      tags: ["antrenman", "evde spor", "başlangıç", "kardiyo"],
      link: "/blog/evde-full-vucut-antrenmani",
      readTimeMinutes: 5,
    },
    {
      id: "discover_002",
      type: "recipe",
      title: "Protein Dolu Yulaf Ezmesi Tarifi",
      description:
        "Sabah kahvaltılarınızı daha besleyici hale getirecek, hızlı ve lezzetli bir tarif. Enerjinizi yüksek tutun!",
      imageUrl: "https://picsum.photos/400/250?random=8",
      tags: ["tarif", "beslenme", "kahvaltı", "protein"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 5,
    },
    {
      id: "discover_003",
      type: "challenge",
      title: "30 Günlük Plank Challenge",
      description:
        "Karın kaslarınızı güçlendirmek ve core bölgenizi sıkılaştırmak için 30 günlük bir meydan okuma! Her gün bir dakika daha fazla.",
      imageUrl: "https://picsum.photos/400/250?random=9",
      author: sampleUsers[3], // Koç Elif Aksoy
      tags: ["challenge", "karın kası", "güç", "core"],
      link: "/challenges/plank-challenge",
      startDate: new Date("2025-08-01T00:00:00Z"),
      endDate: new Date("2025-08-30T23:59:59Z"),
      participantsCount: 2875,
      rules: [
        "Her gün plank süresini artır",
        "İlerlemeni günlük kaydet",
        "Toplulukta paylaş",
      ],
      rewards: "Dijital Başarı Rozeti, Piti Mağazasında %10 İndirim",
      isJoinedByCurrentUser: true,
    },
    {
      id: "discover_004",
      type: "article",
      title: "Motivasyonu Yüksek Tutmanın 7 Etkili Yolu",
      description:
        "Antrenman rutininize bağlı kalmakta zorlanıyor musunuz? İşte motivasyonunuzu sürekli kılacak pratik ipuçları.",
      imageUrl: "https://picsum.photos/400/250?random=10",
      tags: ["motivasyon", "zihinsel sağlık", "ipuçları"],
      readTimeMinutes: 7,
    },
    {
      id: "discover_005",
      type: "workout_plan_template",
      title: "Yoğun Kardiyo Haftalık Programı (Orta Seviye)",
      description:
        "Kardiyo dayanıklılığınızı artırmak için özel olarak hazırlanmış 3 günlük haftalık program.",
      imageUrl: "https://picsum.photos/400/250?random=11",
      author: sampleUsers[2], // Koç Burak Yılmaz
      tags: ["antrenman planı", "kardiyo", "orta seviye"],
      durationWeeks: 4,
      workoutsPerWeek: 3,
    },
    {
      id: "discover_006",
      type: "recipe",
      title: "Şekersiz Fit Kurabiyeler",
      description:
        "Suçluluk duymadan yiyebileceğiniz, sağlıklı ve lezzetli kurabiye tarifi. Tatlı krizlerinize son!",
      imageUrl: "https://picsum.photos/400/250?random=12",
      tags: ["tarif", "tatlı", "sağlıklı atıştırmalık"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
    },
    {
      id: "discover_007",
      type: "challenge",
      title: "21 Günlük Su İçme Challenge",
      description:
        "Vücudunuzu hidrate tutmanın ve sağlıklı alışkanlıklar edinmenin en basit yolu. Her gün 2 litre su!",
      imageUrl: "https://picsum.photos/400/250?random=13",
      tags: ["challenge", "sağlıklı alışkanlık", "hidrasyon"],
      startDate: new Date("2025-08-15T00:00:00Z"),
      endDate: new Date("2025-09-04T23:59:59Z"),
      participantsCount: 4120,
      rules: ["Günlük su hedefine ulaş", "İlerlemeni kaydet"],
      rewards: "Puan, Toplulukta Görünürlük",
      isJoinedByCurrentUser: false,
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      <section className="rounded-2xl bg-gradient-to-b from-neutral-900 to-[#D7FFA4] p-6 py-14 shadow-md shadow-[#D7FFA4] mb-6">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Community Page
        </h1>
        <p className="text-center text-lg text-gray-300 mb-4">
          Connect with fellow fitness enthusiasts, share your journey, and find
          inspiration.
        </p>
        <Link
          href="/dashboard/student/community/create-post"
          className="flex justify-center mt-6"
        >
          <button className="bg-black text-white px-7 py-3 rounded-full hover:bg-blue-800 transition-colors">
            Create Post
          </button>
        </Link>
      </section>

      <section className="mx-4">
        <section className="flex items-center justify-center space-x-2 mt-4 rounded-full px-3 max-w-6xl mx-auto sticky top-0 bg-black py-3 shadow-xl  z-10">
          <label className="bg-neutral-800 px-4 py-3  flex items-center justify-center md:justify-start min-w-sm w-7/12 max-w-3xl rounded-full">
            <Search size={24} className=" text-neutral-500" />
            <input
              type="text"
              className="focus:outline-0 px-3 placeholder:text-neutral-500 w-full"
              placeholder="Search posts, users, or topics"
            />
          </label>
          <nav className="flex justify-center bg-neutral-800 rounded-full ">
            {["feed", "chats", "leaders", "coaches", "discover"].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-4 rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-[#D7FFA4] text-black"
                    : "text-white hover:bg-neutral-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <button className="flex items-center space-x-2 px-4 py-3 rounded-full bg-neutral-800">
            <Filter size={20}/>
            <span className="hidden md:block">Filter</span>
          </button>
        </section>
        {activeTab === "feed" && (
          <div className="space-y-6 max-w-[75%] mx-auto px-6 ">
            {samplePosts.map((post) => (
              <div
                key={post.id}
                className="bg-neutral-900 text-white p-4 rounded-2xl shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {post.author.name}
                </h2>
                <p className="text-gray-300 mb-4">{post.content}</p>
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt="Post content"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}
                {post.videoUrl && (
                  <iframe
                    src={post.videoUrl}
                    title="Post video"
                    className="w-full h-64 rounded-lg mb-4"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="flex items-center justify-between text-gray-300">
                  <span>{post.likesCount} Likes</span>
                  <span>{post.commentsCount} Comments</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Diğer sekmeler için içerikler buraya eklenecek */}
        {activeTab === "chats" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {sampleChatRooms.map((room) => (
              <div
                key={room.id}
                className="bg-neutral-900 text-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-700 mb-4">
                  {room.lastMessage.content} -{" "}
                  <span className="text-gray-500">
                    {new Date(room.lastMessage.timestamp).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </p>
                <div className="flex items-center justify-between text-gray-300">
                  <span>{room.unreadMessagesCount} Unread Messages</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "leaders" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {sampleLeaderboardData.map((leaderboard) => (
              <div
                key={leaderboard.metric}
                className="bg-neutral-900 text-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {leaderboard.metric.replace(/([A-Z])/g, " $1").toUpperCase()}{" "}
                  - {leaderboard.period}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  {leaderboard.data.map((entry) => (
                    <li key={entry.user.id}>
                      {entry.rank}. {entry.user.name} - {entry.value}{" "}
                      {leaderboard.metric === "weightLoss" ? "kg" : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {activeTab === "coaches" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Featured Coaches</h2>

            {coachesList.map((coach) => (
              <div
                key={coach.id}
                className="bg-neutral-900 text-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
                <p className="text-gray-700 mb-4">{coach.bio}</p>
                <div className="flex items-center justify-between text-gray-300">
                  <span>{coach.followersCount} Followers</span>
                  <span>{coach.followingCount} Following</span>
                  <span>{coach.clientCount} Clients</span>
                  <span>Rating: {coach.averageRating} ⭐</span>
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <Link href="/dashboard/student/community/coaches">
                <button className="bg-[#D7FFA4] text-black px-6 py-2 rounded-full hover:bg-[#c6e08f] transition-colors">
                  View All Coaches
                </button>
              </Link>
            </div>
          </div>
        )}
        {activeTab === "discover" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {sampleDiscoveryItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 text-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Discovery content"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}
                {item?.videoUrl && (
                  <iframe
                    src={item?.videoUrl}
                    title="Discovery video"
                    className="w-full h-64 rounded-lg mb-4"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="flex items-center justify-between text-gray-300">
                  <span>{item.tags.join(", ")}</span>
                  {item.isJoinedByCurrentUser && (
                    <span className="text-green-500">Joined</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Community;
