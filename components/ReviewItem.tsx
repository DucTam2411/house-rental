import { faker } from "@faker-js/faker";
import Image from "next/image";
import * as React from "react";

export interface IReviewItemProps {
    hasButton: boolean;
}

export function ReviewItem(props: IReviewItemProps) {
    const seed = Math.round(Math.random() * 1000);
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        setContent(faker.commerce.productDescription());
    });

    return (
        <div className="mb-10">
            <div className="flex items-center">
                <div className="mr-5">
                    <Image
                        src={`https://picsum.photos/seed/${seed}/400`}
                        alt={""}
                        width={50}
                        height={50}
                        style={{ borderRadius: 50 }}
                    />
                </div>

                <div>
                    <p className="font-bold"> Hello</p>
                    <p className="text-gray-400">December 2020</p>
                </div>
            </div>

            <p className="mt-4">{content}</p>

            {content.length > 70 && (
                <button className="mt-1 underline  font-bold  underline-offset-4">
                    Show more
                </button>
            )}
        </div>
    );
}
