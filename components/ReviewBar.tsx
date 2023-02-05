import * as React from "react";

export interface IReviewBarProps {
    value: number;
    score: string;
}

export function ReviewBar(props: IReviewBarProps) {
    return (
        <div className="relative ">
            <div className={`h-1 w-40  bg-gray-200`} />
            <div className={`h-1 w-${props.value} bg-black absolute top-0`} />
            <p className="absolute -right-8  -top-2"> {props.score} </p>
        </div>
    );
}
