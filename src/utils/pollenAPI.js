import axios from "axios";
import { useState, useEffect } from 'react'


export default function PollenAPI() {

        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/current/airquality',
            params: { lon: '-73.00597', lat: '40.71427' },
            headers: {
                'X-RapidAPI-Key': '326b80785amsh8543d3e232cdaa9p1b5362jsndeee73e28081',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(options)
            console.log(response.data);
            //returning undefined
            console.log(response.data.predominant_pollen_type);
            console.log(response.data.pollen_level_tree);
            console.log(response.data.pollen_level_grass);
            console.log(response.data.pollen_level_weed);
            console.log(response.data.mold_level);

        }).catch(function (error) {
            console.error(error);
        });
    //export this to the air card component 


}