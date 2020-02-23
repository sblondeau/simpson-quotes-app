import React from 'react';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quotes : null};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
        { this.state.quotes ? <QuoteList simpsonQuotes={this.state.quotes} /> : 'Waiting for a donut'}
      </div>
    );
  }
}

export default App;
