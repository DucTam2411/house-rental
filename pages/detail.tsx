import { faker } from "@faker-js/faker";
import {
    ArrowTopRightOnSquareIcon,
    HeartIcon,
    HomeIcon,
    MapIcon,
    SparklesIcon,
    SunIcon,
    WifiIcon,
    ArchiveBoxIcon,
    BoltIcon,
    DeviceTabletIcon,
    CameraIcon,
    FilmIcon,
} from "@heroicons/react/24/outline";
import {
    ArrowsPointingOutIcon,
    ShieldCheckIcon,
    StarIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { format, isValid } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { DateRange } from "react-date-range";
import Map from "react-map-gl";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ImageLibrary } from "../components/ImageLibrary";
import { IconItem } from "../components/ItemIcon";
import { NavMap } from "../components/Map";
import { ReviewBar } from "../components/ReviewBar";
import { ReviewItem } from "../components/ReviewItem";
import photos from "../data/photo";
export interface IDetailProps {}

export default function Detail(props: IDetailProps) {
    const router = useRouter();
    const { location, city, price = 100 } = router.query;
    console.log(
        "🚀 TAM ~ file: detail.tsx:33 ~ Detail ~ router.query",
        router.query
    );

    const [startDate, setStartDate] = React.useState(() => {
        const isDateValid = isValid(new Date(router.query.startDate as any));
        if (isDateValid) {
            return new Date(router.query.startDate as any);
        }
        return new Date();
    });
    const [endDate, setEndDate] = React.useState(() => {
        const isDateValid = isValid(new Date(router.query.endDate as any));
        if (isDateValid) {
            return new Date(router.query.startDate as any);
        }
        return new Date();
    });
    const [noOfGuest, setNoOfGuest] = React.useState(
        router.query.noOfGuest ?? 2
    );

    const selectionRange = {
        startDate,
        endDate,
        key: "selection",
    };
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const [viewport, setViewport] = React.useState({
        latitude: 37,
        longitude: -122,
        zoom: 8,
        width: "100%",
        height: "100%",
    });

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");

    const formattedEndDate = format(new Date(endDate), "dd MMMM ");
    const range = `${formattedStartDate} -  ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={""} />

            {/* Section title */}
            <section className="mx-[100px] mt-[40px]">
                <div className="flex-row m-5">
                    <h2 className=" text-5xl ">{location}</h2>
                    <div className="flex flex-column justify-between">
                        {/* Title, host */}
                        <div className="flex mt-5">
                            <div className="flex ">
                                <StarIcon className="h-5 text-rose-500 mr-2" />
                                <h5>4.8</h5>
                            </div>
                            <span className="ml-2 mr-2">·</span>

                            <div className="flex">
                                <h5 className="underline underline-offset-[3px]">
                                    7 reviews
                                </h5>
                            </div>
                            <span className="ml-2 mr-2">·</span>

                            <div className="flex ">
                                <UserIcon className="h-5 text-rose-500 mr-2" />
                                <h5>Superhost</h5>
                            </div>
                            <span className="ml-2 mr-2">·</span>

                            <div className="flex ">
                                <h5 className="text-gray-500 underline underline-offset-[3px]">
                                    {location}, {city}
                                </h5>
                            </div>
                        </div>

                        <div className="flex mt-5">
                            <div className="flex mr-5 ">
                                <ArrowTopRightOnSquareIcon className="h-5 font-medium mr-2" />
                                <h5 className="font-medium">Share</h5>
                            </div>

                            <div className="flex mr-5 ">
                                <HeartIcon className="h-5 font-medium mr-2" />
                                <h5 className="font-medium">Save</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageLibrary photo={photos} />
            </section>

            <section>
                {/* Content part */}
                {/* Grid 3 cols */}
                <div className="mt-8 mx-[120px] grid grid-cols-3">
                    {/* Author part */}
                    <div className="flex col-span-2 relative pr-10">
                        <div className="flex-grow">
                            <h3 className="text-2xl">
                                Entire rental unit hosted by Hanh Ngo
                            </h3>
                            <div className="tracking-[2px] text-gray-600 mt-2">
                                2 guests · 1 bedrooms · 1 bed · 1 bath{" "}
                            </div>
                            {/* Items feature */}
                            <div className="mt-5 border-t border-b">
                                <div className="py-5">
                                    <div className="flex  items-start">
                                        <div className="mt-2">
                                            <HomeIcon className="h-6" />
                                        </div>
                                        <div className="flex  flex-col ml-5">
                                            <div className="text-xl font-medium">
                                                Entire home
                                            </div>
                                            <div className="text-slate-500">
                                                You will have all the space you
                                                need
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mt-5">
                                        <div className="mt-2">
                                            <SparklesIcon className="h-6" />
                                        </div>
                                        <div className="flex  justify-center flex-col ml-5">
                                            <div className="text-xl font-medium">
                                                Enhanced Clean
                                            </div>
                                            <div className="text-slate-500">
                                                This Host committed to Airbnb’s
                                                5-step enhanced cleaning
                                                process.{" "}
                                                <span className="font-bold cursor-pointer">
                                                    {" "}
                                                    Show more
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mt-5">
                                        <div className="mt-2">
                                            <MapIcon className="h-6" />
                                        </div>
                                        <div className="flex  justify-center flex-col ml-5">
                                            <div className="text-xl font-medium">
                                                Self check-in
                                            </div>
                                            <div className="text-slate-500">
                                                Check yourself in with the
                                                keypad.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mt-5">
                                        <div className="">
                                            <MapIcon className="h-6" />
                                        </div>
                                        <div className="flex  justify-center flex-col ml-5">
                                            <div className="text-xl font-medium">
                                                Free cancellation before Feb 14
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Description */}
                            <div className="my-5 ">
                                <p className="text-lg">
                                    Come and stay in this superb duplex T2, in
                                    the heart of the historic center of
                                    Bordeaux. Spacious and bright, in a real
                                    Bordeaux building in exposed stone, you will
                                    enjoy all the charms of the city thanks to
                                    its ideal location. Close to many shops,
                                    bars and restaurants, you can access the
                                    apartment by tram A and C and bus routes 27
                                    and 44.
                                    <br />
                                    ...
                                    <br />
                                    <span className="cursor-pointer font-bold">
                                        Show more {">"}
                                    </span>
                                </p>
                            </div>
                            {/*  Where will you sleep */}
                            <div className="my-5 border-t pt-5 cursor-pointer">
                                <p className="text-3xl font-medium">
                                    Where you’ll sleep{" "}
                                </p>
                                <Image
                                    src="/bedroom.png"
                                    alt=""
                                    className="mt-3"
                                    width={300}
                                    height={300}
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                                <p className="mt-1 text-lg font-medium">
                                    Bedroom
                                </p>
                                <p className="font-light text-gray-500">
                                    1 queen bed
                                </p>
                            </div>
                            {/*  What this place offer */}
                            <div className="my-5 border-t pt-5 cursor-pointer">
                                <p className="text-3xl font-medium">
                                    What this place offers
                                </p>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <IconItem text="Garden view">
                                            <SunIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="Wifi">
                                            <WifiIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="Free washer - in building">
                                            <ArchiveBoxIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="Refrigerator">
                                            <DeviceTabletIcon className="h-8" />
                                        </IconItem>
                                    </div>
                                    <div>
                                        <IconItem text="Kitchen">
                                            <HomeIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="HBO and Netflix">
                                            <FilmIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="Transportation">
                                            <ArrowsPointingOutIcon className="h-8" />
                                        </IconItem>

                                        <IconItem text="Security cameras on property">
                                            <CameraIcon className="h-8" />
                                        </IconItem>
                                    </div>
                                </div>
                                <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200 ease-out">
                                    Show all 37 amenities
                                </button>
                            </div>

                            {/*  7 night  */}
                            <div className="my-5 border-t pt-5  align-middle">
                                <p className="text-3xl font-medium ">
                                    7 nights in New York
                                </p>
                                <p className="text-slate-500">
                                    {`${location} | ${range} | ${noOfGuest} guests`}
                                </p>
                                <DateRange
                                    months={2}
                                    showDateDisplay={false}
                                    direction="horizontal"
                                    rangeColors={["#fd5b60e8"]}
                                    color="#000"
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                />
                            </div>
                        </div>

                        <div className="flex-none absolute right-4">
                            {/*  Avatar  */}
                            <Image
                                src="https://picsum.photos/800"
                                alt={""}
                                width={50}
                                height={50}
                                style={{ borderRadius: 50 }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="ml-5 border p-6 shadow-lg rounded">
                            <div className="flex items-center justify-between">
                                {/* Title and price */}
                                <p className="text-2xl">{price}＄/ night</p>
                                <div>
                                    <div className="flex ">
                                        <div className="flex ">
                                            <StarIcon className="h-5 text-rose-500 mr-2" />
                                            <h5>4.8</h5>
                                        </div>
                                        <span className="ml-2 mr-2">·</span>

                                        <div className="flex">
                                            <h5 className="underline underline-offset-[3px]">
                                                7 reviews
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 border rounded grid grid-cols-2">
                                <div className="p-3 border-r">
                                    <p className="font-bold">CHECK IN</p>
                                    <p className="text-gray-500">
                                        {format(startDate, "dd/mm/yyyy")}
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p className="font-bold">CHECK IN</p>
                                    <p className="text-gray-500">
                                        {format(startDate, "dd/mm/yyyy")}
                                    </p>
                                </div>
                                <div className=" p-3 col-span-2 border-t">
                                    <p className="font-bold">GUESTS</p>

                                    <select
                                        name="cars"
                                        id="cars"
                                        className="w-full py-2"
                                        value={noOfGuest}
                                        onChange={(element) =>
                                            setNoOfGuest(
                                                element.currentTarget.value
                                            )
                                        }
                                    >
                                        <option value={1}>1 guest</option>
                                        <option value={2}>2 guests</option>
                                        <option value={3}>3 guests</option>
                                        <option value={4}>4 guests</option>
                                    </select>
                                </div>
                            </div>

                            <button className="bg-red-500 w-full mt-5 p-2 rounded text-white transition duration-200 ease-out hover:opacity-25 active:bg-white">
                                <a href="https://checkoutpage.co/c/plan/house">
                                    Reserve
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" mx-[120px]  mt-5 border-t"></div>

                {/* Section */}
                <div className="mx-[120px]  my-5  pt-5  align-middle">
                    <div className="flex items-center">
                        <StarIcon className="h-6 mt-[-5px] mr-2 text-red-400" />
                        <p className="text-3xl font-medium ">
                            5.0 · 37 reviews
                        </p>
                    </div>

                    {/* Reviews */}
                    <div className="mb-5">
                        <div className="mt-3 grid grid-cols-2 grid-flow-col gap-5">
                            <div>
                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Cleanliness</p>
                                    <ReviewBar value={40} score="5.0" />
                                </div>

                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Communication</p>
                                    <ReviewBar value={40} score="5.0" />
                                </div>

                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Check-in</p>
                                    <ReviewBar value={32} score="4.7" />
                                </div>

                                <div className="mt-10">
                                    <ReviewItem hasButton={true} />
                                    <ReviewItem hasButton={true} />
                                    <ReviewItem hasButton={true} />
                                </div>
                            </div>

                            <div>
                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Accuracy</p>
                                    <ReviewBar value={40} score="5.0" />
                                </div>

                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Location</p>
                                    <ReviewBar value={40} score="5.0" />
                                </div>

                                <div className=" flex items-center justify-between my-4 mr-40">
                                    <p className="text-lg">Value</p>
                                    <ReviewBar value={40} score="5.0" />
                                </div>

                                <div className="mt-10">
                                    <ReviewItem hasButton={true} />
                                    <ReviewItem hasButton={true} />
                                    <ReviewItem hasButton={true} />
                                </div>
                            </div>
                        </div>

                        <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200 ease-out">
                            Show all 37 comments
                        </button>
                    </div>

                    <div className="mt-5 pt-5 border-t ">
                        <p className="text-3xl font-medium">Where you'll be</p>
                        <div className="mt-5 w-full h-60 rounded">
                            <NavMap searchResults={[]} />
                            <p className="mt-5 mb-2 text-xl font-bold">
                                {location}
                            </p>

                            <p className="mb-2">
                                Very dynamic and appreciated district by the
                                people of Bordeaux thanks to rue St James and
                                place Fernand Lafargue. Home to many historical
                                monuments such as the Grosse Cloche, the Porte
                                de Bourgogne and the Porte Cailhau, and cultural
                                sites such as the Aquitaine Museum.
                            </p>
                            <span className="cursor-pointer underline underline-offset-4 font-bold mt-10 pt-10">
                                Show more
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section host */}
            <section className="mx-[120px] mt-[170px] border-t border-spacing-0 pt-7">
                <div className="flex items-start">
                    <Image
                        src="https://picsum.photos/800"
                        alt={""}
                        width={50}
                        height={50}
                        style={{ borderRadius: 50 }}
                    />
                    <div className="ml-5">
                        <p className=" text-xl font-semibold">
                            Hosted by Hanh Ngo
                        </p>
                        <p className="text-gray-500">Joined May 2019</p>
                    </div>
                </div>
                {/* Icon part */}
                <div className="flex mt-5">
                    <div className="flex ">
                        <StarIcon className="h-5 text-rose-500 mr-2" />
                        <h5>4.8</h5>
                    </div>

                    <span className="ml-2 mr-2">·</span>

                    <div className="flex ">
                        <UserIcon className="h-5 text-rose-500 mr-2" />
                        <h5>Superhost</h5>
                    </div>
                    <span className="ml-2 mr-2">·</span>

                    <div className="flex ">
                        <ShieldCheckIcon className="h-5 text-rose-500 mr-2" />
                        <h5>Verified</h5>
                    </div>
                </div>

                <p className="my-5 font-semibold">Ghazal is a Superhost</p>

                <div className="text-gray-600">
                    <p className="max-w-xl">
                        Superhosts are experienced, highly rated hosts who are
                        committed to providing great stays for guests.
                    </p>
                    <br />
                    <p>
                        <span className="font-bold"> Response time: </span>{" "}
                        within an hour
                    </p>
                    <button className="mt-5 mb-10 border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200 ease-out">
                        Contact host
                    </button>
                </div>
            </section>
            <section>
                <Footer />
            </section>
            <div></div>
        </div>
    );
}
