import React from "react";

function HogDetails ({ greased, specialty, weight, highestMedal}) {
    return<ul>
        <li>{greased? "Greased" : "Not greased"}</li>
        <li>{specialty}</li>
        <li>{highestMedal}</li>
        <li>{weight}</li>
        </ul>
}
export default HogDetails