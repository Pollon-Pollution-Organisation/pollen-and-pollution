

import { GiDustCloud, GiTreeBeehive, GiDrippingHoney, GiChemicalBolt, GiPlantRoots, GiHighGrass, GiPollenDust, GiTreeBranch, GiTreehouse, } from 'react-icons/gi';
import { HiDotsVertical } from 'react-icons/hi';
import { RxDotsVertical } from 'react-icons/rx';
import { BsGlobeAmericas } from 'react-icons/bs';
import { SiMoleculer } from 'react-icons/si';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { AiOutlineExperiment, AiTwotoneExperiment } from 'react-icons/ai';
import { IconContext } from "react-icons";
import SearchBar from "./SearchBar";
import { useState, React } from 'react'
import PollenCard from './PollenCard/PollenCard';
import AirCard from './AirCard/AirCard';
import { useNavigate } from "react-router-dom";



export default function Home() {


    let navigate = useNavigate(); 
    const routeChangeAQI = () =>{ 
      let path = `/AQI`; 
      navigate(path);
    };

    const routeChangePollenType = () =>{ 
        let path = `/pollen_types`; 
        navigate(path);
      }


    const [pollenData, setPollenData] = useState(null);
    const [airQualData, setairQualData] = useState(null);
    //update state and pass as props to search bar.
    //data published {pollenData ? pollenData.city_name : 'loading'} with ternary operator for page load
    //

    
        return (

            <>
                <div>

                    <title>Allergy Tracker</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
          
    
                </div>

                <main className='bg-gray-900 px-10'>
                    <div className='min-h-screen'>
                        <section>

                            <SearchBar setPollenData={setPollenData} setairQualData={setairQualData} />
                            <PollenCard setPollenData={setPollenData} />
                            <AirCard setairQualData={setairQualData} />

                            <div className="flex justify-center">
                                <div
                                    className="block max-w-sm rounded-lg bg-yellow-400 text-center shadow-lg mx-5">
                                    <div
                                        className="border-b-2 border-black py-3 px-6">
                                        Pollen Level Today

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em", display:"inline"}}>  <GiPollenDust /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.city_name : 'Location'}
                                        </h5>
                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Highest Pollen Type: {pollenData ? pollenData.data[0].predominant_pollen_type : ''}
                                        </p>
                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Pollen Level: {pollenData ? pollenData.data[0].mold_level : ''}
                                        </p>
                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-yellow-400  hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            onClick={routeChangePollenType}
                                            >
                                            More about pollen types...
                                            
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="block max-w-sm rounded-lg bg-yellow-400 text-center shadow-lg mx-5">
                                    <div
                                        className="border-b-2 border-black py-3 px-6">
                                        Current Air Quality
                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <TiWeatherWindyCloudy /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {airQualData ? airQualData.city_name : 'Location'}
                                        </h5>
                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Overall Air Quality: {airQualData ? airQualData.data[0].aqi : ''}
                                        </p>
                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Air Level: {airQualData ? airQualData.data[0].aqi : ''}
                                        </p>


                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6 dark:border-neutral-600">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:text-yellow-400  hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            onClick={routeChangeAQI}>
                                            Air Quality Index table...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>





                        <div className=" text-3xl text-white text-center mt-10" >
                            <h2> Current Pollen Levels {pollenData ? pollenData.city_name : ''} </h2>

                        </div>


                        <div id="pollenGrid" className="grid grid-cols-4 gap-4 text-white gap-y-4 place-content-center">
                            <div>

                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">

                                    <div

                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        TREE

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  < GiTreehouse />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_tree : ''}
                                        </h5>

                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Pollen
                                    </div>
                                </div>
                            </div>






                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        WEED

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <GiPlantRoots /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_weed : ''}
                                        </h5>


                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Pollen
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        GRASS

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em", verticalAlign: 'middle' }}>   <GiHighGrass /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_grass : ''}
                                        </h5>


                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Pollen
                                    </div>
                                </div>
                            </div>




                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        MOLD

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <GiChemicalBolt /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].mold_level : ''}
                                        </h5>

                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Pollen
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div className=" text-3xl text-white text-center mt-10" >
                            <h2>Air Quality Levels</h2>

                        </div>


                        <div id="airGrid" className="grid grid-cols-5 gap-4 gap-y-4 text-white">
                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        Ozone

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  < BsGlobeAmericas />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].o3 : ''}
                                        </h5>

                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Air Quality
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        Nitrogen

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  < AiOutlineExperiment />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].no2 : ''}
                                        </h5>

                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Air Quality
                                    </div>
                                </div>
                            </div>






                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        Sulfur

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <AiTwotoneExperiment />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].so2 : ''}
                                        </h5>


                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Air Quality
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        PM10

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}> <RxDotsVertical /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pm10 : ''}
                                        </h5>


                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Air Quality
                                    </div>
                                </div>
                            </div>






                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className="border-b-2 border-black py-3 px-6 dark:border-neutral-600">
                                        PM25

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}> <HiDotsVertical /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pm25 : ''}
                                        </h5>

                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
                                        Air Quality
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main >
            </>
        )
    }
