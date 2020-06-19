import React from 'react'
import BookListItem from '../BookListItem/BookListItem.js'

function BookList(props) {

    const books = props.books.map((book, index) => {        
      return <BookListItem key={index} title={book.title} category={book.category} />
    })

    return(
        <div className="List">
            {books}
        </div>
    )
}

export default BookList