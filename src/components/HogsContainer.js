import React, {useState} from "react";
import hogs from "../porkers_data";
import HogTitle from "./HogTitle";
import Filters from "./Filters";

function HogsContainer () {
    const[greaseChecked, setGreaseChecked] = useState(false);
    const [sortBy, setSortBy] = useState("All");

    function handleSortChange(e) {
        setSortBy(e.target.value);
    }
    
    function handleGreasedChange(e) {
        setGreaseChecked(e.target.checked);
    }
    
    const filterGreaseHogs = hogs.filter((hog)=>{
        if (greaseChecked) { 
            return(hog.greased)
        }
        return true
    })
    console.log(filterGreaseHogs)

    function sortHogs() {
        if(sortBy=== "name") {
            console.log("sortby name")}
            else if(sortBy=== "weight") {
                console.log("sortby weight")}
                else  {console.log("original")}
    }
    
    const hogTitles = filterGreaseHogs.map((hog) => (<HogTitle key ={hog.name} {...hog} />))

    return <section>
        <Filters greaseChecked= {greaseChecked} 
        handleGreasedChange={handleGreasedChange}
        sortBy= {sortBy}
        handleSortChange={handleSortChange} 
        sortHogs={sortHogs}/>
        {hogTitles}
    </section>
    
}
export default HogsContainer