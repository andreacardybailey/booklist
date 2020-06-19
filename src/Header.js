import React from 'react'
import Nav from './Nav'

function Header(props) {
    return (
        <header>
            <h1>Book list</h1>
            <Nav handleFilterChange={props.handleFilterChange} />
        </header>
    )
}

export default Header