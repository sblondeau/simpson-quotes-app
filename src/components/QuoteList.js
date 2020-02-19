import React from "react";
import QuoteCard from "./QuoteCard";


class QuoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
            this.props.simpsonQuotes.map(simpsonQuote => (
                <QuoteCard key={simpsonQuote.name} quote={simpsonQuote.quote} image={simpsonQuote.image} character={simpsonQuote.character} />
                )
            )
        }
      </div>
    )
  }
}
export default QuoteList;