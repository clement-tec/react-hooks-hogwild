import React from 'react';

function Filters ({greaseChecked, handleGreasedChange,sortBy, handleSortChange}) {
   
    
    return <>
        <form>
            <label htmlFor="greased">Greased</label>
            <input id= "greased"
            type="checkbox" 
            checked={greaseChecked} 
            onChange={handleGreasedChange}/>
        </form>
        <form>
            <fieldset>
                <legend>Select a Sort</legend>
                <div>
                    <input type="radio" 
                    id="All" value="All" 
                    checked={sortBy === "All"}
                    onChange={handleSortChange}/>
                    <label htmlFor= "All">All</label>
                </div>
                <div>
                    <input type="radio"
                    id="name" value="name" 
                    checked ={sortBy === "name"}
                    onChange={handleSortChange}/>
                    <label htmlFor= "name">Name</label>
                </div>
                <div>
                    <input type="radio" 
                    id="weight" value="weight"
                    checked ={sortBy === "weight"}
                    onChange={handleSortChange}/>
                    <label htmlFor="weight">weight</label>
                </div>
            </fieldset>
            
        </form>
    </>
}

export default Filters