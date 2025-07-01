
import { Icon } from "../../../../../../public/Icons"

// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
// import accommodations from "../../data/accommodations";
// import { VictoryBar } from 'victory';

// import { Context } from "../../context/ModalContext";
// import  RadioButton  from "../buttons/RadioButton";
// import CheckboxButton  from "../buttons/CheckboxButton";
// import  Button  from "../buttons/Button";

function CategoryModal() {



    // const [filters, setFilters] = useState({
    //     placeType: "all",
    //     priceRange: {
    //         minPrice: 0,
    //         maxPrice: 4000
    //     },
    //     roomsAndBeds: {
    //         bedrooms: 1,
    //         beds: 1,
    //         bathrooms: 1
    //     },
    //     topRated: false,
    //     groundType: [],
    //     amenities: [],
    //     bookingOptions: [],
    //     accessibility: [],
    //     languagesHostSpeaks: []
    // })

    // const [minPrice, setMinPrice] = useState(filters.priceRange.minPrice);
    // const [maxPrice, setMaxPrice] = useState(filters.priceRange.maxPrice);

    // const MIN_PRICE = 0;
    // const MAX_PRICE = 5500;


    // const handleChange = (newValue) => {
    //     console.log(newValue)
    //     setMinPrice(newValue[0]);
    //     setMaxPrice(newValue[1]);
    // };

    // useEffect(() => {
    //     if (minPrice === MIN_PRICE && maxPrice === MAX_PRICE) {
    //         setFilters({ ...filters, priceRange: { minPrice: null, maxPrice: null } });
    //         return;
    //     }

    //     setFilters({ ...filters, priceRange: { minPrice, maxPrice } });
    // }, [minPrice, maxPrice])

    // console.log(filters)

    // const accommodationPrices = accommodations.map(accommodation => accommodation.pricePerNight)
    // const groupedValues = {};
    // accommodationPrices.forEach(value => {
    //     if (!(value in groupedValues)) {
    //         groupedValues[value] = {
    //             quantity: 0,
    //             price: value
    //         };
    //     }
    //     groupedValues[value].quantity++;
    // });

    // const values = Object.values(groupedValues);

    // const rooms = ["Tümü", 1, 2, 3, 4, 5, 6, 7, "8+"]

    // const amenities = {
    //     basicAmenities: ["Wifi", "Mutfak", "Çamaşır makinesi", "Kurutma makinesi", "Klima", "Isıtma", "Özel çalışma alanı", "TV", "Saç kurutma makinesi", "Ütü"],
    //     properties: ["Havuz", "Jakuzi", "Sauna", "Bahçe veya avlu", "Spor salonu", "Otopark", "Asansör", "Engelli erişimi", "Çocuk dostu", "Sigara içilebilir", "Evcil hayvan kabul edilir"],
    //     locations: ["Deniz kenarı", "Sahil kenarı"],
    //     safety: ["Duman dedektörü", "Karbonmonoksit alarmı"]
    // }

    return (
        <div className='fixed top-0 left-0 right-0 z-20 h-full w-full bg-[#000000]/50'>
            <div className='bg-white border rounded-2xl my-10 w-[780px] h-[880px]   mx-auto'>
                <header className='relative flex justify-center items-center w-full p-6'>
                    <h1 className="leading-5 font-bold">Filtreler</h1>
                    <button className="absolute -top-4.5 left-2 p-2 rounded-full hover:bg-[#f7f7f7]">
                        <Icon name='close' size={16} />
                    </button>
                </header>
                <hr />
                <div className="p-6 h-full overflow-scroll">
                    fsdfsfsdf   
                </div>

                {/* <div className="p-6 h-full overflow-scroll">

                    <div className="border-b">
                        <h2 className="font-semibold text-[22px] leading-[26px] pb-4">Yerin türü</h2>
                        <p className="text-sm">Odaları, tamamı sunulan evleri veya diğer konaklama türlerini arayın</p>
                        <div className="grid grid-cols-3 place-content-center place-items-center py-6 px-10 w-full font-semibold text-[#222222]">
                            <button onClick={() => setFilters({ ...filters, placeType: "all" })}
                                className={clsx("border py-5 px-2 rounded-s-xl w-full hover:border-black", {
                                    "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black": filters.placeType === "all"
                                })}>
                                Tümü
                            </button>
                            <button onClick={() => setFilters({ ...filters, placeType: "room" })}
                                className={clsx("border-y py-5 px-2 w-full hover:border-black hover:border", {
                                    "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black": filters.placeType === "room"
                                })}>Oda</button>
                            <button onClick={() => setFilters({ ...filters, placeType: "whole house" })}
                                className={clsx("border py-5 px-2 rounded-e-xl w-full hover:border-black ", {
                                    "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black": filters.placeType === "whole house"
                                })}>Evin tamamı</button>
                        </div>
                    </div>

                    <div className="py-8 border-b">
                        <h2 className="text-[22px] leading-[26px] font-semibold">Fiyat aralığı</h2>
                        <p className="text-sm pt-2">Vergiler hariç 5 gecelik toplam fiyat</p>
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
                                className="w-full h-[2px] bg-[#b9b8b8] absolute bottom-4 left-0"
                                min={MIN_PRICE}
                                max={MAX_PRICE}
                                step={1}
                            />
                        </div>
                        <div className="flex justify-center items-center mt-8 px-8 w-full">
                            <div className="flex flex-col border border-[#b0b0b0] rounded-lg p-3 py-2 w-full">
                                <span className="text-[#717171] text-xs font-sans tracking-wide">Minimum</span>
                                <label>
                                    <span className="text-sm font-medium pr-2">₺</span>
                                    <input className="" value={minPrice} />
                                </label>
                            </div>
                            <div className="h-[1px] w-10 mx-6 bg-[#b0b0b0]"></div>
                            <div className="flex flex-col border border-[#b0b0b0] rounded-lg p-2 w-full">
                                <span className="text-[#717171] text-xs font-sans tracking-wide">Maksimum</span>
                                <label>
                                    <span className="text-sm font-medium pr-2">₺</span>
                                    <input className="" value={maxPrice} />
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="py-6 border-b">
                        <h2 className="text-[22px] leading-[26px] font-semibold">Odalar ve yataklar</h2>
                        <div className="space-y-2 pt-6">
                            <div>
                                <h3>Yatak Odaları</h3>
                                <div className="flex items-center justify-start gap-2.5 pt-6">
                                    {rooms.map(room => (
                                        <Button
                                            name="roomsAndBeds"
                                            key={room}
                                            onClick={() => setFilters({ ...filters.roomsAndBeds, bedrooms: room })}
                                            active={filters.roomsAndBeds.bedrooms === room}>{room}</Button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3>Yataklar</h3>
                                <div className="flex items-center justify-start gap-2.5 pt-6">
                                    {rooms.map(room => (
                                        <Button
                                            name="roomsAndBeds"
                                            key={room}
                                            onClick={() => setFilters({ ...filters.roomsAndBeds, beds: room })}
                                            active={filters.roomsAndBeds.beds === room}>{room}</Button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3>Banyolar</h3>
                                <div className="flex items-center justify-start gap-2.5 pt-6">
                                    {rooms.map(room => (
                                        <button
                                            name="roomsAndBeds"
                                            key={room}
                                            onClick={() => setFilters({ ...filters.roomsAndBeds, bathrooms: room })}
                                            active={filters.roomsAndBeds.bathrooms === room}>{room}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 border-b">
                        <h2 className="text-[22px] leading-[26px] font-semibold">Üst düzey konaklamalar</h2>
                        <div className="grid grid-cols-2 pt-6">
                            <Button name="topRated"
                                active={filters.topRated}
                                onClick={() => setFilters({ ...filters, topRated: !filters.topRated })}>
                                <Icon name='best' size={40} />
                                <h3 className="text-[#222222] font-semibold">Misafirlerin favorileri</h3>
                                <p className="text-[#717171] text-sm">Misafirlere göre Airbnbde en sevilen <br /> evler</p>
                            </Button>
                        </div>
                    </div>

                    <div className="py-8 border-b">
                        <h2 className="text-[22px] leading-[26px] font-semibold pb-6">Yer tipi</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <Button
                                name="locationType"
                                active={filters.groundType.includes("Ev")}
                                onClick={() => setFilters({ ...filters, groundType: filters.groundType.includes("Ev") ? filters.groundType.filter(type => type !== "Ev") : [...filters.groundType, "Ev"] })}>
                                <img src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg" className="w-8 pb-9" alt="" />
                                <h3>Ev</h3>
                            </Button>
                            <Button
                                name="locationType"
                                active={filters.groundType.includes("Daire")}
                                onClick={() => setFilters({ ...filters, groundType: filters.groundType.includes("Daire") ? filters.groundType.filter(type => type !== "Daire") : [...filters.groundType, "Daire"] })}>
                                <img src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg" className="w-8 pb-9" alt="" />
                                <h3>Daire</h3>
                            </Button>
                            <Button
                                name="locationType"
                                active={filters.groundType.includes("Misafir evi")}
                                onClick={() => setFilters({ ...filters, groundType: filters.groundType.includes("Misafir evi") ? filters.groundType.filter(type => type !== "Misafir evi") : [...filters.groundType, "Misafir evi"] })}>
                                <img src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg" className="w-8 pb-9" alt="" />
                                <h3>Misafir evi</h3>
                            </Button>
                            <Button
                                name="locationType"
                                active={filters.groundType.includes("Otel")}
                                onClick={() => setFilters({ ...filters, groundType: filters.groundType.includes("Otel") ? filters.groundType.filter(type => type !== "Otel") : [...filters.groundType, "Otel"] })}>
                                <img src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg" className="w-8 pb-9" alt="" />
                                <h3>Otel</h3>
                            </Button>
                        </div>
                    </div>

                    <div className="py-6 border-b">
                        <h2 className="text-[22px] leading-[26px] font-semibold pb-6">Olanaklar</h2>
                        {Object.entries(amenities).map(([key, value]) => (
                            <div key={key} className="mb-6">
                                <h3 className="pt-2 pb-3 font-semibold leading-5">{key}</h3>
                                <div className="grid grid-cols-2">
                                    {value.map(amenity => (
                                        <label key={amenity} className="flex items-center py-3 space-x-4 cursor-pointer">
                                            <CheckboxButton
                                                onClick={() => setFilters({ ...filters, amenities: filters.amenities.includes(amenity) ? filters.amenities.filter(item => item !== amenity) : [...filters.amenities, amenity] })}
                                                active={filters.amenities.includes(amenity)} />
                                            <span>{amenity}</span>
                                        </label>
                                    ))}

                                </div>
                            </div>
                        ))
                        }
                    </div>

                    <div className="py-6 border-b text-[#222222]">
                        <h2 className="text-[22px] leading-[26px] font-semibold pb-6">Rezervasyon seçenekleri</h2>
                        <div>
                            <div className="flex items-center py-3 ">
                                <div className="flex-1">
                                    <h3>Anında Rezervasyon</h3>
                                    <p className="text-[#717171] pt-1">Ev sahibinden onay beklemeden rezervasyon yapabileceğiniz kayıtlar</p>
                                </div>
                                <RadioButton
                                    name="categoryModal"
                                    onClick={() => setFilters({ ...filters, bookingOptions: filters.bookingOptions.includes("Anında Rezervasyon") ? filters.bookingOptions.filter(item => item !== "Anında Rezervasyon") : [...filters.bookingOptions, "Anında Rezervasyon"] })}
                                    active={filters.bookingOptions.includes("Anında Rezervasyon")}
                                />
                            </div>
                            <div className="flex items-center py-3">
                                <div className="flex-1">
                                    <h3>Kendi kendine giriş</h3>
                                    <p className="text-[#717171] pt-1">Varışta mekâna kolay erişim</p>
                                </div>
                                <RadioButton
                                    name="categoryModal"
                                    onClick={() => setFilters({ ...filters, bookingOptions: filters.bookingOptions.includes("Kendi kendine giriş") ? filters.bookingOptions.filter(item => item !== "Kendi kendine giriş") : [...filters.bookingOptions, "Kendi kendine giriş"] })}
                                    active={filters.bookingOptions.includes("Kendi kendine giriş")} />
                            </div>
                            <div className="flex items-center py-3">
                                <div className="flex-1">
                                    <h3>Evcil hayvanlara izin veriliyor</h3>
                                    <button className="text-[#717171] pt-1 outline*-">Yanınızda hizmet hayvanı mı getiriyorsunuz? </button>
                                </div>
                                <RadioButton
                                    name="categoryModal"
                                    onClick={() => setFilters({ ...filters, bookingOptions: filters.bookingOptions.includes("Evcil hayvanlara izin veriliyor") ? filters.bookingOptions.filter(item => item !== "Evcil hayvanlara izin veriliyor") : [...filters.bookingOptions, "Evcil hayvanlara izin veriliyor"] })}
                                    active={filters.bookingOptions.includes("Evcil hayvanlara izin veriliyor")} />
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b">
                        <h2>Erişilebilirlik özellikleri</h2>
                    </div>
                    <div className="py-6 border-b">
                        <h2>Ev sahibinin konuştuğu dil</h2>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default CategoryModal