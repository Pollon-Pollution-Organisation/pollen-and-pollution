import axios from "axios";


function AirAPI() {


const options = {
  method: 'GET',
  url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
  params: {lat: '35.779', lon: '-78.638', hours: '72'},
  headers: {
    'X-RapidAPI-Key': '326b80785amsh8543d3e232cdaa9p1b5362jsndeee73e28081',
    'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

export default AirAPI

/*import axios from "axios";
import { useState, useEffect } from 'react'
export default function AirAPI() {

    // const [airQualData, setairQualData] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
            params: { city: 'Seattle' },
            headers: {
                'X-RapidAPI-Key': '06293641afdmshf1dda5cd5fe8c34p1388c5jsn3acc5d8ed8ba',
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

} */



