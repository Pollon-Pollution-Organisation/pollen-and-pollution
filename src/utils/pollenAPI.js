import axios from "axios";
import { useState, useEffect } from 'react'


export default function PollenAPI() {

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/current/airquality',
            params: { lon: '-73.00597', lat: '40.71427' },
            headers: {
                'X-RapidAPI-Key': '6293641afdmshf1dda5cd5fe8c34p1388c5jsn3acc5d8ed8ba',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    })

    //export this to the air card component 


}