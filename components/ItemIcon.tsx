import * as React from "react";

export interface IIconItemProps {
    children: any;
    text: string;
}

export function IconItem(props: IIconItemProps) {
    return (
        <div className="my-5 flex items-center">
            <div className="mr-4">{props.children}</div>
            <p className="text-md">{props.text}</p>
        </div>
    );
}
