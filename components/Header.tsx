import Image from "next/image";
import {
    MagnifyingGlassIcon, // Search icon
    GlobeAsiaAustraliaIcon,
    Bars3Icon,
    UserCircleIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export interface IHeaderProps {
    placeholder: string;
    isFromHomePage?: boolean;
}

export function Header({ placeholder, isFromHomePage = false }: IHeaderProps) {
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

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div
                onClick={() => router.push("/")}
                className="relative flex items-center h-10 cursor-pointer my-auto"
            >
                <Image
                    src="https://links.papareact.com/qd3"
                    alt={""}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle - Search */}
            {!isFromHomePage ? (
                <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        type="text"
                        name=""
                        id=""
                        value={searchInput}
                        onChange={(event) => setSearchInput(event.target.value)}
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
                        placeholder={placeholder || "Start your search"}
                    />
                    <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
                </div>
            ) : (
                <div className="flex items-center  rounded-full py-2 md:shadow-sm"></div>
            )}

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAsiaAustraliaIcon className="h-6" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <Bars3Icon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto ">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b60e8"]}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl pl-2 flex-grow font-semibold">
                            Guest number
                        </h2>
                        <UserIcon className="h-5" />
                        <input
                            type="number"
                            name=""
                            onChange={(event) =>
                                setNoOfGuest(Number(event.target.value))
                            }
                            min={1}
                            id=""
                            value={noOfGuest}
                            className=" w-12 pl-2 text-lg outline-none text-red-400 font-semibold"
                        />
                    </div>

                    <div className="flex">
                        <button
                            className="flex-grow text-gray-500"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={search}
                            className="flex-grow text-red-300"
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
