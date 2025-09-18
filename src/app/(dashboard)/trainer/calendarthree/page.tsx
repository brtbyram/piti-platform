'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export interface Student {
  id: string;
  name: string;
}

export type EventType = 'Antrenman' | 'Beslenme Danışmanlığı' | 'Toplantı' | 'Kişisel Not';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date; // Etkinliğin başlangıç tarihi ve saati
  end: Date;   // Etkinliğin bitiş tarihi ve saati
  student?: Student; // İlgili öğrenci (isteğe bağlı)
  type: EventType;
  notes?: string;
  // Diğer özel alanlar eklenebilir
}


export const formatDateToISO = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Saati "HH:mm" formatında bir string olarak döndürür.
 */
export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

/**
 * Belirli bir tarihin haftanın başlangıcı olan Pazartesi gününü bulur.
 */
export const getStartOfWeek = (date: Date): Date => {
  const day = date.getDay(); // Pazar 0, Pazartesi 1, ..., Cumartesi 6
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Pazartesiyi bul (Pazar ise bir önceki pazartesi)
  const startOfWeekDate = new Date(date.setDate(diff));
  startOfWeekDate.setHours(0, 0, 0, 0); // Saati sıfırla
  return startOfWeekDate;
};

/**
 * Verilen bir tarihten itibaren haftanın günlerini (Pazartesi-Pazar) bir dizi olarak döndürür.
 */
export const getWeekDays = (date: Date): Date[] => {
  const startOfCurrentWeek = getStartOfWeek(date);
  const weekDays: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfCurrentWeek);
    day.setDate(startOfCurrentWeek.getDate() + i);
    weekDays.push(day);
  }
  return weekDays;
};

/**
 * İki tarihin aynı günü temsil edip etmediğini kontrol eder (saat ve dakikayı önemsemeden).
 */
export const isSameDayIgnoreTime = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * Bir tarihe gün ekler.
 */
export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

/**
 * Bir tarihe hafta ekler.
 */
export const addWeeks = (date: Date, weeks: number): Date => {
  return addDays(date, weeks * 7);
};

/**
 * Bir tarihten hafta çıkarır.
 */
export const subWeeks = (date: Date, weeks: number): Date => {
  return addDays(date, -weeks * 7);
};

/**
 * Bir etkinliğin belirli bir gün içinde olup olmadığını kontrol eder.
 */
export const isEventOnDay = (event: CalendarEvent, day: Date): boolean => {
  // Etkinlik başlangıcı ve bitişi aynı gün içinde mi?
  if (isSameDayIgnoreTime(event.start, day) || isSameDayIgnoreTime(event.end, day)) {
    return true;
  }
  // Etkinlik verilen günü kapsıyor mu (birden fazla gün süren etkinlikler için)?
  // Bu kontrol daha karmaşık olabilir, basitleştirilmiş bir sürüm.
  // Gerçek bir çok günlük etkinlik yönetimi için daha detaylı mantık gerekir.
  const dayStart = new Date(day);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(day);
  dayEnd.setHours(23, 59, 59, 999);

  return event.start < dayEnd && event.end > dayStart;
};

/**
 * Bir Date nesnesinin saatini ve dakikasını ayarlar.
 */
export const setTime = (date: Date, hours: number, minutes: number): Date => {
  const newDate = new Date(date);
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
};

// Tarihleri Türkçe formatlamak için basit bir yardımcı
export const formatTurkishDate = (date: Date, formatStr: string): string => {
  const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  return formatStr
    .replace(/EEEE/g, dayNames[date.getDay()])
    .replace(/dd/g, date.getDate().toString().padStart(2, '0'))
    .replace(/MMMM/g, monthNames[date.getMonth()])
    .replace(/yyyy/g, date.getFullYear().toString());
};


const DUMMY_STUDENTS: Student[] = [
  { id: 's1', name: 'Ayşe Yılmaz' },
  { id: 's2', name: 'Can Demir' },
  { id: 's3', name: 'Elif Kaya' },
];

