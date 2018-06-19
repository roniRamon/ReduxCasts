import { connect } from 'react-redux';
import BookDetail from '../components/book-detail';
import { selectBook } from '../actions/index';

const mapStateToProps = (state) => ({
  book: state.activeBook,
});

// const mapDispatchToProps = (dispatch) => ({
//   selectBook: book => dispatch(selectBook(book))
// });

export default connect(mapStateToProps)(BookDetail);
