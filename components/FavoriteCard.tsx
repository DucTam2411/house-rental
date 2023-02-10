import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

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

    realPrice: number;
    currency: string;
    routerParams: any;

    favorite?: boolean;
}

export function FavoriteCard(props: IInfoCardProps) {
    const router = useRouter();

    return (
        <>
            <div
                className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t "
                onClick={() => {
                    router.push({
                        pathname: "/detail",
                        query: {
                            ...props.routerParams,
                            locationSearch: props.location,
                            location: props.location,
                            city: props.title,
                            realPrice: props.realPrice,
                            currency: props.currency,
                            price: props.price,
                        },
                    });
                }}
            >
                <div className="relative ml-10 h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                    <Image
                        src={props.img}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>

                <div className="flex flex-col flex-grow pl-5 mr-10">
                    <div className="flex  justify-between ">
                        <p>{props.title}</p>
                        {props.favorite && props.favorite == true ? (
                            <HeartIconSolid
                                className="h-7 cursor-pointer "
                                color="#4794FF"
                            />
                        ) : (
                            <HeartIcon className="h-7 cursor-pointer" />
                        )}
                    </div>

                    <h4 className="text-xl font-bold">{props.location}</h4>

                    <div className="border-b w-10 pt-2" />

                    <p className="pt-2 text-sm text-gray-500 flex-grow">
                        {props.description}
                    </p>

                    <div className="flex justify-between items-end pt-5">
                        <p className="flex items-center text-xl">
                            <StarIcon className="h-5 text-[#4794FF] mr-1" />
                            {props.star}
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
        </>
    );
}
