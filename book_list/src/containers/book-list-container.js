import { connect } from 'react-redux';
import BookList from '../components/book-list';
import { selectBook } from '../actions/index';

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  selectBook: book => dispatch(selectBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
