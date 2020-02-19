import React from 'react';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quotes : []};
    this.handleClick = this.handleClick.bind(this);
    // first display
    this.handleClick();
  }

  handleClick() {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.json())
    .then(json => this.setState({quotes:json}))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <button className="btn" onClick={this.handleClick}>Get Quote</button>
        <QuoteForm />
        <QuoteList simpsonQuotes={this.state.quotes} />  
      </div>
    );
  }
}

export default App;
