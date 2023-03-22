import axios from "axios";


const lilKey = "6293641afdmshf1dda5cd5fe8c34p1388c5jsn3acc5d8ed8ba"
const chrisKey = "326b80785amsh8543d3e232cdaa9p1b5362jsndeee73e28081"
const georgeKey = ""
const sophieKey = "01fc0c0291msh6c74688887e69bfp12b8f7jsnea920cfc819d"
const lilSpareKey = "5197484f17msh067422515ab4f6fp1f1c20jsn66f8c08bb597"
const sophSpareKey = "e3e10500ddmsh6c294341a4f6acap16a65cjsna3fdb373f646"

export function PollenAPI(long, lat, setPollenData) {

        const options = {
            method: 'GET',
            url: 'https://air-quality.p.rapidapi.com/current/airquality',
            params: { lat: lat, lon: long },
            headers: {
                'X-RapidAPI-Key': lilKey,
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(options)
            const pollenReturns = response.data;
            setPollenData(pollenReturns)

            const highestPollenType = pollenReturns.data[0].predominant_pollen_type
            const treePollen = pollenReturns.data[0].pollen_level_tree
            const grassPollen = pollenReturns.data[0].pollen_level_grass
            const weedPollen = pollenReturns.data[0].pollen_level_weed
            const moldLevel = pollenReturns.data[0].mold_level

            console.log(highestPollenType);
            console.log(treePollen);
            console.log(grassPollen);
            console.log(weedPollen);
            console.log(moldLevel);

        }).catch(function (error) {
            console.error(error);
        });
 
}