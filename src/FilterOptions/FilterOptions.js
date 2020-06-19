import React from 'react'
import './FilterOptions.css'
import ThemeContext from '../ThemeContext'

class FilterOptions extends React.Component {

    //props.filterVal === "All"  will = true or false

    static contextType = ThemeContext;
    
    render() {
        
        return (
            <div className="Categories">
                Filter By:
                <button className={this.context.theme} disabled={this.props.filterVal === "All"} onClick={() => this.props.handleClick('All')}>All</button>
                <button className={this.context.theme} disabled={this.props.filterVal === "Sci-Fi"} onClick={() => this.props.handleClick('Sci-Fi')}>Sci-Fi</button>
                <button className={this.context.theme} disabled={this.props.filterVal === "Fantasy"} onClick={() => this.props.handleClick('Fantasy')}>Fantasy</button>
                <button className={this.context.theme} disabled={this.props.filterVal === "History"} onClick={() => this.props.handleClick('History')}>History</button>
            </div>
        )   
    }
 
}

export default FilterOptions