const DUMMY_EVENTS: CalendarEvent[] = [
  {
    id: 'e1',
    title: 'Ayşe Yılmaz Bacak Antrenmanı',
    start: new Date(2025, 6, 21, 10, 0), // Pazartesi 10:00 - Örn: 21 Temmuz 2025
    end: new Date(2025, 6, 21, 11, 0),
    student: DUMMY_STUDENTS[0],
    type: 'Antrenman',
  },
  {
    id: 'e2',
    title: 'Can Demir Beslenme Danışmanlığı',
    start: new Date(2025, 6, 22, 14, 30), // Salı 14:30
    end: new Date(2025, 6, 22, 15, 0),
    student: DUMMY_STUDENTS[1],
    type: 'Beslenme Danışmanlığı',
  },
  {
    id: 'e3',
    title: 'Kişisel Gelişim Semineri',
    start: new Date(2025, 6, 23, 9, 0), // Çarşamba 09:00
    end: new Date(2025, 6, 23, 17, 0), // Uzun süreli etkinlik
    type: 'Toplantı',
  },
  {
    id: 'e4',
    title: 'Elif Kaya Kontrol Antrenmanı',
    start: new Date(2025, 6, 25, 16, 0), // Cuma 16:00
    end: new Date(2025, 6, 25, 17, 0),
    student: DUMMY_STUDENTS[2],
    type: 'Antrenman',
  },
  {
    id: 'e5',
    title: 'Haftalık Planlama',
    start: new Date(2025, 6, 27, 9, 0), // Pazar 09:00
    end: new Date(2025, 6, 27, 10, 30),
    type: 'Kişisel Not',
  },
];

// --- Etkinlik Bileşeni ---
interface CalendarEventCardProps {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, eventId: string) => void;
  isDragging: boolean;
}

