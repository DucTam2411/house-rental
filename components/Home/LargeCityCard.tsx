import { faker } from "@faker-js/faker/locale/vi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface ILargeCityCardProps {
    img: string;
}

export function LargeCityCard({ img }: ILargeCityCardProps) {
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        setTitle(faker.address.city());
    }, []);

    if (!title.length) {
        return <></>;
    }

    const router = useRouter();

    return (
        <div
            className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out "
            onClick={() => {
                router.push({
                    pathname: "/search",
                    query: {
                        location: "City " + title,
                        startDate: new Date().toISOString(),
                        endDate: new Date().toISOString(),
                        noOfGuest: 1,
                    },
                });
            }}
        >
            <div className="relative h-96 w-60">
                <Image
                    src={img}
                    alt={""}
                    layout="fill"
                    className="rounded-xl"
                    objectFit="cover"
                />
                <p className="text-sm font-medium  absolute left-5 top-5 py-1 px-4 bg-gray-500 text-white rounded-[50px]  bg-opacity-40">
                    {title}
                </p>
                <p className="text-2xl font-bold  absolute left-3 bottom-10 py-1 px-4  text-white">
                    {title}
                </p>

                <p className="absolute left-3 bottom-5 py-1 px-4  text-white">
                    10 popular places
                </p>
            </div>

            <h3 className="text-2xl mt-3 ">{title}</h3>
        </div>
    );
}
