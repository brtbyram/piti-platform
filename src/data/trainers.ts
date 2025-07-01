import { PersonalTrainer } from './types'; // Tipleri import etmeyi unutmayın

export const mockTrainers: PersonalTrainer[] = [
  {
    "id": "pt_001",
    "name": "Ayşe Arslan",
    "email": "ayse.arslan@example.com",
    "contactNumber": "+905051112233",
    "gender": "female",
    "bio": "5 yıllık deneyimimle kilo verme ve fonksiyonel antrenman konularında uzmanlaşmış bir personal trainerım. Hedeflerinize ulaşmanız için size özel programlar hazırlıyorum. Ayrıca beslenme danışmanlığı da yapmaktayım.",
    "specialties": ["kilo verme", "fonksiyonel antrenman", "beslenme danışmanlığı", "hamilelik sonrası fitness"],
    "certifications": [
      { "name": "NASM Certified Personal Trainer", "issuer": "NASM", "year": 2019 },
      { "name": "Precision Nutrition Level 1", "issuer": "Precision Nutrition", "year": 2021 }
    ],
    "education": [
      { "degree": "Lisans", "major": "Beden Eğitimi ve Spor Yüksekokulu", "university": "Hacettepe Üniversitesi", "year": 2018 }
    ],
    "experienceYears": 5,
    "hourlyRate": 600,
    "availableOnline": true,
    "location": {
      "city": "İstanbul",
      "district": "Beşiktaş",
      "coordinates": { "lat": 41.0435, "lng": 29.0064 }
    },
    "profilePicture": "https://placehold.co/150x150/F87171/FFFFFF?text=Ayşe",
    "introductionVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0",
    "galleryImages": [
      "https://placehold.co/600x400/F87171/FFFFFF?text=PT_Ayse_1",
      "https://placehold.co/600x400/F87171/FFFFFF?text=PT_Ayse_2"
    ],
    "averageRating": 4.8,
    "reviewCount": 75,
    "studentsServed": 120,
    "languages": ["Türkçe", "İngilizce"],
    "socialMediaLinks": {
      "instagram": "https://instagram.com/ayse_trainer",
      "linkedin": "https://linkedin.com/in/aysearslanpt"
    },
    "pricingPackages": [
      { "type": "Tek Ders", "price": 600, "description": "60 dakikalık birebir ders." },
      { "type": "10 Ders Paketi", "price": 5500, "description": "10 derslik paket, %8 indirimli." },
      { "type": "Online Koçluk (Aylık)", "price": 3000, "description": "Özel program, haftalık kontrol ve mesajlaşma." }
    ],
    "availabilitySlots": [
      { "day": "Pazartesi", "slots": ["10:00-11:00", "18:00-19:00"] },
      { "day": "Çarşamba", "slots": ["10:00-11:00", "19:00-20:00"] },
      { "day": "Cumartesi", "slots": ["09:00-10:00", "11:00-12:00"] }
    ],
    "clientCapacity": {
      "maxClients": 20,
      "currentClients": 15
    },
    "responseRate": 95,
    "cancellationPolicy": "Ders başlangıcından 24 saat öncesine kadar iptal edilebilir.",
    "demoLessonOffered": true,
    "onboardingProcess": "İlk görüşmede hedeflerinizi belirler, sağlık durumunuzu değerlendirir ve size özel bir yol haritası çıkarırım.",
    "programTemplates": [
      { "id": "prog_001", "name": "Başlangıç Kilo Verme Programı", "description": "Yeni başlayanlar için 8 haftalık kilo verme odaklı program.", "durationWeeks": 8, "intensity": "low" },
      { "id": "prog_002", "name": "Yoğun Fonksiyonel Antrenman", "description": "Orta seviye ve ileri seviye kullanıcılar için 6 haftalık yoğun program.", "durationWeeks": 6, "intensity": "high" }
    ],
    "registeredAt": "2022-05-10T14:00:00Z",
    "lastLogin": "2024-06-12T09:00:00Z"
  },
  {
    "id": "pt_002",
    "name": "Burak Can",
    "email": "burak.can@example.com",
    "contactNumber": "+905559998877",
    "gender": "male",
    "bio": "Güç ve kas kazanımı üzerine odaklanan bir personal trainerım. Sporculuk geçmişim ve 7 yıllık tecrübemle performansınızı en üst seviyeye çıkarın. Beslenme desteği de sağlıyorum.",
    "specialties": ["kas kazanma", "güç antrenmanı", "sporcu performansı", "beslenme danışmanlığı"],
    "certifications": [
      { "name": "ACSM Certified Personal Trainer", "issuer": "ACSM", "year": 2017 },
      { "name": "CrossFit Level 1 Trainer", "issuer": "CrossFit", "year": 2018 }
    ],
    "education": [
      { "degree": "Lisans", "major": "Spor Bilimleri", "university": "Orta Doğu Teknik Üniversitesi", "year": 2016 }
    ],
    "experienceYears": 7,
    "hourlyRate": 750,
    "availableOnline": true,
    "location": {
      "city": "Ankara",
      "district": "Çankaya",
      "coordinates": { "lat": 39.9207, "lng": 32.8540 }
    },
    "profilePicture": "https://placehold.co/150x150/4ADE80/FFFFFF?text=Burak",
    "introductionVideo": null,
    "galleryImages": [
      "https://placehold.co/600x400/4ADE80/FFFFFF?text=PT_Burak_1",
      "https://placehold.co/600x400/4ADE80/FFFFFF?text=PT_Burak_2"
    ],
    "averageRating": 4.5,
    "reviewCount": 50,
    "studentsServed": 90,
    "languages": ["Türkçe"],
    "socialMediaLinks": {
      "instagram": "https://instagram.com/burak_trainer",
      "facebook": "https://facebook.com/burakcanpt"
    },
    "pricingPackages": [
      { "type": "Tek Ders", "price": 750, "description": "60 dakikalık birebir güç antrenmanı dersi." },
      { "type": "Aylık Paket (8 Ders)", "price": 5600, "description": "Ayda 8 ders, kişiye özel beslenme planı dahil." }
    ],
    "availabilitySlots": [
      { "day": "Salı", "slots": ["17:00-18:00", "19:00-20:00"] },
      { "day": "Perşembe", "slots": ["17:00-18:00", "19:00-20:00"] },
      { "day": "Cumartesi", "slots": ["14:00-15:00"] }
    ],
    "clientCapacity": {
      "maxClients": 15,
      "currentClients": 12
    },
    "responseRate": 90,
    "cancellationPolicy": "Ders iptalleri için 12 saat önceden bildirim gereklidir.",
    "demoLessonOffered": false,
    "onboardingProcess": "Performans değerlendirmesi ve hedeflerinizi belirledikten sonra size özel güç ve kas kazanım programınızı oluştururum.",
    "programTemplates": [
      { "id": "prog_003", "name": "Hızlı Kas Kazanım Programı", "description": "4 haftalık yoğun kas hacmi ve güç artışı programı.", "durationWeeks": 4, "intensity": "very_high" },
      { "id": "prog_004", "name": "Temel Güçlenme Programı", "description": "Yeni başlayanlar için temel güçlenme egzersizleri.", "durationWeeks": 8, "intensity": "medium" }
    ],
    "registeredAt": "2022-07-22T09:45:00Z",
    "lastLogin": "2024-06-12T11:30:00Z"
  }
];