import React, {useState} from "react"

function Search({search, onSearch}) {


    function handleSubmit(e) {
        e.preventDefault();
        onSearch(search);
    }
    return (
        <div className="searchBar" onSubmit={handleSubmit}>
            <input 
            type="text"
            value={search} 
            onChange={(e) => onSearch(e.target.value)} 
            placeholder="Search..."
            />
        </div>
    );
}

export default Search;