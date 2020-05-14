import React, { Component } from "react";

import { connect } from "react-redux";

class CartItems extends Component {
  render() {
    let i = 0;
    const disp = this.props.items.map(item => {
      return (
        <article
          key={(i = i + 1)}
          className="ArticleStyle"
          onClick={() => this.props.deletehandler(item.id)}
        >
          <div>{item.name}</div>
        </article>
      );
    });
    return <div>{disp}</div>;
  }
}

const mapStateToProps = state => {
  const item = [...state.cartItems];
  return {
    items: item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletehandler: id => dispatch({ type: "deleteCartItems", itemId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
