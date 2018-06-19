import React from 'react';

import BookList from '../containers/book-list-container';
import BookDetail from '../containers/book-detail-container';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
