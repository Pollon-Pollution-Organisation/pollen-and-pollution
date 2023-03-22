
import React from 'react';


//return overall low-high air pollution OR good-bad air quality result with clickable card taking user to AirPage for each pullutants results
function AirCard(props) {


    const airQualData = props.setairQualData

    //airQualData ? airQualData.data[0].aqi : ''

    //undefined on page load. might need to run in onClick
    const airLevel = () => {
        if (airData.data[0].aqi < 50) {
            return "GOOD"
        } else if (airData.data[0].aqi < 100) {
            return "MODERATE"
        } else if (airData.data[0].aqi < 150) {
            return "NOT GOOD"
        } else if (airData.data[0].aqi < 200) {
            return "BAD"
        } else if (airData.data[0].aqi < 250 ) {
            return "UNHEALTHY"
        } else {
            return 'HAZARDOUS'
        }
    }

    return (
        <div>
  
        </div>
    )
    
};

export default AirCard