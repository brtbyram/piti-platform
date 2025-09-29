"use client";

import { SetStateAction, useState } from "react";
import { Icon } from "../../../../../../public/Icons";
import clsx from "clsx";
import { VictoryBar } from "victory";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ArrowDownUp } from "lucide-react";



export function CheckboxButton({ 
  onClick, active }: { onClick: React.MouseEventHandler<HTMLButtonElement>; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-white border border-[#dddddd] rounded-md p-1 transition-all hover:border-black",
        {
          "bg-[#f7f7f7] border-black": active,
          "bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black":
            active,
        }
      )}
    >
      <Icon name="check" size={16} />
    </button>
  );
}

export function RadioButton({
  onClick,
  active,
  name,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  name: string;
}) {
  return (
    <div
      className={clsx(
        "bg-[#b0b0b0] rounded-[32px] relative cursor-pointer transition-all hover:bg-[#000000] group",
        {
          "w-8 h-6": name === "categoryFilter",
          "w-12 h-8": name === "categoryModal",
          "!bg-[#000000]": active,
        }
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          "flex items-center justify-center bg-white border-2 border-[#b0b0b0] left-0 rounded-full absolute transition-all group-hover:border-[#000000] ",
          {
            "w-6 h-6": name === "categoryFilter",
            "w-8 h-8": name === "categoryModal",
            "text-black !border-black left-4":
              active && name === "categoryModal",
            "text-black !border-black left-3":
              active && name === "categoryFilter",
          }
        )}
      >
        {active && <Icon name="check" size={16} />}
      </button>
    </div>
  );
}

export function Button({
  children,
  onClick,
  active,
  name,
  value,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  name: string;
  value?: string;
}) {
  return (
    <button
      value={value}
      onClick={onClick}
      className={clsx(" border  text-sm hover:border-black transition-all", {
        "rounded-[30px] py-2.5 px-6 font-light text-nowrap flex items-center justify-center":
          name === "roomsAndBeds",
        "rounded-xl !p-4 flex justify-start items-center":
          name === "locationType",
        "flex flex-col space-y-1 items-start text-start py-5 px-6 border border-[#dddddd] rounded-[12px] transition-colors hover:border-black":
          name === "topRated",
        "bg-[#f7f7f7] border-2 border-black":
          (name === "locationType" && active) ||
          (name === "topRated" && active),
        "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black":
          name === "roomsAndBeds" && active,
      })}
    >
      <span>{children}</span>
    </button>
  );
}

