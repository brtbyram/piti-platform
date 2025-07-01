export interface Location {
  city: string;
  district: string;
  coordinates: { lat: number; lng: number; };
}

export interface HealthCondition {
  condition: string;
  details?: string;
}

export interface MedicalHistory {
  allergies: string[];
  injuries: string[];
  medications: string[];
}

export interface Budget {
  min: number;
  max: number;
  currency: string;
}

export interface AvailabilitySlot {
  day: string;
  time: string;
}

export interface WorkoutEntry {
  date: string; // ISO string: "YYYY-MM-DD"
  workoutName: string;
  durationMinutes: number;
  caloriesBurned: number;
}

// Öğrenci Şeması
export interface Student {
  id: string;
  name: string;
  email: string;
  contactNumber?: string;
  gender: 'male' | 'female' | 'other';
  age: number;
  location: Location;
  goals: string[];
  fitnessGoalsDetails?: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  healthConditions: HealthCondition[];
  medicalHistory: MedicalHistory;
  preferredTrainingTypes: string[];
  activityPreferences: string[];
  budget: Budget;
  availability: AvailabilitySlot[];
  profilePicture: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  currentTrainerId?: string | null;
  workoutHistory: WorkoutEntry[];
  paymentMethod: 'credit_card' | 'bank_transfer' | 'paypal';
  registeredAt: string; // ISO string
  lastActive: string; // ISO string
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Education {
  degree: string;
  major: string;
  university: string;
  year: number;
}

export interface SocialMediaLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
}

export interface PricingPackage {
  type: string; // "Tek Ders", "10 Ders Paketi", "Online Koçluk (Aylık)"
  price: number;
  description: string;
}

export interface TrainerAvailabilitySlot {
  day: string;
  slots: string[]; // ["HH:mm-HH:mm"]
}

export interface ClientCapacity {
  maxClients: number;
  currentClients: number;
}

export interface ProgramTemplate {
  id: string;
  name: string;
  description: string;
  durationWeeks: number;
  intensity: 'low' | 'medium' | 'high' | 'very_high';
}

// Personal Trainer Şeması
export interface PersonalTrainer {
  id: string;
  name: string;
  email: string;
  contactNumber?: string;
  gender: 'male' | 'female' | 'other';
  bio: string;
  specialties: string[];
  certifications: Certification[];
  education: Education[];
  experienceYears: number;
  hourlyRate: number;
  availableOnline: boolean;
  location: Location;
  profilePicture: string;
  introductionVideo?: string | null;
  galleryImages: string[];
  averageRating: number;
  reviewCount: number;
  studentsServed: number;
  languages: string[];
  socialMediaLinks?: SocialMediaLinks;
  pricingPackages: PricingPackage[];
  availabilitySlots: TrainerAvailabilitySlot[];
  clientCapacity: ClientCapacity;
  responseRate: number; // 0-100%
  cancellationPolicy: string;
  demoLessonOffered: boolean;
  onboardingProcess: string;
  programTemplates: ProgramTemplate[];
  registeredAt: string; // ISO string
  lastLogin: string; // ISO string
}
