import { useRouter } from "next/router";
import * as React from "react";
import { FavoriteCard } from "../components/FavoriteCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SmallPlaceItem } from "../components/Home/SmallPlaceItem";
import { InfoCard } from "../components/InfoCard";
import { getRandomLocationPosition } from "./search";

export interface IFavoriteScreenProps {
    searchResults: any;
}

export default function FavoriteScreen(props: IFavoriteScreenProps) {
    const router = useRouter();

    return (
        <div>
            <Header placeholder={"Explore new places"} />

            <div className=" mt-20 mb-6 ml-20">
                <h1 className=" text-3xl font-semibold">Favorite</h1>
                <p>Checkout your favorite locations</p>
            </div>

            {/* Get all new place */}
            <div className="flex flex-col mx-20 border rounded-lg">
                {props.searchResults.map((item: any) => (
                    <FavoriteCard
                        {...item}
                        key={item.price}
                        favorite={true}
                        realPrice={item.realPrice}
                        currency={item.currency}
                        routerParams={router.query}
                    />
                ))}
            </div>

            <section className="pt-10 mx-20 mb-10">
                <h2 className="text-4xl font-semibold ">
                    {" "}
                    <span className="text-[#4794FF]"> Similar</span> places
                </h2>
                <p className="pb-5">Interesting place which you may like</p>

                <div className=" flex  justify-between">
                    <SmallPlaceItem />
                    <SmallPlaceItem />
                    <SmallPlaceItem />
                    <SmallPlaceItem />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export async function getServerSideProps() {
    const searchResults = [
        getRandomLocationPosition(),
        getRandomLocationPosition(),
        getRandomLocationPosition(),
        getRandomLocationPosition(),
        getRandomLocationPosition(),
    ];

    return {
        props: {
            searchResults,
        },
    };
}
