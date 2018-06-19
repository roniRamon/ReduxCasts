import React from 'react';

class BookDetail extends React.Component {

  render() {
    if (!this.props.book) {
        return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for: </h3>
        <p>Title: {this.props.book.title}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

export default BookDetail;