const CalendarEventCard: React.FC<CalendarEventCardProps> = ({ event, onClick, onDragStart, isDragging }) => {
  // Etkinlik türüne göre renk
  const getTypeColor = (type: EventType) => {
    switch (type) {
      case 'Antrenman': return 'bg-blue-600';
      case 'Beslenme Danışmanlığı': return 'bg-green-600';
      case 'Toplantı': return 'bg-purple-600';
      case 'Kişisel Not': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div
      className={`relative p-2 rounded-md shadow-md text-white text-sm mb-1
                  ${getTypeColor(event.type)}
                  hover:scale-[1.01] transition-transform duration-100 ease-in-out
                  ${isDragging ? 'opacity-70 border-2 border-blue-300' : ''}`}
      draggable="true" // Bu elementi sürüklenebilir yapar
      onDragStart={(e) => onDragStart(e, event.id)}
      onClick={() => onClick(event)}
      style={{ cursor: 'grab' }}
    >
      <div className="font-semibold">{event.title}</div>
      <div className="text-xs opacity-90">
        {event.student ? `${event.student.name} - ` : ''}
        {formatTime(event.start)} - {formatTime(event.end)}
      </div>
    </div>
  );
};


// --- Haftalık Takvim Ana Bileşeni ---
const WeeklyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Sürükleme durumu için state'ler
  const draggedEventId = useRef<string | null>(null); // Sürüklenen etkinliğin ID'si
  const [isAnyEventDragging, setIsAnyEventDragging] = useState<boolean>(false);
  const [dropTargetDayId, setDropTargetDayId] = useState<string | null>(null); // Hangi günün üzerine sürükleniyor

  const weekDays = useMemo(() => getWeekDays(currentDate), [currentDate]);

  useEffect(() => {
    // Gerçek uygulamada buradan API'den etkinlikler çekilir
    // Örneğin: fetchEventsForWeek(currentDate).then(setEvents);
    setEvents(DUMMY_EVENTS);
  }, [currentDate]);

  // --- Sürükle-Bırak Olay İşleyicileri ---
  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, eventId: string) => {
    draggedEventId.current = eventId;
    setIsAnyEventDragging(true);
    e.dataTransfer.setData('text/plain', eventId); // Sürüklenen veriyi ayarla
    e.dataTransfer.effectAllowed = 'move'; // Görsel efekti belirle
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>, dayId: string) => {
    e.preventDefault(); // Varsayılan davranışı engelle (drop'u etkinleştirir)
    e.dataTransfer.dropEffect = 'move'; // Görsel efekti ayarla
    setDropTargetDayId(dayId);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    // Sürükleme, bir gün kutucuğunun üzerinden ayrıldığında hedefi temizle
    // Ancak bu event bazen yanıltıcı olabilir, sadece tek bir gün için tutmak daha mantıklı.
    // setDropTargetDayId(null); // Bunu yorumda bırakalım ki, sadece dragOver yeni bir hedef belirlesin
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, targetDayId: string) => {
    e.preventDefault(); // Varsayılan davranışı engelle
    setIsAnyEventDragging(false);
    setDropTargetDayId(null); // Hedef temizlendi

    const droppedEventId = e.dataTransfer.getData('text/plain');
    if (!droppedEventId || !targetDayId) return;

    const targetDay = new Date(targetDayId); // "YYYY-MM-DD" stringini Date nesnesine çevir

    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) => {
        if (event.id === droppedEventId) {
          // Etkinliğin başlangıç ve bitiş saatlerini koruyarak sadece gününü değiştir
          const durationMs = event.end.getTime() - event.start.getTime(); // Süreyi hesapla
          const newStart = setTime(targetDay, event.start.getHours(), event.start.getMinutes());
          const newEnd = new Date(newStart.getTime() + durationMs);

          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return event;
      });

      // Burada güncellenmiş etkinliği API'ye gönderebilirsiniz:
      // updateEventOnBackend(updatedEvent);

      return updatedEvents;
    });

    draggedEventId.current = null; // Sürükleme tamamlandı
  }, []);

  const handleDragEndGlobal = useCallback(() => {
    // Global bir dragEnd olayı yakalayıcı (eğer drop işlemi olmazsa bile)
    setIsAnyEventDragging(false);
    setDropTargetDayId(null);
    draggedEventId.current = null;
  }, []);

  useEffect(() => {
    // Sürükleme işlemi bittiğinde (drop veya iptal) temizlik yapmak için
    // document.addEventListener('dragend', handleDragEndGlobal); // Global dragend dinleyicisi ekle
    // return () => {
    //   document.removeEventListener('dragend', handleDragEndGlobal); // Temizleme
    // };
    // Dnd-kit'teki gibi otomatik dragEnd olayını sağlamak için daha karmaşık event listener yönetimi gerekir.
    // Ancak `handleDrop` tetiklendiğinde `setIsAnyEventDragging(false)` yeterli olacaktır.
    // Drag iptal edildiğinde (ESC tuşu vb.) `dragend` olayı da tetiklenir, ancak hedef olmayabilir.
    // Basit bir senaryo için, `handleDrop` içindeki temizlik ve `handleDragStart`'taki bayraklar yeterli olabilir.
  }, []);


  const goToPreviousWeek = () => {
    setCurrentDate((prev) => subWeeks(prev, 1));
  };

  const goToNextWeek = () => {
    setCurrentDate((prev) => addWeeks(prev, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleAddEvent = () => {
    alert('Yeni etkinlik ekleme formu açılacak!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Haftalık Takvim</h1>

        {/* Takvim Navigasyonu ve Yeni Etkinlik Butonu */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button
              onClick={goToPreviousWeek}
              className="px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              &lt; Önceki Hafta
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Bugün
            </button>
            <button
              onClick={goToNextWeek}
              className="px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sonraki Hafta &gt;
            </button>
          </div>
          <span className="text-xl font-semibold text-blue-400">
            {formatTurkishDate(weekDays[0], 'dd MMMM')} - {formatTurkishDate(weekDays[6], 'dd MMMM yyyy')}
          </span>
          <button
            onClick={handleAddEvent}
            className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors"
          >
            + Yeni Etkinlik Ekle
          </button>
        </div>

        {/* Haftalık Takvim Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 bg-gray-800 p-4 rounded-lg shadow-xl min-h-[600px]">
          {weekDays.map((day) => {
            const dayId = formatDateToISO(day); // Bu günün ID'si
            const dayEvents = events.filter(e => isEventOnDay(e, day));
            const isToday = isSameDayIgnoreTime(day, new Date());
            const isDropTarget = dropTargetDayId === dayId;

            return (
              <div
                key={dayId}
                id={dayId} // Drop hedefi olarak kullanılsın
                className={`border border-gray-700 rounded-md p-3 flex flex-col items-center
                            ${isToday ? 'bg-blue-900 border-blue-600' : 'bg-gray-700'}
                            ${isAnyEventDragging ? 'min-h-[100px]' : ''}
                            ${isDropTarget ? 'border-dashed border-blue-400 ring-2 ring-blue-400' : ''}`}
                onDragOver={(e) => handleDragOver(e, dayId)}
                onDrop={(e) => handleDrop(e, dayId)}
                onDragLeave={handleDragLeave} // DragLeave'i burada tutabiliriz.
              >
                <div className={`font-semibold text-lg mb-2 ${isToday ? 'text-blue-200' : 'text-gray-300'}`}>
                  {formatTurkishDate(day, 'EEEE')}
                </div>
                <div className={`text-sm mb-3 ${isToday ? 'text-blue-300' : 'text-gray-400'}`}>
                  {formatTurkishDate(day, 'dd MMMM')}
                </div>

                <div className="flex-1 w-full space-y-2">
                  {dayEvents.length === 0 && !isAnyEventDragging ? (
                    <p className="text-gray-400 text-xs text-center pt-4">Etkinlik yok</p>
                  ) : (
                    dayEvents.map((event) => (
                      <CalendarEventCard
                        key={event.id}
                        event={event}
                        onClick={handleEventClick}
                        onDragStart={handleDragStart}
                        isDragging={draggedEventId.current === event.id}
                      />
                    ))
                  )}
                  {/* Sürükleme anında boş günlerde de boşluk olsun diye */}
                  {isAnyEventDragging && dayEvents.length === 0 && (
                      <div className="min-h-[50px] border border-dashed border-gray-500 rounded-md flex items-center justify-center text-gray-400 text-xs">
                          Etkinliği buraya bırak
                      </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Etkinlik Detay/Düzenleme Modalı */}
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-bold mb-4 text-white">Etkinlik Detayları</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Başlık:</strong> {selectedEvent.title}
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Öğrenci:</strong> {selectedEvent.student?.name || 'Yok'}
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Tür:</strong> {selectedEvent.type}
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Tarih:</strong>{' '}
                {formatTurkishDate(selectedEvent.start, 'dd MMMM yyyy')}
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-blue-400">Saat:</strong>{' '}
                {formatTime(selectedEvent.start)} - {formatTime(selectedEvent.end)}
              </p>
              {selectedEvent.notes && (
                <p className="text-gray-300 mb-4">
                  <strong className="text-blue-400">Notlar:</strong> {selectedEvent.notes}
                </p>
              )}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => alert('Düzenleme formu açılacak!')}
                  className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white transition-colors"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => {
                      if(confirm('Bu etkinliği silmek istediğinizden emin misiniz?')) {
                          setEvents(prev => prev.filter(e => e.id !== selectedEvent.id));
                          handleModalClose();
                          // API'ye silme isteği gönderilebilir
                      }
                  }}
                  className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 text-white transition-colors"
                >
                  Sil
                </button>
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 text-white transition-colors"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklyCalendar;