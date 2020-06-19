import React from 'react'
import ThemeContext from '../ThemeContext'

class AddToReadingList extends React.Component {

    static contextType = ThemeContext;

    // this.context
    render() {
        return (
            <button className={this.context.theme}>Add to reading list</button>
        )    
    }
    
}

export default AddToReadingList