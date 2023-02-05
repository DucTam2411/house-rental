import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";

export interface IInfoCardProps {
    img: string;
    title: string;
    description: string;
    star: number;
    price: string;
    location: string;
    total: string;

    routerParams: any;
}

export function InfoCard(props: IInfoCardProps) {
    const router = useRouter();

    return (
        <div
            className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t "
            onClick={() => {
                router.push({
                    pathname: "/detail",
                    query: {
                        location: props.location,
                        city: props.title,
                        ...props.routerParams,
                        price: props.price,
                    },
                });
            }}
        >
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={props.img}
                    alt={""}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex  justify-between ">
                    <p>{props.location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl font-bold">{props.title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">
                    {props.description}
                </p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400 mr-1" />
                        {props.star.toPrecision(3)}
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2 ">
                            {props.price}
                        </p>
                        <p className="text-right font-extralight">
                            {props.total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
