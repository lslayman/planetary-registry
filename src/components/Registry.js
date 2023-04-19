import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"
import Planet from "./Planet";

function Registry() {
    const [table, setTable] = useState([]);
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:8085/planets")
        .then((res) => res.json())
        .then((table) => setTable(table))
    }, [])

    function onPlanetSubmit(newPlanet) {
        setTable([...table, newPlanet])
    }

    const displayPlanets = table.filter((planet) => {
        return planet.name.toLowerCase().includes(search.toLowerCase())
    })

    function onSearch(input) {
        setSearch(input)
    }

    return(
        <div className="registry">
            <Search search={search} onSearch={setSearch}/>
            <div className="content">
                <PlanetList table={displayPlanets}/>   
                <NewPlanetForm onPlanetSubmit={onPlanetSubmit}/>
            </div>
        </div>
    )
}

export default Registry;