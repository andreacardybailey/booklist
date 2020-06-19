import React from 'react'

function ListItem(props) {

    return (
        <div className="ListItem">
            <h3 className="ListItem__name">
                {props.title}
            </h3>
            <p className="ListItem__category">
                {props.category}
            </p>
        </div>
    )
}

export default ListItem