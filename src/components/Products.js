import React, { Component } from "react";
import "../components/Products.css";

import { connect } from "react-redux";

class Products extends Component {
  render() {
    const prods = this.props.products.map(items => {
      return (
        <div className="row" key={items.id}>
          <article className="ArticleStyle  col-md-6">
            <div>{items.name}</div>
          </article>
          <button
            className="col-md-4 first"
            onClick={() => this.props.addProducts(items)}
          >
            Add to Cart
          </button>
        </div>
      );
    });
    return <div>{prods}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProducts: items => dispatch({ type: "addProduct", payload: items })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Products);
