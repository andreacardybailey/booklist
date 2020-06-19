import React from 'react';
import './App.css';
<<<<<<< HEAD
import FilterOptions from './FilterOptions/FilterOptions'
import ResultsSummary from './ResultsSummary/ResultsSummary'
import BookList from './BookList/BookList'
=======
import Header from './Header'
import List from './List'
>>>>>>> with-context


const bookData = [
  {
    title: "Dune",
    category: "Sci-Fi"
  },
  {
    title: "Harry Potter",
    category: "Fantasy"
  },
  {
    title: "Lord of the Rings",
    category: "Fantasy"
  },
  {
    title: "Frankenstien",
    category: "Sci-Fi"
  },
  {
    title: "Jurassic Park",
    category: "Sci-Fi"
  },
  {
    title: "1776",
    category: "History"
  },
]


<<<<<<< HEAD

class App extends React.Component {

  state = {
    filterOption: 'Sci-Fi',
    theme: "light"
  }

  setFilterOption = (category) => {
    this.setState({
      filterOption: category
    })
  }

  render () {

    const filteredBooks = bookData.filter((book) => {
        return this.state.filterOption === 'All' || this.state.filterOption === book.category
=======
class App extends React.Component {
  
  state = {
    bookData: bookData,
    currentFilter: "All"
  }

  handleFilterChange = (value) => {
    this.setState({
      currentFilter: value
    })
  }

  render() {

    const filteredItems = this.state.bookData.filter((item) => {
      if (this.state.currentFilter === "All" || this.state.currentFilter === item.category) {
        return item
      }
>>>>>>> with-context
    })

    return (
      <div className="App">
<<<<<<< HEAD
        <h1>Book list</h1>
        <FilterOptions filterVal={this.state.filterOption} handleClick={this.setFilterOption} />
        <BookList books={filteredBooks} />
        <ResultsSummary count={filteredBooks.length} />
      </div>
    );
  }
}


export default App;
=======
        <Header handleFilterChange={this.handleFilterChange} />
        <List bookData={filteredItems} />
      </div>
    );
  }  
}


export default App;




>>>>>>> with-context