function CategoryFilter({ activeCategory }: { activeCategory: string }) {
  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    placeType: "all",
    gender: "All",
    category: "All",
    subCategory: "All",
    level: "All",
    timeSlot: "All",
    bookingOptions: [] as string[],
    priceRange: [0, 1000],
    minPrice: 0,
    maxPrice: 1000,
  });

  console.log(filters);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceRangeChange = (newRange: SetStateAction<number>[]): void => {
    setMinPrice(newRange[0]);
    setMaxPrice(newRange[1]);
  };
  const handleChange = (e: { target: { value: string; }; }) => {
    const newRange = e.target.value.split(",").map(Number);
    handlePriceRangeChange(newRange);
  };

  const handleClick = () => {};

  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  // Sample data for the bar chart

  const values = [
    { price: 0, quantity: 10 },
    { price: 100, quantity: 20 },
    { price: 200, quantity: 30 },
    { price: 300, quantity: 40 },
    { price: 400, quantity: 50 },
    { price: 500, quantity: 60 },
    { price: 600, quantity: 70 },
    { price: 700, quantity: 80 },
    { price: 800, quantity: 90 },
    { price: 900, quantity: 100 },
    { price: MAX_PRICE, quantity: 110 },
  ];

  const customSubFilteringOptions = [
    {
      ad: "Yoga",
      türler: [
        "Hatha Yoga",
        "Vinyasa Yoga",
        "Ashtanga Yoga",
        "Yin Yoga",
        "Restoratif Yoga",
        "Kundalini Yoga",
        "Bikram Yoga",
        "Aerial Yoga",
        "Power Yoga",
        "Acro Yoga",
        "Iyengar Yoga",
      ],
      odak: [
        "Meditasyon Odaklı",
        "Nefes Odaklı (Pranayama)",
        "Esneklik Odaklı",
        "Güç Odaklı",
        "Stres Giderme Odaklı",
        "Postür İyileştirme Odaklı",
        "Sakatlanma Önleme Odaklı",
      ],
    },
    {
      ad: "Pilates",
      türler: [
        "Mat Pilates",
        "Reformer Pilates",
        "Cadillac Pilates",
        "Chair Pilates",
        "Barrel Pilates",
        "Tower Pilates",
      ],
      odak: [
        "Core Güçlendirme",
        "Postür Düzeltme",
        "Rehabilitasyon Odaklı",
        "Esneklik ve Akıcılık",
        "Denge ve Koordinasyon",
        "Nefes Kontrolü",
      ],
    },
    {
      ad: "Strength Training",
      türler: [
        "Bodybuilding",
        "Powerlifting",
        "Olympic Weightlifting",
        "CrossFit",
        "Vücut Ağırlığı (Calisthenics)",
        "Direnç Bandı",
        "Kettlebell",
        "Makine Ağırlık",
      ],
      odak: [
        "Kas Hacmi Artırma",
        "Maksimum Güç Artışı",
        "Kas Dayanıklılığı",
        "Tonlama/Şekillendirme",
        "Patlayıcı Güç Gelişimi",
      ],
    },
    {
      ad: "Cardio",
      türler: [
        "Koşu",
        "Bisiklet",
        "Yüzme",
        "Kardiyo Kickboks",
        "Dans Kardiyo",
        "Eliptik Makine",
        "Stepper",
        "Rower",
      ],
      odak: [
        "Kalp Sağlığı",
        "Yağ Yakımı",
        "Dayanıklılık Artışı",
        "Enerji Seviyesi Yükseltme",
        "Stres Giderme",
      ],
    },
    {
      ad: "Functional Training",
      türler: [
        "Kettlebell",
        "Battle Ropes",
        "Sandbag",
        "Medicine Ball",
        "TRX",
        "Bodyweight",
      ],
      odak: [
        "Fonksiyonel Güç",
        "Denge ve Koordinasyon",
        "Hareket Kabiliyeti",
        "Dayanıklılık",
        "Esneklik",
      ],
    },
    {
      ad: "Nutrition",
      türler: [
        "Diyet Planlama",
        "Beslenme Eğitimi",
        "Takviye Kullanımı",
        "Sağlıklı Tarifler",
        "Kilo Yönetimi",
      ],
      odak: [
        "Kilo Kaybı",
        "Kas Kazanımı",
        "Enerji Artışı",
        "Sindirim Sağlığı",
        "Bağışıklık Güçlendirme",
      ],
    },
    {
      ad: "Flexibility",
      türler: [
        "Dinamik Esneme",
        "Statik Esneme",
        "Aktif Esneme",
        "Pasif Esneme",
      ],
      odak: [
        "Esneklik Artışı",
        "Kas Rahatlatma",
        "Hareket Kabiliyeti Geliştirme",
      ],
    },
    {
      ad: "Weight Loss",
      türler: [
        "Kardiyo Programları",
        "Ağırlık Antrenmanları",
        "Beslenme Danışmanlığı",
      ],
      odak: ["Yağ Yakımı", "Metabolizma Hızlandırma", "Kalori Açığı Oluşturma"],
    },
    {
      ad: "Muscle Gain",
      türler: ["Ağırlık Antrenmanları", "Beslenme Danışmanlığı"],
      odak: ["Kas Hacmi Artırma", "Güç Geliştirme"],
    },
    {
      ad: "Endurance",
      türler: [
        "Uzun Mesafe Koşusu",
        "Bisiklet Yarışları",
        "Triatlon Hazırlığı",
      ],
      odak: ["Dayanıklılık Artışı", "Enerji Yönetimi"],
    },
    {
      ad: "Wellness",
      türler: ["Stres Yönetimi Programları", "Meditasyon ve Farkındalık"],
      odak: ["Zihinsel ve Fiziksel İyi Oluş"],
    },
    {
      ad: "Mindfulness",
      türler: ["Meditasyon", "Farkındalık Egzersizleri", "Nefes Teknikleri"],
      odak: ["Zihinsel Sakinlik", "Dikkat Artışı", "Stres Azaltma"],
    },
    {
      ad: "Balance",
      türler: ["Denge Egzersizleri", "Stabilite Topu", "Tek Ayak Denge"],
      odak: ["Denge Geliştirme", "Koordinasyon Artışı", "Düşme Önleme"],
    },
    {
      ad: "Core Training",
      türler: ["Plank", "Russian Twist", "Leg Raise", "Bicycle Crunch"],
      odak: ["Karın Güçlendirme", "Denge Artışı", "Postür Düzeltme"],
    },
    {
      ad: "Mobility",
      türler: ["Dinamik Isınma", "Statik Esneme", "Aktif Esneme"],
      odak: ["Hareket Aralığı Artışı", "Kas Gevşetme", "Duruş Düzeltme"],
    },
    {
      ad: "Stability",
      türler: ["Stabilite Egzersizleri", "Denge Tahtası", "Bosu Topu"],
      odak: ["Denge Geliştirme", "Koordinasyon Artışı", "Düşme Önleme"],
    },
    {
      ad: "Agility",
      türler: ["Hız Merdiveni", "Koni Drilleri", "Çeviklik Egzersizleri"],
      odak: ["Hız ve Çeviklik Artışı", "Reaksiyon Süresi Kısaltma"],
    },
    {
      ad: "Recovery",
      türler: ["Aktif Dinlenme", "Masaj Terapisi", "Soğuma Egzersizleri"],
      odak: ["Kas Onarımı", "Yorgunluk Giderme", "Performans Artışı"],
    },
    {
      ad: "Sports Training",
      türler: [
        "Futbol Antrenmanları",
        "Basketbol Antrenmanları",
        "Tenis Antrenmanları",
      ],
      odak: ["Spor Performansı Artışı", "Teknik ve Taktik Geliştirme"],
    },
    {
      ad: "Group Classes",
      türler: ["Zumba", "Spinning", "Aerobik"],
      odak: ["Sosyal Etkileşim", "Motivasyon Artışı"],
    },
    {
      ad: "Personal Training",
      türler: ["Bireysel Antrenman Programları"],
      odak: ["Kişiye Özel Hedeflere Ulaşma"],
    },
    {
      ad: "Online Coaching",
      türler: ["Canlı Online Dersler", "Video Eğitim Programları"],
      odak: ["Esneklik ve Erişilebilirlik"],
    },
    {
      ad: "Bootcamp",
      türler: ["Açık Hava Antrenmanları", "Yoğun Antrenman Programları"],
      odak: ["Dayanıklılık ve Güç Artışı"],
    },
    {
      ad: "HIIT",
      türler: ["Yüksek Yoğunluklu Aralıklı Antrenmanlar"],
      odak: ["Yağ Yakımı ve Kas Gelişimi"],
    },
    {
      ad: "Dance Fitness",
      türler: ["Zumba", "Dans Kardiyo", "Ballet Fitness"],
      odak: ["Eğlenceli Egzersiz Deneyimi", "Ritim ve Koordinasyon Geliştirme"],
    },
    {
      ad: "Senior Fitness",
      türler: ["Yaşlılar İçin Egzersiz Programları"],
      odak: [
        "Yaşlılar İçin Güvenli Egzersiz",
        "Hareket Kabiliyeti Artışı",
        "Denge ve Koordinasyon Geliştirme",
      ],
    },
  ];

  return (
    <div className="col-span-10 md:col-span-3 lg:col-span-2 grid grid-cols-2 gap-x-3 font-semibold py-4">
      <button
        onClick={() => setFilterOpen(true)}
        className="text-black bg-white flex items-center justify-center px-4 border border-neutral-800 rounded-xl py-2.5 hover:border-neutral-400 hover:bg-neutral-300"
      >
        <span className="flex items-center justify-center space-x-2 text-xs">
          <Icon name="filter" size={16} />
          <span>Filtreler</span>
        </span>
      </button>
      <button className="text-black bg-white flex items-center justify-center space-x-2 px-4 border border-neutral-800 rounded-xl py-2.5 hover:border-neutral-400 hover:bg-neutral-300">
        <span className="flex items-center justify-center space-x-2 text-xs">
          <ArrowDownUp size={16} />
          <span>Sıralama</span>
        </span>
      </button>

      {filterOpen && (
        <div className="fixed top-0 left-0 right-0 z-20 h-screen w-full bg-[#000000]/50">
          <div className="bg-white text-black border rounded-2xl mt-22 w-10/12 max-w-[780px] h-[840px] overflow-hidden mx-auto">
            <header className="relative flex justify-center items-center w-full p-6 border-b border-[#e5e7eb]">
              <h1 className="leading-5 font-bold">Filtreler</h1>
              <button
                onClick={() => setFilterOpen(false)}
                className="absolute  left-4 p-2 rounded-full hover:bg-[#f7f7f7] text-black"
              >
                <Icon name="close" size={20} />
              </button>
            </header>


            <main className="p-6 pb-0 overflow-y-auto h-10/12">
              {/* antrenman şekli */}
              <div className="border-b border-[#e5e7eb]">
                <h2 className="font-semibold text-[22px] leading-[26px] pb-4">
                  Antrenman Şekli / Ortam
                </h2>
                <p className="text-sm font-light">
                  Spor yapmak istediğiniz yeri seçin
                </p>
                <div className="flex my-6 mx-auto w-full font-semibold text-[#222222]">
                  {["all", "Online", "Group", "Personal", "Outdoor"].map(
                    (type, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setFilters({ ...filters, placeType: type })
                        }
                        className={clsx(
                          "ring-1 ring-gray-300 py-5 px-2 w-full hover:border-black first:rounded-s-xl last:rounded-e-xl",
                          {
                            "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black":
                              filters.placeType === type,
                          }
                        )}
                      >
                        <span className="text-sm capitalize">{type}</span>
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* fiyat aralığı */}
              <div className="py-8 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold">
                  Fiyat aralığı
                </h2>
                <p className="text-sm pt-2 font-light">
                  Antrenman fiyatlarını seçtiğiniz aralığa göre filtreleyin
                </p>
                <div className="h-24 relative mx-8">
                  <VictoryBar
                    barRatio={1}
                    barWidth={20}
                    style={{ data: { fill: "#000000" } }}
                    data={[...values]}
                    x="price"
                    y="quantity"
                  />
                  <RangeSlider
                    id="rangeSlider"
                    value={[minPrice, maxPrice]}
                    onInput={handleChange}
                    className="w-full h-[2px] bg-[#b9b8b8] absolute bottom-4 left-0 text-black"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={1}
                  />
                </div>
                <div className="flex justify-center items-center mt-8 px-8 w-full">
                  <div className="flex flex-col border border-[#b0b0b0] rounded-lg p-3 py-2 w-full">
                    <span className="text-[#717171] text-xs font-sans tracking-wide">
                      Minimum
                    </span>
                    <label>
                      <span className="text-sm font-medium pr-2">₺</span>
                      <input className="" value={minPrice} />
                    </label>
                  </div>
                  <div className="h-[1px] w-10 mx-6 bg-[#b0b0b0]"></div>
                  <div className="flex flex-col border border-[#b0b0b0] rounded-lg p-2 w-full">
                    <span className="text-[#717171] text-xs font-sans tracking-wide">
                      Maksimum
                    </span>
                    <label>
                      <span className="text-sm font-medium pr-2">₺</span>
                      <input className="" value={maxPrice} />
                    </label>
                  </div>
                </div>
              </div>

              {/* deneyim yılı */}
              <div className="py-8 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold">
                  Deneyim yılı
                </h2>
                <p className="text-sm pt-2 font-light">
                  Antrenörlerin deneyim yılına göre filtreleyin
                </p>
                {["All", "0-1 yıl", "1-3 yıl", "3-5 yıl", "5+ yıl"].map(
                  (level, index) => (
                    <label
                      key={index}
                      className="flex items-center py-3 space-x-4 cursor-pointer"
                    >
                      <CheckboxButton
                        onClick={() => setFilters({ ...filters, level: level })}
                        active={filters.level === level}
                      />
                      <span className="font-light">{level}</span>
                    </label>
                  )
                )}
              </div>

              {/* cinsiyet */}
              <div className="py-8 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold">
                  Eğitmen Cinsiyeti
                </h2>

                <p className="text-sm pt-2 font-light">
                  Eğitmenlerin cinsiyetine göre filtreleyin
                </p>

                <div className="grid grid-cols-3 mt-6">
                  {["All", "Kadın", "Erkek"].map((gender, index) => (
                    <button
                      key={index}
                      onClick={() => setFilters({ ...filters, gender: gender })}
                      className={clsx(
                        "ring-1 ring-gray-300 py-5 px-2 w-full hover:border-black first:rounded-s-xl last:rounded-e-xl",
                        {
                          "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black":
                            filters.gender === gender,
                        }
                      )}
                    >
                      <span className="text-sm capitalize">{gender}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* saat dilimleri */}
              <div className="py-8 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold">
                  Uygunluk Durumu / Saat Dilimleri:
                </h2>
                <p className="text-sm pt-2 font-light">
                  Eğitmenlerin uygunluk durumuna göre filtreleyin
                </p>
                <div className="mt-6">
                  {[
                    {
                      label: "Hafta İçi",
                      value: [
                        "Tümü",
                        "07:00-11:00",
                        "11:00-15:00",
                        "15:00-19:00",
                        "19:00-23:00",
                      ],
                    },
                    {
                      label: "Hafta Sonu",
                      value: [
                        "Tümü",
                        "07:00-11:00",
                        "11:00-15:00",
                        "15:00-19:00",
                        "19:00-23:00",
                      ],
                    },
                  ].map((time, index) => (
                    <div key={index} className="flex flex-col my-4">
                      <span className="text-sm font-semibold mb-2">
                        {time.label}
                      </span>
                      <div className="grid grid-cols-5 gap-2.5 pt-3">
                        {time.value.map((timeSlot) => (
                          <button
                            className="border text-sm hover:border-black transition-all rounded-[30px] py-2.5 px-6 font-light text-nowrap flex items-center justify-center"
                            key={timeSlot}
                            value={time.label}
                            onClick={handleClick}
                          >
                            {timeSlot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* antrenman şekli */}
              <div className="py-6 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold pb-6">
                  Kategoriler
                </h2>
                {customSubFilteringOptions.map(({ ad, türler, odak }) =>
                  ad === activeCategory ? (
                    <div key={ad} className="mb-6">
                      <h3 className="pt-2 pb-3 font-semibold leading-5">
                        Türler
                      </h3>
                      <div className="grid grid-cols-2">
                        {türler.map((type) => (
                          <label
                            key={type}
                            className="flex items-center py-3 space-x-4 cursor-pointer"
                          >
                            <CheckboxButton
                              onClick={() => {
                                // Handle checkbox click logic here
                              }}
                              active={false} // Replace with actual state logic
                            />
                            <span className="font-light">{type}</span>
                          </label>
                        ))}
                      </div>

                      <h3 className="pt-2 pb-3 font-semibold leading-5">
                        Odak
                      </h3>
                      <div className="grid grid-cols-2">
                        {odak.map((focus) => (
                          <label
                            key={focus}
                            className="flex items-center py-3 space-x-4 cursor-pointer"
                          >
                            <CheckboxButton
                              onClick={() => {
                                // Handle checkbox click logic here
                              }}
                              active={false} // Replace with actual state logic
                            />
                            <span className="font-light">{focus}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {/* antrenöre özel özellikler */}
              <div className="py-6 border-b border-[#e5e7eb]">
                <h2 className="text-[22px] leading-[26px] font-semibold pb-6">
                  Ek Özellikler (Antrenöre Özel)
                </h2>
                <div>
                  <div className="flex items-center py-3 ">
                    <div className="flex-1">
                      <h3>Evde Antrenman Sunan</h3>
                      <p className="text-[#717171] pt-1 font-light">
                        Antrenörünüzün evde antrenman sunup sunmadığını seçin
                      </p>
                    </div>
                    <RadioButton
                      name="categoryModal"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          bookingOptions: filters.bookingOptions.includes(
                            "Evde Antrenman Sunan"
                          )
                            ? filters.bookingOptions.filter(
                                (item) => item !== "Evde Antrenman Sunan"
                              )
                            : [
                                ...filters.bookingOptions,
                                "Evde Antrenman Sunan",
                              ],
                        })
                      }
                      active={filters.bookingOptions.includes(
                        "Evde Antrenman Sunan"
                      )}
                    />
                  </div>
                  <div className="flex items-center py-3">
                    <div className="flex-1">
                      <h3>Ekipman Sağlayan</h3>
                      <p className="text-[#717171] pt-1 font-light">
                        Ekipman ihtiyacınız varsa, bu seçeneği işaretleyerek
                        ekipman sağlayan antrenörleri filtreleyebilirsiniz.
                      </p>
                    </div>
                    <RadioButton
                      name="categoryModal"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          bookingOptions: filters.bookingOptions.includes(
                            "Ekipman Sağlayan"
                          )
                            ? filters.bookingOptions.filter(
                                (item) => item !== "Ekipman Sağlayan"
                              )
                            : [...filters.bookingOptions, "Ekipman Sağlayan"],
                        })
                      }
                      active={filters.bookingOptions.includes(
                        "Ekipman Sağlayan"
                      )}
                    />
                  </div>
                  <div className="flex items-center py-3">
                    <div className="flex-1">
                      <h3>Beslenme Planı Dahil</h3>
                      <button className="text-[#717171] pt-1 font-light">
                        Antrenörünüzün beslenme planı sunup sunmadığını seçin
                      </button>
                    </div>
                    <RadioButton
                      name="categoryModal"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          bookingOptions: filters.bookingOptions.includes(
                            "Beslenme Planı Dahil"
                          )
                            ? filters.bookingOptions.filter(
                                (item) => item !== "Beslenme Planı Dahil"
                              )
                            : [
                                ...filters.bookingOptions,
                                "Beslenme Planı Dahil",
                              ],
                        })
                      }
                      active={filters.bookingOptions.includes(
                        "Beslenme Planı Dahil"
                      )}
                    />
                  </div>
                  <div className="flex items-center py-3">
                    <div className="flex-1">
                      <h3>Mental Koçluk Sunan</h3>
                      <p className="text-[#717171] pt-1 font-light">
                        Mental koçluk hizmeti sunan antrenörleri filtreleyin.
                      </p>
                    </div>
                    <RadioButton
                      name="categoryModal"
                      onClick={() =>
                        setFilters({
                          ...filters,
                          bookingOptions: filters.bookingOptions.includes(
                            "Mental Koçluk Sunan"
                          )
                            ? filters.bookingOptions.filter(
                                (item) => item !== "Mental Koçluk Sunan"
                              )
                            : [
                                ...filters.bookingOptions,
                                "Mental Koçluk Sunan",
                              ],
                        })
                      }
                      active={filters.bookingOptions.includes(
                        "Mental Koçluk Sunan"
                      )}
                    />
                  </div>
                </div>
              </div>
            </main>

            <footer className="flex justify-around items-end w-full space-x-3 h-16 px-6 text-[18px] min-h-min font-medium">
              <button
                onClick={() => setFilterOpen(false)}
                className="text-[#222222] w-full h-14 rounded-lg border border-gray-300 hover:border-black hover:bg-[#f5f5f5]"
              >
               Filtreyi Temizle
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-[#fff] w-full h-14 rounded-lg border border-gray-300 hover:border-black bg-[#27ae60]"
              >
                Filtrele
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
