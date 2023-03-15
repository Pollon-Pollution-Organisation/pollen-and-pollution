import axios from "axios";
import { useState, useEffect } from 'react'


export default function AirAPI() {

    // const [airQualData, setairQualData] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
            params: { city: 'Seattle' },
            headers: {
                'X-RapidAPI-Key': '01fc0c0291msh6c74688887e69bfp12b8f7jsnea920cfc819d',
                'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            //setairQualData(response)
            console.log(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    })

    //export this to the air card component

}





