import React from "react"
import Planet from "./Planet"

function PlanetList({table}) {
    const listPlanets = table.map((planet) => {
        console.log(planet)
        return(<Planet
            key={planet.id}
            planet={planet} 
        />
    )})

    // console.log(listPlanets)
    return(
        <table>
            <tbody> 
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>   
                {listPlanets}
            </tbody>
        </table>
    );
}

export default PlanetList;