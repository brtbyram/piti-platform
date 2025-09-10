
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface Student {
  id: string;
  name: string;
}

export type MealType =
  | "Kahvaltı"
  | "Ara Öğün"
  | "Öğle Yemeği"
  | "Akşam Yemeği"
  | "Antrenman Öncesi"
  | "Antrenman Sonrası";
export type NutrientUnit = "gr" | "ml" | "kcal";

export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  unit: NutrientUnit;
  calories: number; // kcal
  protein: number; // gr
  carbs: number; // gr
  fat: number; // gr
}

export interface Meal {
  id: string;
  type: MealType;
  time?: string; // "08:00", "12:30" gibi
  description?: string; // "Örnek bir kahvaltı tanımı"
  foodItems: FoodItem[];
  notes?: string; // Antrenörün bu öğünle ilgili notları
}

export type NutritionProgramStatus =
  | "Aktif"
  | "Taslak"
  | "Tamamlandı"
  | "Arşivlendi";
export type NutritionProgramGoal =
  | "Kilo Verme"
  | "Kilo Alma"
  | "Kas Kazanımı"
  | "Genel Sağlık"
  | "Performans Artırma";

export interface NutritionProgram {
  id: string;
  name: string;
  assignedTo: Student[];
  goal: NutritionProgramGoal;
  totalCalories: number; // Tüm programın tahmini günlük kalori değeri
  status: NutritionProgramStatus;
  lastUpdated: string; // ISO 8601 string
  description: string;
  meals: Meal[]; // Programın içindeki öğünler
  notes?: string; // Programla ilgili genel notlar
}

// Dummy Veri (API'den geleceğini varsayıyoruz)
const DUMMY_NUTRITION_PROGRAMS: NutritionProgram[] = [
  {
    id: "np-001",
    name: "Dengeli Kilo Verme Programı",
    assignedTo: [{ id: "user-s-001", name: "Ayşe Yılmaz" }],
    goal: "Kilo Verme",
    totalCalories: 1800,
    status: "Aktif",
    lastUpdated: "2025-07-15T10:00:00Z",
    description:
      "Sağlıklı ve sürdürülebilir kilo kaybı için dengeli makro dağılımı.",
    meals: [
      {
        id: "meal-k1",
        type: "Kahvaltı",
        time: "08:00",
        foodItems: [
          {
            id: "f-oat",
            name: "Yulaf Ezmesi",
            quantity: 50,
            unit: "gr",
            calories: 180,
            protein: 6,
            carbs: 30,
            fat: 3,
          },
          {
            id: "f-milk",
            name: "Yağsız Süt",
            quantity: 200,
            unit: "ml",
            calories: 80,
            protein: 8,
            carbs: 12,
            fat: 0,
          },
        ],
      },
      {
        id: "meal-o1",
        type: "Öğle Yemeği",
        time: "13:00",
        foodItems: [
          {
            id: "f-chicken",
            name: "Izgara Tavuk Göğsü",
            quantity: 150,
            unit: "gr",
            calories: 240,
            protein: 45,
            carbs: 0,
            fat: 6,
          },
          {
            id: "f-rice",
            name: "Esmer Pirinç",
            quantity: 100,
            unit: "gr",
            calories: 350,
            protein: 7,
            carbs: 75,
            fat: 3,
          },
        ],
      },
    ],
  },
  {
    id: "np-002",
    name: "Kas Kazanımı İçin Yüksek Protein",
    assignedTo: [{ id: "user-s-002", name: "Can Demir" }],
    goal: "Kas Kazanımı",
    totalCalories: 2800,
    status: "Aktif",
    lastUpdated: "2025-07-12T16:00:00Z",
    description:
      "Yoğun antrenman yapanlar için kas büyümesini destekleyen yüksek proteinli plan.",
    meals: [
      {
        id: "meal-k2",
        type: "Kahvaltı",
        time: "07:30",
        foodItems: [
          {
            id: "f-egg",
            name: "Tam Yumurta",
            quantity: 3,
            unit: "gr",
            calories: 240,
            protein: 18,
            carbs: 3,
            fat: 18,
          },
          {
            id: "f-bread",
            name: "Tam Buğday Ekmeği",
            quantity: 50,
            unit: "gr",
            calories: 120,
            protein: 5,
            carbs: 20,
            fat: 2,
          },
        ],
      },
    ],
  },
  {
    id: "np-003",
    name: "Genel Sağlık & Enerji Programı",
    assignedTo: [],
    goal: "Genel Sağlık",
    totalCalories: 2200,
    status: "Taslak",
    lastUpdated: "2025-07-16T09:30:00Z",
    description:
      "Genel sağlığı ve enerji seviyelerini destekleyen esnek beslenme planı.",
    meals: [],
  },
  {
    id: "np-004",
    name: "Performans Artırma Özel Program",
    assignedTo: [{ id: "user-s-003", name: "Elif Kaya" }],
    goal: "Performans Artırma",
    totalCalories: 2500,
    status: "Tamamlandı",
    lastUpdated: "2025-06-25T11:00:00Z",
    description: "Dayanıklılık sporcuları için karbonhidrat ağırlıklı program.",
    meals: [],
  },
];

