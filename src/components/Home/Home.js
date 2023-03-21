import { GiDrippingHoney, } from "react-icons/gi";


import SearchBar from "./SearchBar";
import { useState, React } from 'react'


export default function Home() {
    const [pollenData, setPollenData] = useState(null);
    const [airQualData, setairQualData] = useState(null);
    //update state and pass as props to search bar.
    //data published {pollenData ? pollenData.city_name : 'loading'} with ternary operator for page load
    //

    return (
        <>
            <div>
                <title>George's Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </div>

            <main className='bg-gray-900 px-10'>
                <div className='min-h-screen'>
                    <section>


                        <SearchBar setPollenData={setPollenData} setairQualData={setairQualData} />

                        <div className="flex justify-center">
                            <div
                                className="block max-w-sm rounded-lg bg-yellow-400 text-center shadow-lg mx-5">
                                <div
                                     className="border-b-2 border-black py-3 px-6">
                                    Pollen Level Today

                                </div>
                                <div className="p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                        {pollenData ? pollenData.city_name : 'Location'}
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 ">
                                   Overall Pollen Level: {pollenData ? pollenData.data[0].mold_level : ''}
                                    </p>
                                    <p className="mb-4 text-base text-neutral-600 ">
                                   Highest Pollen Type: {pollenData ? pollenData.data[0].predominant_pollen_type : ''}
                                    </p>
                                </div>
                                <div
                                    className="border-t-2 border-black py-3 px-6">
                                     <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        More about pollen types...
                                    </button>
                                </div>
                            </div>

                            <div
                                className="block max-w-sm rounded-lg bg-yellow-400 text-center shadow-lg mx-5">
                                <div
                                    className="border-b-2 border-black py-3 px-6">
                                    Air Quality
                                </div>
                                <div className="p-6">
                                    <h5
                                        className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                        {airQualData ? airQualData.city_name : 'Location'}
                                    </h5>
                                    <p className="mb-4 text-base text-neutral-600 ">
                                   Overall Air Quality: {airQualData ? airQualData.data[0].aqi : ''}
                                    </p>
                                    <p className="mb-4 text-base text-neutral-600 ">
                                   Overall Air Quality: {airQualData ? airQualData.data[0].aqi : ''}
                                    </p>
                                    
                                   
                                </div>
                                <div
                                    className="border-t-2 border-black py-3 px-6 dark:border-neutral-600">
                                        <button
                                        type="button"
                                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Air Quality Index table...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}
