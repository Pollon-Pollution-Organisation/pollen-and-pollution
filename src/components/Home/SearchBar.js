import React from 'react';
import { useState, useEffect } from 'react'
import {LatLongAPI} from "../../utils/latLong"
import {PollenAPI} from "../../utils/pollenAPI"
import {AirAPI} from "../../utils/airAPI"
import { GiTreeBeehive, GiDrippingHoney, GiBeehive } from 'react-icons/gi';
import { IconContext } from "react-icons";

export default function SearchBar(props) {
    //props passed in from home.js

    const [searchQuery, setsearchQuery] = useState(null)

    const handleInput = event => {
        setsearchQuery(event.target.value);
    };

    const logValue = () => {
        console.log(searchQuery);
        LatLongAPI(searchQuery).then(function(response) {
            
           let long = response.data[0].lon
           let lat = response.data[0].lat
           console.log(lat)
           console.log(long)

            PollenAPI(long, lat, props.setPollenData)
            AirAPI(long, lat, props.setairQualData)
        })

      };


    return (
        <>
            <div className="flex justify-center">
                <h3 className='text-4xl py-3.5 text-white'>
                    Enter location here
                </h3>
            </div>
            <div className="flex justify-center">
                <div className=" mb-1 xl:w-96">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input 
                            type="search"
                            className="relative m-0 block w-[5%] min-w-5 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Search"
                            id='searchBar'
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={handleInput}
                        />
                        <span
                            className="input-group-text flex items-center whitespace-nowrap rounded px-2 text-base text-neutral-700 dark:text-neutral-200"
                            id="basic-addon2">

                            <button className="px-4 py-4 text-black text-center bg-yellow-400  border-yellow-400 rounded-full hover:text-yellow-400  hover:bg-black  hover:shadow-[0_8px_9px_-4px_rgba(255,255,0,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" onClick={logValue}> 

                            <IconContext.Provider value={{size: "3em"}}>  <GiDrippingHoney /></IconContext.Provider>
                             
                            </button>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

