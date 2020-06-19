import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {


    
    render() {    

        const items = this.props.bookData.map((item, index) => <ListItem key={`bookitem-${index}`} title={item.title} category={item.category} />)

        return (
            <div className="List">
                {items}
            </div>
        )
    }
}

export default List



