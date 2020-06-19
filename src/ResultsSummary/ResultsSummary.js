import React from 'react'

function ResultsSummary(props) {

    return (
        <div className="Total">
            <h4>{props.count} Books found</h4>
        </div>
    )
}

export default ResultsSummary