import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

const propTypes = {
  books: PropTypes.array.isRequired,
};

const defaultProps = {
  books: [],
};

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}>
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  // Turns an object whose values are action creators,
  // into an object with the same keys, but with every
  // action creator wrapped into a dispatch call so
  // they may be invoked directly. Usually used when action
  // creators want to be passed to a component that isn't aware
  // of Redux(here BookList).
  return bindActionCreators({
    selectBook,
  }, dispatch);
}


BookList.propTypes = propTypes;
BookList.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
