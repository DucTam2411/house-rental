import Image from "next/image";
import * as React from "react";

export interface IBannerProps {}

export function Banner(props: IBannerProps) {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="/bg-3.jpg"
                layout="fill"
                alt={""}
                objectFit="cover"
                objectPosition="center"
            />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">
                    Not sure where to go? Perfect.
                </p>
                <button className="text-red-500 bg-white rounded-full px-10 py-4 shadow-lg font-bold hover:shadow-xl active:scale-90 transition duration-150">
                    Checkout
                </button>
            </div>
        </div>
    );
}
