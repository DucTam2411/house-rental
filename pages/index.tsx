import Head from "next/head";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LargeCityCard } from "../components/Home/LargeCityCard";
import { SmallPlaceItem } from "../components/Home/SmallPlaceItem";
import { LargeCard } from "../components/LargeCard";
import { IMediumCardProps, MediumCard } from "../components/MediumCard";
import { ISmallCardProps } from "../components/SmallCard";

interface Props {
    exploreData: ISmallCardProps[];
    cardData: IMediumCardProps[];
}

const Home = ({ exploreData, cardData }: Props) => {
    return (
        <div className="">
            <Head>
                <title>UIT AirBnB</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header placeholder={""} isFromHomePage={true} />

            {/* Banner */}
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                {/* Explore the world */}
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    <div className=" flex  justify-between">
                        <SmallPlaceItem />
                        <SmallPlaceItem />
                        <SmallPlaceItem />
                        <SmallPlaceItem />
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>

                    <div className="flex space-x-3 overflow-auto scrollbar-hide p-3 -ml-3">
                        {cardData &&
                            cardData.map((item: IMediumCardProps) => (
                                <MediumCard key={item.img} {...item} />
                            ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold pt-8 pb-3 ">
                        Trending cities
                    </h2>
                    <p className="mb-4 text-gray-500">
                        The most searched for cities{" "}
                    </p>

                    <div className="flex space-x-10 overflow-auto scrollbar-hide p-3 -ml-3">
                        {cardData &&
                            cardData.map((item: IMediumCardProps) => (
                                <LargeCityCard key={item.img} {...item} />
                            ))}
                    </div>
                </section>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Whitelists curated by Airbnb"
                    buttonText="Get Inspired"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const exploreData: ISmallCardProps[] = [
        {
            img: "https://links.papareact.com/5j2",
            location: "London",
            distance: "45-minute drive",
        },

        {
            img: "https://links.papareact.com/1to",
            location: "Manchester",
            distance: "4.5-hour drive",
        },

        {
            img: "https://links.papareact.com/40m",
            location: "York",
            distance: "4.5-hour drive",
        },

        {
            img: "https://links.papareact.com/msp",
            location: "Cardiff",
            distance: "45-minute drive",
        },
        {
            img: "https://links.papareact.com/2k3",
            location: "Birkenhead",
            distance: "45-minute drive",
        },

        {
            img: "https://links.papareact.com/41m",
            location: "Hove",
            distance: "2-hour drive",
        },

        {
            img: "https://links.papareact.com/5j2",
            location: "London",
            distance: "45-minute drive",
        },

        {
            img: "https://links.papareact.com/1to",
            location: "Manchester",
            distance: "4.5-hour drive",
        },
    ];

    const cardData: IMediumCardProps[] = [
        {
            img: "https://links.papareact.com/2io",
            title: "Outdoor getaways",
        },

        {
            img: "https://links.papareact.com/q7j",
            title: "Unique stays",
        },

        {
            img: "https://links.papareact.com/s03",
            title: "Entire homes",
        },

        {
            img: "https://links.papareact.com/8ix",
            title: "Pet allowed",
        },
    ];

    return {
        props: {
            exploreData,
            cardData,
        },
    };
}
