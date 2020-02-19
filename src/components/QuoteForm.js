import React from 'react';
import './QuoteForm.css'

const MAX_LENGTH = 10;

class QuoteForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {'character': '', 'displayInput':'No value'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length <= MAX_LENGTH) {
            this.setState({'character':event.target.value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
      return (
        <form
        className="QuoteForm"
        onSubmit={this.handleSubmit}
        >
            <label htmlFor="character">Character:</label>
            <input
                id="name"
                className={this.state.character.length <= MAX_LENGTH ? 'length-ok' : 'length-max-reached'}
                name="character"
                type="text"
                value= {this.state.character}
                onChange={this.handleChange}
            />
            <p>Value is : <strong>{this.state.character}</strong></p>
            <p className="remaining-characters">{MAX_LENGTH - this.state.character.length} caractères restant</p>
        </form>
        );
    }
}
  

  export default QuoteForm;
