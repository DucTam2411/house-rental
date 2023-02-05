import {
    MagnifyingGlassIcon,
    UserIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

export interface IBannerProps {}

export function Banner(props: IBannerProps) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();
    const [noOfGuest, setNoOfGuest] = useState(1);

    const selectionRange = {
        startDate,
        endDate,
        key: "selection",
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuest,
            },
        });
    };
    const noOfGuestArr = Array.from(Array(5).keys());
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="/bg-home-2.jpg"
                layout="fill"
                alt={""}
                objectFit="cover"
                objectPosition="center"
            />

            <div className="absolute top-1/2 w-1/4 left-32">
                <p className="text-5xl font-bold text-white ">
                    Find The Best Hotels For You
                </p>

                {/* Number of guest */}
                <div className="mt-5 flex items-center bg-gray-500 bg-opacity-50 border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        type="number"
                        name=""
                        id=""
                        value={noOfGuest !== 0 ? noOfGuest : undefined}
                        onChange={(event) => {
                            // alert(event.target.value.split(" ")[0]);
                            const num = Number(
                                event.target.value.split(" ")[0].trim()
                            );
                            console.log(
                                "🚀 TAM ~ file: Banner.tsx:75 ~ Banner ~ nump -",
                                num
                            );
                            setNoOfGuest(Number(num));
                        }}
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-white placeholder-gray-400 guest"
                        placeholder={"Number of guest"}
                        list="citynames"
                    />
                    {noOfGuest !== 0 && <p className="text-white">Guests</p>}

                    <datalist id="citynames">
                        {noOfGuestArr.map((item) => (
                            <option value={item} />
                        ))}
                    </datalist>
                    <UsersIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
                </div>

                {/* Middle - Search */}
                <div className="mt-5 flex items-center bg-gray-500 bg-opacity-50 border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        type="text"
                        name=""
                        id=""
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-white placeholder-gray-400"
                        placeholder={"Place you want to go"}
                    />

                    <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto absolute right-32 top-[20%]">
                    <DateRangePicker
                        className=" datepicker-in-search"
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b60e8"]}
                        onChange={handleSelect}
                    />

                    <div className="flex border mt-5 h-12 rounded-3xl overflow-hidden">
                        <button
                            className="flex-grow text-white bg-gray-500 bg-opacity-60"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={search}
                            className="flex-grow bg-red-400  text-white"
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
