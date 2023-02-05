import Image from "next/image";
import * as React from "react";
import PhotoAlbum from "react-photo-album";

export interface IImageLibraryProps {
    photo: any;
}

export function ImageLibrary(props: IImageLibraryProps) {
    return (
        <div className="rounded-lg mx-5">
            {/* <PhotoAlbum layout="rows" photos={props.photo} /> */}
            <Image src={"/grid.png"} alt={""} width={1100} height={200} />
        </div>
    );
}
