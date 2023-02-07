import { BuildingLibraryIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { getRandomLocationPosition } from "../../pages/search";

export interface ISmallPlaceItemProps {}

export function SmallPlaceItem(props: ISmallPlaceItemProps) {
    const [place, setPlace] = React.useState<any>(undefined);

    React.useEffect(() => {
        const newPlace = {
            ...getRandomLocationPosition(),
            star: (Math.random() + 4).toPrecision(2),
        };
        setPlace(newPlace);
    }, []);

    if (!place) {
        return <></>;
    }
    const router = useRouter();

    return (
        <div
            className="border rounded-2xl w-64 p-3 cursor-pointer hover:shadow-xl hover:scale-105  transition duration-300 ease-out"
            onClick={() => {
                router.push({
                    pathname: "/detail",
                    query: {
                        ...place,
                    },
                });
            }}
        >
            <div className="relative h-40 bg-white ">
                <Image
                    src={place.img}
                    alt={""}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl relative"
                />
            </div>
            {/* Star and review */}
            <div className="flex mt-5">
                <div className="flex ">
                    <StarIcon className="h-5 text-[#4794FF] mr-2" />
                    <h5>{place.star}</h5>
                </div>
                <span className="ml-2 mr-2">·</span>

                <div className="flex">
                    <h5 className="underline underline-offset-[3px]">
                        {place.review} reviews
                    </h5>
                </div>
            </div>

            <div className="mt-4 mb-2">
                <p className="font-semibold text-xl"> {place.location}</p>
                <p className="mt-1 text-gray-500">
                    {" "}
                    {place.km}km from Town Center{" "}
                </p>
                <div className="flex items-center  mt-3 -ml-1 text-gray-500">
                    <MapPinIcon className="h-6 mr-2" />
                    <p>{place.title}</p>
                </div>

                <div className="flex item-center  mt-2 -ml-1 text-gray-500">
                    <BuildingLibraryIcon className="h-6 mr-2" />
                    <p>
                        Rooms available: {Math.round(Math.random() * 200) + 100}
                    </p>
                </div>
            </div>
        </div>
    );
}
