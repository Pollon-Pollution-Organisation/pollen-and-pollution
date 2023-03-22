
import React from 'react';
import { useState, useEffect } from 'react'
import {PollenAPI} from "../../../utils/pollenAPI";

//return overall low-high, colour coded result with clickable card taking user to PollenPage for more detailed pollen type results

function PollenCard(props) {

 PollenAPI(props.setPollenData)
//getting error Pollen Data is not defined
    const pollenLevel = () => {
        if (pollenData.data[0].mold_level == 1) {
            return "LOW"
        } else if (pollenData.data[0].mold_level == 2) {
            return "MEDIUM"
        } else if (pollenData.data[0].mold_level == 3) {
            return "HIGH"
        } else {
            return 'VERY HIGH'
        }
    }

    return (
        <div>
           {pollenLevel()}
        </div>
    )

};

export default PollenCard