export default function TrainerNutritionPage() {
    
  const [nutritionPrograms, setNutritionPrograms] = useState<
    NutritionProgram[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<
    NutritionProgramStatus | "all"
  >("all");
  const [filterGoal, setFilterGoal] = useState<NutritionProgramGoal | "all">(
    "all"
  );
  const [sortBy, setSortBy] = useState<
    keyof NutritionProgram | "name" | "lastUpdated"
  >("lastUpdated");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    // Burada gerçek API çağrısı yapılırdı
    // async function fetchNutritionPrograms() {
    //   try {
    //     const response = await fetch('/api/trainer/nutrition');
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data: NutritionProgram[] = await response.json();
    //     setNutritionPrograms(data);
    //   } catch (error) {
    //     console.error('Error fetching nutrition programs:', error);
    //   }
    // }
    // fetchNutritionPrograms();

    // Şimdilik dummy veriyi kullanıyoruz
    setNutritionPrograms(DUMMY_NUTRITION_PROGRAMS);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterStatus(e.target.value as NutritionProgramStatus | "all");
  };

  const handleFilterGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterGoal(e.target.value as NutritionProgramGoal | "all");
  };

  const handleSortChange = (
    column: keyof NutritionProgram | "name" | "lastUpdated"
  ) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Filtrelenmiş ve sıralanmış programları hesapla
  const filteredAndSortedPrograms = nutritionPrograms
    .filter((program) => {
      const matchesSearch =
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.assignedTo.some((student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "all" || program.status === filterStatus;
      const matchesGoal = filterGoal === "all" || program.goal === filterGoal;

      return matchesSearch && matchesStatus && matchesGoal;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "lastUpdated") {
        comparison =
          new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const getStatusColor = (status: NutritionProgramStatus) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800";
      case "Taslak":
        return "bg-yellow-100 text-yellow-800";
      case "Tamamlandı":
        return "bg-gray-100 text-gray-800";
      case "Arşivlendi":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getSortIcon = (
    column: keyof NutritionProgram | "name" | "lastUpdated"
  ) => {
    if (sortBy === column) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Sayfa Başlığı ve Genel Bakış --- */}
        <h1 className="text-3xl font-bold mb-6">
          Beslenme Programları Yönetimi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">
              Toplam Program
            </h3>
            <p className="text-3xl font-bold text-blue-400">
              {nutritionPrograms.length}
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">
              Aktif Programlar
            </h3>
            <p className="text-3xl font-bold text-green-400">
              {nutritionPrograms.filter((p) => p.status === "Aktif").length}
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">
              Taslak Programlar
            </h3>
            <p className="text-3xl font-bold text-yellow-400">
              {nutritionPrograms.filter((p) => p.status === "Taslak").length}
            </p>
          </div>
        </div>

        {/* --- Arama ve Filtreleme --- */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Program adı, öğrenci veya açıklama ara..."
              className="flex-1 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Link
              href="/trainer/nutrition/new"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap"
            >
              + Yeni Beslenme Programı Oluştur
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="filterStatus"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Durum
              </label>
              <select
                id="filterStatus"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
                value={filterStatus}
                onChange={handleFilterStatusChange}
              >
                <option value="all">Tümü</option>
                <option value="Aktif">Aktif</option>
                <option value="Taslak">Taslak</option>
                <option value="Tamamlandı">Tamamlandı</option>
                <option value="Arşivlendi">Arşivlendi</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="filterGoal"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Hedef
              </label>
              <select
                id="filterGoal"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
                value={filterGoal}
                onChange={handleFilterGoalChange}
              >
                <option value="all">Tümü</option>
                <option value="Kilo Verme">Kilo Verme</option>
                <option value="Kilo Alma">Kilo Alma</option>
                <option value="Kas Kazanımı">Kas Kazanımı</option>
                <option value="Genel Sağlık">Genel Sağlık</option>
                <option value="Performans Artırma">Performans Artırma</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Beslenme Programları Listesi --- */}
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {filteredAndSortedPrograms.length === 0 ? (
            <p className="p-6 text-center text-gray-400">
              Gösterilecek beslenme programı bulunamadı.
              <br />
              Yeni bir program oluşturmak ister misiniz?
              <Link
                href="/trainer/nutrition/new"
                className="text-blue-400 hover:underline ml-2"
              >
                Evet, oluştur!
              </Link>
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSortChange("name")}
                    >
                      Program Adı {getSortIcon("name")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Atanan Öğrenci(ler)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Hedef
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Tahmini Günlük Kalori
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Durum
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSortChange("lastUpdated")}
                    >
                      Son Güncelleme {getSortIcon("lastUpdated")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Aksiyonlar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredAndSortedPrograms.map((program) => (
                    <tr
                      key={program.id}
                      className="hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        <Link
                          href={`/trainer/nutrition/${program.id}`}
                          className="text-blue-400 hover:underline"
                        >
                          {program.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.assignedTo.length > 0
                          ? program.assignedTo.map((s) => s.name).join(", ")
                          : "Yok"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.goal}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.totalCalories} kcal
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            program.status
                          )}`}
                        >
                          {program.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(program.lastUpdated).toLocaleDateString(
                          "tr-TR",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link
                            href={`/trainer/nutrition/${program.id}`}
                            className="text-indigo-400 hover:text-indigo-300"
                          >
                            Düzenle
                          </Link>
                          <button
                            onClick={() =>
                              alert(`Programı kopyala: ${program.name}`)
                            }
                            className="text-gray-400 hover:text-gray-300"
                          >
                            Kopyala
                          </button>
                          <button
                            onClick={() => {
                              if (
                                confirm(
                                  `"${program.name}" adlı beslenme programını silmek istediğinizden emin misiniz?`
                                )
                              ) {
                                // Gerçek API silme çağrısı burada olurdu
                                console.log(
                                  `Deleting nutrition program: ${program.id}`
                                );
                                setNutritionPrograms((prev) =>
                                  prev.filter((p) => p.id !== program.id)
                                );
                              }
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            Sil
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
