import axios from "axios";
import { useState, useEffect } from 'react'

export function LatLongAPI(city) {

    const sophKey = '01fc0c0291msh6c74688887e69bfp12b8f7jsnea920cfc819d'

    const options = {
        method: 'GET',
        url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
        params: {
            city: city,
            country: 'United Kingdom',
            'accept-language': 'en',
            polygon_threshold: '0.0'
        },
        headers: {
            'X-RapidAPI-Key': sophKey,
            'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}