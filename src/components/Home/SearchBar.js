import React from 'react';
import { useState, useEffect } from 'react'
import {LatLongAPI} from "../../utils/latLong"
import {PollenAPI} from "../../utils/pollenAPI"
import {AirAPI} from "../../utils/airAPI"


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
                <h3 className='text-3xl py-5 text-gray-600 font-medium'>
                    Enter location here
                </h3>
            </div>
            <div className="flex justify-center">
                <div className="text-xs mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input 
                            type="search"
                            className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Search"
                            id='searchBar'
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={handleInput}
                        />
                        <span
                            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                            id="basic-addon2">
                            <button className="px-4 py-4 text-black text-center bg-yellow-400 rounded-full " onClick={logValue}> Search
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

