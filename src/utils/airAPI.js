import axios from "axios";
import { useState, useEffect } from 'react'

const lilKey = "6293641afdmshf1dda5cd5fe8c34p1388c5jsn3acc5d8ed8ba"
const chrisKey = "326b80785amsh8543d3e232cdaa9p1b5362jsndeee73e28081"
const georgeKey = ""
const sophieKey = "01fc0c0291msh6c74688887e69bfp12b8f7jsnea920cfc819d"

function AirAPI(long, lat) {

    const [airQualData, setairQualData] = useState(null);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
            params: { lat: lat, lon: long, hours: '72' }, //grab lat & lon to store in vars
            headers: {
                'X-RapidAPI-Key': sophieKey,
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };
    
        axios.request(options).then(function (response) {
            const airData = response.data;
            setairQualData = airData;
            console.log(airData);
    
            const airQual = airData.data[0].aqi;
            const carbonMonoxide = airData.data[0].co;
            const nitrogenDioxide = airData.data[0].no2;
            const ozone = airData.data[0].o3;
            const sulfurDioxide = airData.data[0].so2;
            const particles10 = airData.data[0].pm10;
            const particles25 = airData.data[0].pm25;
    
           /* console.log(airQual);
            console.log(carbonMonoxide);
            console.log(nitrogenDioxide);
            console.log(ozone);
            console.log(sulfurDioxide);
            console.log(particles10);
            console.log(particles25);*/
    
          
        }).catch(function (error) {
            console.error(error);
        });

    })

    console.log(airQualData)

  
}

export default AirAPI