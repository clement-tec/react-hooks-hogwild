import React, {useState} from "react";
import HogDetails from "./HogDetails";

function HogTitle ({name, image, greased, specialty, weight, "highest medal achieved": highestMedal}) {
    const [showDetails, setShowDetails] = useState(false);
    function handleClick() {
        setShowDetails((currentState)=> !currentState);
    }
    
    return (
        <article className="pigTile" onClick={handleClick}>
            <h2>{name}</h2>
            <img className ="minPigTile" src= {image} alt= {name}></img>
            {showDetails? <HogDetails
             greased= {greased} 
             specialty={specialty} 
             weight={weight}
             highestMedal={highestMedal} /> :null}
        </article>
    )
}
export default HogTitle