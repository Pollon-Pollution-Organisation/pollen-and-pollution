
import React from 'react';
import { useState, useEffect } from 'react'
import {AirAPI} from "../../../utils/airAPI";


//return overall low-high air pollution OR good-bad air quality result with clickable card taking user to AirPage for each pullutants results
function AirCard(props) {
    AirAPI(props.setairQualData)
    
    //getting error Air Data is not defined

    const airLevel = (props) => {
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
    {airLevel()}
        </div>
    )
    
};

export default AirCard