
import React from 'react';


//return overall low-high, colour coded result with clickable card taking user to PollenPage for more detailed pollen type results

function PollenCard(props) {

 const pollenData = props.setPollenData
// pollenData ? pollenData.data[0].mold_level : ''

    //undefined on page load. might need to run in onClick
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
    
        </div>
    )

};

export default PollenCard