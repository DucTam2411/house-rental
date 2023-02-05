import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { format } from "date-fns";
export interface ISearchPageProps {
    searchResults: any;
}

import { faker } from "@faker-js/faker";
import { InfoCard } from "../components/InfoCard";
import { NavMap } from "../components/Map";

export default function Search({ searchResults }: ISearchPageProps) {
    const router = useRouter();
    const { endDate, startDate, location, noOfGuest } = router.query;

    const formattedStartDate = format(
        new Date(startDate as string),
        "dd MMMM yy"
    );

    const formattedEndDate = format(new Date(endDate as string), "dd MMMM ");
    const range = `${formattedStartDate} -  ${formattedEndDate}`;

    return (
        <div>
            <Header
                placeholder={`${location} | ${range} | ${noOfGuest} guests`}
            />

            <main className="flex">
                <section className="flex-grow  pt-14 px-6 ">
                    <p>
                        300+ stays - {range} - for{" "}
                        <span className="text-red-400 font-semibold">
                            {noOfGuest}
                        </span>{" "}
                        number of guest
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stay in{" "}
                        <span className="text-red-400 font-semibold">
                            {location}
                        </span>
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Room and beds</p>
                        <p className="button">More filter</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map((item: any) => (
                            <InfoCard
                                {...item}
                                key={item.price}
                                routerParams={router.query}
                            />
                        ))}
                    </div>
                </section>

                <section className="xl:min-w-[600px]">
                    <NavMap searchResults={searchResults} />
                </section>
            </main>
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

const getRandomLocationPosition = () => {
    const description = `${faker.datatype.number({
        max: 8,
        min: 1,
    })} Guests ·
    ${faker.datatype.number({
        max: 8,
        min: 1,
    })} Bathrooms · 
    ${faker.datatype.number({
        max: 8,
        min: 1,
    })} Beds ·
    ${faker.datatype.number({
        max: 8,
        min: 1,
    })} Parking ·
    Washing machine · Wifi · Kitchen · Playground
    `;

    const currentSymbol = "€";

    return {
        description: description,
        img: faker.image.city(),
        lat: Number(faker.address.latitude()),
        long: Number(faker.address.longitude()),
        price: currentSymbol + " " + faker.commerce.price(10, 20) + " / night",
        star: Math.random() * 5,
        location: faker.address.streetAddress(),
        title: faker.address.cityName(),
        total: currentSymbol + " " + faker.commerce.price(10, 20),
        float: Number(faker.datatype.float({ min: -0.2, max: 2 })),
        id: faker.datatype.uuid(),
    };
};
