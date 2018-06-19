import { connect } from 'react-redux';
import BookList from '../components/book-list';

const mapStateToProps = (state) => ({
  books: state.books,
});

// const mapDispatchToProps = () => ({
//
// });

export default connect(mapStateToProps)(BookList);
