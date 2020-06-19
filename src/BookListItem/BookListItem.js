import React from 'react'
import AddToReadingList from '../AddToReadingList/AddToReadingList'

function BookListItem(props) {
    return (
        <div className="ListItem">
            <h3 className="ListItem__name">
                {props.title}
            </h3>
            <p className="ListItem__category">
                {props.category}
            </p>
            <AddToReadingList />
        </div>
    )    
}

export default BookListItem