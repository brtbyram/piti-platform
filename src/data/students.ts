import { Student } from './types'; // Tipleri import etmeyi unutmayın

export const mockStudents: Student[] = [
  {
    "id": "std_001",
    "name": "Elif Demir",
    "email": "elif.demir@example.com",
    "contactNumber": "+905321234567",
    "gender": "female",
    "age": 28,
    "location": {
      "city": "İstanbul",
      "district": "Kadıköy",
      "coordinates": { "lat": 40.9822, "lng": 29.0433 }
    },
    "goals": ["kilo verme", "dayanıklılık artırma"],
    "fitnessGoalsDetails": "Özellikle bölgesel incelme ve koşu performansımı artırmak istiyorum. Haftada 3-4 gün antrenman yapmaya açığım.",
    "fitnessLevel": "intermediate",
    "healthConditions": [{ condition: "diz ağrısı", details: "hafif" }, { condition: "astım", details: "kontrol altında" }],
    "medicalHistory": {
      "allergies": [],
      "injuries": ["sol dizde menisküs (hafif)"],
      "medications": []
    },
    "preferredTrainingTypes": ["kardiyo", "fonksiyonel antrenman", "pilates"],
    "activityPreferences": ["solo antrenman", "küçük grup dersleri"],
    "budget": {
      "min": 3000,
      "max": 4000,
      "currency": "TRY"
    },
    "availability": [
      { "day": "Pazartesi", "time": "18:00-20:00" },
      { "day": "Çarşamba", "time": "19:00-21:00" },
      { "day": "Cumartesi", "time": "10:00-12:00" }
    ],
    "profilePicture": "https://placehold.co/150x150/A78BFA/FFFFFF?text=Elif",
    "subscriptionStatus": "active",
    "currentTrainerId": "pt_001",
    "workoutHistory": [
      { "date": "2024-05-01", "workoutName": "Kardiyo & Fonksiyonel", "durationMinutes": 60, "caloriesBurned": 450 },
      { "date": "2024-05-03", "workoutName": "Pilates", "durationMinutes": 45, "caloriesBurned": 250 }
    ],
    "paymentMethod": "credit_card",
    "registeredAt": "2023-01-15T10:30:00Z",
    "lastActive": "2024-06-11T18:00:00Z"
  },
  {
    "id": "std_002",
    "name": "Can Yılmaz",
    "email": "can.yilmaz@example.com",
    "contactNumber": "+905439876543",
    "gender": "male",
    "age": 35,
    "location": {
      "city": "İstanbul",
      "district": "Şişli",
      "coordinates": { "lat": 41.0667, "lng": 28.9833 }
    },
    "goals": ["kas kazanma", "güç artırma"],
    "fitnessGoalsDetails": "Kısa sürede belirgin kas kütlesi artışı hedefliyorum. Özellikle kol ve omuz bölgelerini güçlendirmek istiyorum.",
    "fitnessLevel": "beginner",
    "healthConditions": [],
    "medicalHistory": {
      "allergies": [],
      "injuries": [],
      "medications": []
    },
    "preferredTrainingTypes": ["ağırlık antrenmanı", "bodybuilding", "powerlifting"],
    "activityPreferences": ["solo antrenman"],
    "budget": {
      "min": 3500,
      "max": 5000,
      "currency": "TRY"
    },
    "availability": [
      { "day": "Salı", "time": "19:00-21:00" },
      { "day": "Perşembe", "time": "19:00-21:00" }
    ],
    "profilePicture": "https://placehold.co/150x150/60A5FA/FFFFFF?text=Can",
    "subscriptionStatus": "active",
    "currentTrainerId": "pt_002",
    "workoutHistory": [
      { "date": "2024-05-02", "workoutName": "Üst Vücut Güç", "durationMinutes": 75, "caloriesBurned": 600 },
      { "date": "2024-05-04", "workoutName": "Alt Vücut Güç", "durationMinutes": 65, "caloriesBurned": 500 }
    ],
    "paymentMethod": "bank_transfer",
    "registeredAt": "2023-02-20T11:00:00Z",
    "lastActive": "2024-06-12T10:00:00Z"
  }
];