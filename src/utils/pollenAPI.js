import axios from "axios";
import { useState, useEffect } from 'react'

const lilKey = "6293641afdmshf1dda5cd5fe8c34p1388c5jsn3acc5d8ed8ba"
const chrisKey = "326b80785amsh8543d3e232cdaa9p1b5362jsndeee73e28081"
const georgeKey = ""
const sophieKey = "01fc0c0291msh6c74688887e69bfp12b8f7jsnea920cfc819d"

export default function PollenAPI(long, lat) {

    const [pollenData, setPollenData] = useState(null);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/current/airquality',
            params: { lon: long, lat: lat },
            headers: {
                'X-RapidAPI-Key': lilKey,
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(options)
            const pollenData = response.data;
            setPollenData = pollenData

            const highestPollenType = pollenData.data[0].predominant_pollen_type
            const treePollen = pollenData.data[0].pollen_level_tree
            const grassPollen = pollenData.data[0].pollen_level_grass
            const weedPollen = pollenData.data[0].pollen_level_weed
            const moldLevel = pollenData.data[0].mold_level

            console.log(highestPollenType);
            console.log(treePollen);
            console.log(grassPollen);
            console.log(weedPollen);
            console.log(moldLevel);

        }).catch(function (error) {
            console.error(error);
        });
        //export this to the air card component 
    }, [])

}