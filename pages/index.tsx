import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero, SearchBar } from "@/Components";
import { useEffect, useState } from "react";
import { getCarsData } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import CustomFilter from "@/Components/CustomeButton/CustomFilter/CustomFilter";
import ShowMore from "@/Components/ShowMore/ShowMore";
import { CarProps, HomeProps } from "@/types";
import CarCard from "@/Components/CarCard/CarCard";

export default function Home({ searchParams }: HomeProps) {
  const [allCarsData, setAllCarsData] = useState<CarProps[]>([]);

  const isDataEmpty =
    !Array.isArray(allCarsData) || allCarsData.length < 1 || !allCarsData;
  console.log("allCarsData===>", allCarsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        let carsData: CarProps[] = await getCarsData();

 

        if (carsData && carsData.length > 0) {
          setAllCarsData(carsData);
        }
      } catch (error) {

        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="overflow-hidden ">
      <Hero />
      <div
        className="mt-12 padding-x padding-y max-width border "
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
      </div>

      <div className="home__filters max-width ">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>
      {!isDataEmpty ? (
        <section >
          <div className="home__cars-wrapper max-width">
            {allCarsData?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

         
        </section>
      ) : (
        <div className="home__error-container max-width">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
         
        </div>
      )}
    </main>
  );
}
