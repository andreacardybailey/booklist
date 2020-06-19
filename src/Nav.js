import React from 'react'

function  Nav(props) {
    return (
        <div className="Categories">
            Filter By:
            <button onClick={() => props.handleFilterChange("All")} >All</button>
            <button onClick={() => props.handleFilterChange("Sci-Fi")}>Sci-Fi</button>
            <button onClick={() => props.handleFilterChange("Fantasy")}>Fantasy</button>
            <button onClick={() => props.handleFilterChange("History")}>History</button>
        </div>
    )
}

export default Nav