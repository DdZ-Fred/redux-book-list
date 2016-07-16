import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  book: PropTypes.object.isRequired,
};

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}
BookDetail.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
