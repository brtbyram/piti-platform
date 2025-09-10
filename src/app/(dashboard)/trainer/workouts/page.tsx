// pages/trainer/workouts.tsx (Pages Router için)
// Veya app/trainer/workouts/page.tsx (App Router için)

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Oluşturduğumuz tipleri import ediyoruz
// types/index.ts veya interfaces/index.ts

export interface Student {
  id: string;
  name: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string | number; // Tekrar sayısı bazen '8-12' gibi string olabilir
  rest: string; // Dinlenme süresi '60s' gibi string olabilir
  equipment: string;
}

export type ProgramStatus = 'Aktif' | 'Taslak' | 'Tamamlandı' | 'Arşivlendi';
export type ProgramDifficulty = 'Başlangıç' | 'Orta' | 'İleri';
export type ProgramGoal = 'Kas Kazanımı' | 'Kardiyo & Dayanıklılık' | 'Esneklik' | 'Genel Zindelik' | 'Kilo Verme';

export interface WorkoutProgram {
  id: string;
  name: string;
  assignedTo: Student[];
  difficulty: ProgramDifficulty;
  mainGoal: ProgramGoal;
  exerciseCount: number;
  status: ProgramStatus;
  lastUpdated: string; // ISO 8601 string (örn: "2025-07-10T14:30:00Z")
  description: string;
  exercises: Exercise[];
}// Dosya yolunuza göre ayarlayın

// Varsayılan antrenman programı verileri (API'den geleceğini varsayıyoruz)
const DUMMY_WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: 'wp-001',
    name: 'Yeni Başlayanlar İçin Temel Kuvvet',
    assignedTo: [{ id: 'user-s-001', name: 'Ayşe Yılmaz' }],
    difficulty: 'Başlangıç',
    mainGoal: 'Kas Kazanımı',
    exerciseCount: 12,
    status: 'Aktif',
    lastUpdated: '2025-07-10T14:30:00Z',
    description: 'Tüm vücut kas gruplarını hedefleyen, haftada 3 gün uygulanacak temel kuvvet programı.',
    exercises: [
      { id: 'ex-001', name: 'Squat', sets: 3, reps: '8-12', rest: '60s', equipment: 'Barbell' },
      { id: 'ex-002', name: 'Bench Press', sets: 3, reps: '8-12', rest: '60s', equipment: 'Barbell' },
      { id: 'ex-003', name: 'Deadlift', sets: 3, reps: '5-8', rest: '90s', equipment: 'Barbell' },
    ],
  },
  {
    id: 'wp-002',
    name: 'İleri Seviye Kardiyo & Dayanıklılık',
    assignedTo: [
      { id: 'user-s-002', name: 'Can Demir' },
      { id: 'user-s-004', name: 'Deniz Aslan' }
    ],
    difficulty: 'İleri',
    mainGoal: 'Kardiyo & Dayanıklılık',
    exerciseCount: 8,
    status: 'Aktif',
    lastUpdated: '2025-07-08T10:00:00Z',
    description: 'Yüksek yoğunluklu interval antrenmanı (HIIT) ve uzun mesafe koşu kombinasyonu.',
    exercises: [
      { id: 'ex-004', name: 'Koşu (HIIT)', sets: 5, reps: '30s sprint / 90s yürüyüş', rest: 'Yok', equipment: 'Koşu Bandı' },
      { id: 'ex-005', name: 'Burpee', sets: 3, reps: 15, rest: '45s', equipment: 'Vücut Ağırlığı' },
    ],
  },
  {
    id: 'wp-003',
    name: 'Esneklik ve Mobilite Programı',
    assignedTo: [],
    difficulty: 'Başlangıç',
    mainGoal: 'Esneklik',
    exerciseCount: 10,
    status: 'Taslak',
    lastUpdated: '2025-07-15T09:00:00Z',
    description: 'Yoga ve pilates temelli esneklik ve eklem hareketliliği artırma programı.',
    exercises: [
      { id: 'ex-006', name: 'Yoga - Güneşe Selam', sets: 1, reps: '5 tekrar', rest: 'Yok', equipment: 'Mat' },
      { id: 'ex-007', name: 'Kedi-Deve Esnetme', sets: 3, reps: 10, rest: '30s', equipment: 'Yok' },
    ],
  },
  {
    id: 'wp-004',
    name: 'Full Body Ev Antrenmanı',
    assignedTo: [{ id: 'user-s-003', name: 'Elif Kaya' }],
    difficulty: 'Orta',
    mainGoal: 'Genel Zindelik',
    exerciseCount: 10,
    status: 'Tamamlandı',
    lastUpdated: '2025-06-20T11:00:00Z',
    description: 'Minimum ekipmanla evde yapılabilecek tüm vücut antrenmanı.',
    exercises: [
        { id: 'ex-008', name: 'Şınav', sets: 3, reps: '8-15', rest: '60s', equipment: 'Vücut Ağırlığı' },
        { id: 'ex-009', name: 'Lunge', sets: 3, reps: '10-12 her bacak', rest: '60s', equipment: 'Vücut Ağırlığı' },
    ],
  },
];

const TrainerWorkoutsPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutProgram[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<ProgramStatus | 'all'>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<ProgramDifficulty | 'all'>('all');
  const [filterGoal, setFilterGoal] = useState<ProgramGoal | 'all'>('all');
  const [sortBy, setSortBy] = useState<keyof WorkoutProgram | 'name' | 'difficulty' | 'lastUpdated'>('lastUpdated');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    // Burada gerçek API çağrısı yapılırdı
    // async function fetchWorkouts() {
    //   try {
    //     const response = await fetch('/api/trainer/workouts');
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data: WorkoutProgram[] = await response.json();
    //     setWorkouts(data);
    //   } catch (error) {
    //     console.error('Error fetching workouts:', error);
    //     // Kullanıcıya hata mesajı gösterebilirsiniz
    //   }
    // }
    // fetchWorkouts();

    // Şimdilik dummy veriyi kullanıyoruz
    setWorkouts(DUMMY_WORKOUT_PROGRAMS);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value as ProgramStatus | 'all');
  };

  const handleFilterDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterDifficulty(e.target.value as ProgramDifficulty | 'all');
  };

  const handleFilterGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterGoal(e.target.value as ProgramGoal | 'all');
  };

  const handleSortChange = (column: keyof WorkoutProgram | 'name' | 'difficulty' | 'lastUpdated') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Filtrelenmiş ve sıralanmış programları hesapla
  const filteredAndSortedWorkouts = workouts
    .filter((program) => {
      const matchesSearch =
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.assignedTo.some((student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        program.exercises.some((exercise) =>
            exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesStatus = filterStatus === 'all' || program.status === filterStatus;
      const matchesDifficulty = filterDifficulty === 'all' || program.difficulty === filterDifficulty;
      const matchesGoal = filterGoal === 'all' || program.mainGoal === filterGoal;

      return matchesSearch && matchesStatus && matchesDifficulty && matchesGoal;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'lastUpdated') {
        comparison = new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
      } else if (sortBy === 'difficulty') {
        const difficultyOrder: Record<ProgramDifficulty, number> = {
          'Başlangıç': 1,
          'Orta': 2,
          'İleri': 3,
        };
        comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const getStatusColor = (status: ProgramStatus) => {
    switch (status) {
      case 'Aktif': return 'bg-green-100 text-green-800';
      case 'Taslak': return 'bg-yellow-100 text-yellow-800';
      case 'Tamamlandı': return 'bg-gray-100 text-gray-800';
      case 'Arşivlendi': return 'bg-purple-100 text-purple-800'; // Yeni durum eklendi
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getSortIcon = (column: keyof WorkoutProgram | 'name' | 'difficulty' | 'lastUpdated') => {
    if (sortBy === column) {
      return sortOrder === 'asc' ? '▲' : '▼';
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* --- Sayfa Başlığı ve Genel Bakış --- */}
        <h1 className="text-3xl font-bold mb-6">Antrenman Programları Yönetimi</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Toplam Program</h3>
            <p className="text-3xl font-bold text-blue-400">{workouts.length}</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Aktif Programlar</h3>
            <p className="text-3xl font-bold text-green-400">
              {workouts.filter(p => p.status === 'Aktif').length}
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Taslak Programlar</h3>
            <p className="text-3xl font-bold text-yellow-400">
              {workouts.filter(p => p.status === 'Taslak').length}
            </p>
          </div>
        </div>

        {/* --- Arama ve Filtreleme --- */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Program adı, öğrenci veya egzersiz ara..."
              className="flex-1 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Link href="/trainer/workouts/new" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap">
                + Yeni Program Oluştur
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-300 mb-1">Durum</label>
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
              <label htmlFor="filterDifficulty" className="block text-sm font-medium text-gray-300 mb-1">Zorluk</label>
              <select
                id="filterDifficulty"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
                value={filterDifficulty}
                onChange={handleFilterDifficultyChange}
              >
                <option value="all">Tümü</option>
                <option value="Başlangıç">Başlangıç</option>
                <option value="Orta">Orta</option>
                <option value="İleri">İleri</option>
              </select>
            </div>
            <div>
              <label htmlFor="filterGoal" className="block text-sm font-medium text-gray-300 mb-1">Hedef</label>
              <select
                id="filterGoal"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
                value={filterGoal}
                onChange={handleFilterGoalChange}
              >
                <option value="all">Tümü</option>
                <option value="Kas Kazanımı">Kas Kazanımı</option>
                <option value="Kardiyo & Dayanıklılık">Kardiyo & Dayanıklılık</option>
                <option value="Esneklik">Esneklik</option>
                <option value="Genel Zindelik">Genel Zindelik</option>
                <option value="Kilo Verme">Kilo Verme</option> {/* Yeni hedef eklendi */}
              </select>
            </div>
          </div>
        </div>

        {/* --- Antrenman Programları Listesi --- */}
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {filteredAndSortedWorkouts.length === 0 ? (
            <p className="p-6 text-center text-gray-400">
              Gösterilecek antrenman programı bulunamadı.
              <br/>
              Yeni bir program oluşturmak ister misiniz?
              <Link href="/trainer/workouts/new" className="text-blue-400 hover:underline ml-2">
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
                      onClick={() => handleSortChange('name')}
                    >
                      Program Adı {getSortIcon('name')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Atanan Öğrenci(ler)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSortChange('difficulty')}
                    >
                      Zorluk {getSortIcon('difficulty')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Ana Hedef
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      Egzersiz Sayısı
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
                      onClick={() => handleSortChange('lastUpdated')}
                    >
                      Son Güncelleme {getSortIcon('lastUpdated')}
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
                  {filteredAndSortedWorkouts.map((program) => (
                    <tr key={program.id} className="hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        <Link href={`/trainer/workouts/${program.id}`} className="text-blue-400 hover:underline">
                          {program.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.assignedTo.length > 0
                          ? program.assignedTo.map(s => s.name).join(', ')
                          : 'Yok'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.difficulty}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.mainGoal}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {program.exerciseCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(program.status)}`}>
                          {program.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(program.lastUpdated).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link href={`/trainer/workouts/${program.id}`} className="text-indigo-400 hover:text-indigo-300">
                            Düzenle
                          </Link>
                          <button
                            onClick={() => alert(`Programı kopyala: ${program.name}`)}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            Kopyala
                          </button>
                          <button
                            onClick={() => {
                                if (confirm(`"${program.name}" adlı programı silmek istediğinizden emin misiniz?`)) {
                                    // Gerçek API silme çağrısı burada olurdu
                                    console.log(`Deleting program: ${program.id}`);
                                    setWorkouts(prev => prev.filter(p => p.id !== program.id));
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
};

export default TrainerWorkoutsPage;