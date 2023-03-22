

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



export default function Home() {
    const [pollenData, setPollenData] = useState(null);
    const [airQualData, setairQualData] = useState(null);
    //update state and pass as props to search bar.
    //data published {pollenData ? pollenData.city_name : 'loading'} with ternary operator for page load
    //

    const airLevel = () => {
        if (airQualData.data[0].aqi < 50) {
            return <div>GOOD</div>
        } else if (airQualData.data[0].aqi < 100) {
            return <div>MODERATE</div> 
        } else if (airQualData.data[0].aqi < 150) {
            return <div>NOT GOOD</div> 
        } else if (airQualData.data[0].aqi < 200) {
            return <div>BAD</div>
        } else if (airQualData.data[0].aqi < 250 ) {
            return <div>UNHEALTHY</div>
        } else {
            return <div>HAZARDOUS</div>
        }
    }

    const pollenLevel = () => {
        if (pollenData.data[0].mold_level == 1) {
            return <div>LOW</div>
        } else if (pollenData.data[0].mold_level == 2) {
            return<div>MEDIUM</div>
        } else if (pollenData.data[0].mold_level == 3) {
            return <div>HIGH</div>
        } else {
            return <div>VERY HIGH</div>
        }
    }
    
        return (

            <>
                <div>


                    <title>PollenPals</title>

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
                                        className="border-b-2 border-black py-3 px-6 text-xl">
                                        Pollen Level Today

                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <GiPollenDust /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-black">
                                            {pollenData ? pollenData.city_name : 'Location'}
                                        </h5>
                                        <p className="mb-4 text-base text-black ">
                                            Highest Pollen Type: {pollenData ? pollenData.data[0].predominant_pollen_type : ''}
                                        </p>

                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Pollen Level: {pollenData ? pollenLevel() : ''}

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
                                        className="border-b-2 border-black py-3 px-6 text-xl">
                                        Current Air Quality
                                    </div>
                                    <div className="p-6">
                                        <IconContext.Provider value={{ size: "3em" }}>  <TiWeatherWindyCloudy /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-black">
                                            {airQualData ? airQualData.city_name : 'Location'}
                                        </h5>
                                        <p className="mb-4 text-base text-black ">
                                            Overall Air Quality: {airQualData ? airQualData.data[0].aqi : ''}
                                        </p>

                                        <p className="mb-4 text-base text-neutral-600 ">
                                            Air Level: {airQualData ? airLevel() : ''}
                                        </p>
                                    </div>
                                    <div
                                        className="border-t-2 border-black py-3 px-6">
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





                        <div className=" text-3xl text-white text-center mt-10" >
                            <h2> Current Pollen Levels {pollenData ? pollenData.city_name : ''} </h2>
                        </div>


                        <div id="pollenGrid" className="grid grid-cols-4 gap-4  text-white gap-y-4 place-content-center">
                            <div>

                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10 ">

                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6 ">
                                        Tree
                                    </div>


                                    <div className=" text-black justify-center p-3 text-s ">
                                        <IconContext.Provider value={{ size: "3em" }}>  < GiTreehouse />  </IconContext.Provider>


                                        <h5
                                            className="mb-2  text-3xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_tree : ''}
                                            
                                        </h5>

                                    </div>
                                </div>
                            </div>






                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Weed
                                    </div>
                                    <div className=" text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}>  <GiPlantRoots /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_weed : ''}
                                        </h5>


                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Grass
                                    </div>
                                    <div className=" text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em", verticalAlign: 'middle' }}>   <GiHighGrass /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pollen_level_grass : ''}
                                        </h5>


                                    </div>
                                </div>
                            </div>




                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Mold
                                    </div>
                                    <div className=" text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}>  <GiChemicalBolt /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].mold_level : ''}
                                        </h5>

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
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Ozone
                                    </div>
                                    <div className=" text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}>  < BsGlobeAmericas />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].o3 : ''}
                                        </h5>
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Nitrogen

                                    </div>
                                    <div className="text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}>  < AiOutlineExperiment />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].no2 : ''}
                                        </h5>
                                    </div>
                                </div>
                            </div>






                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        Sulfur

                                    </div>
                                    <div className="text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}>  <AiTwotoneExperiment />  </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].so2 : ''}
                                        </h5>
                                    </div>
                                </div>
                            </div>





                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        PM10

                                    </div>
                                    <div className="text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}> <RxDotsVertical /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pm10 : ''}
                                        </h5>


                                    </div>
                                </div>
                            </div>




                            <div>
                                <div
                                    className="block max-w-xs rounded-lg bg-yellow-400 text-center shadow-lg mx-5 my-10">
                                    <div
                                        className=" text-2xl text-black border-b-2 border-black py-1 px-6">
                                        PM25

                                    </div>
                                    <div className="text-black text-center p-3 text-s">
                                        <IconContext.Provider value={{ size: "3em" }}> <HiDotsVertical /> </IconContext.Provider>
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                            {pollenData ? pollenData.data[0].pm25 : ''}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main >
            </>
        )
    }
