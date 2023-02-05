import Image from "next/image";

export interface IMediumCardProps {
    img: string;
    title: string;
}

export function MediumCard({ img, title }: IMediumCardProps) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    src={img}
                    alt={""}
                    layout="fill"
                    className="rounded-xl"
                />
            </div>
            <h3 className="text-2xl mt-3 ">{title}</h3>
        </div>
    );
}
