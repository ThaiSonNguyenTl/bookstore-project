import React, { Component } from "react";
import { Col } from "reactstrap";
import "../../css/client/Product.css";
import CartBtn from "./CartBtn";
import ButtonDelete from "../admin/ButtonDelete";
import { Link } from "react-router-dom";
import { MdVolumeUp } from "react-icons/md";
import {MdVolumeOff} from "react-icons/md"

import ReactHowler from 'react-howler'
class Product extends Component {
  state = {
    playing: false
  }
  handleClick = () => {
    let { product } = this.props;
    this.props.onGetProductUpdate(product);
    this.props.onOpenFormProduct();
  };

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }
    render() {
    let {
      type,
      product,
      audio,
      cart,
      onAddToCart,
      onCartBtnClick,
      onDecreaseCart,
      deleteProduct,
    } = this.props;
    return (
      <Col className="mb-5" sm="6" lg="4" xl="3">
        <Link
          className="product"
          to={type === "admin" ? "/admin/products" : `/product/${product._id}`}
        >
          <img
            src={product.img}
            alt="this is image"
            onClick={type === "admin" ? this.handleClick : null}
          />
          <div className="info">
            <h3 className="title">{product.name}</h3>
            <p className="author">{product.author}</p>
          </div>
          <div>
            
            {audio ?  <div>
                    <ReactHowler
                      src={audio}
                      playing={this.state.playing}
                    />
                    <button onClick={() => this.handlePlay()}><MdVolumeUp/></button> &nbsp;
                    <button onClick={() => this.handlePause()}><MdVolumeOff/></button>
                  </div>: ""}
          </div>
          {(type === "related" || type === "admin") && (
            <div className="cartbtn-price">
              <div className="price">${product.price}</div>
              {type !== "admin" && (
                <CartBtn
                  type={type}
                  cart={cart}
                  product={product}
                  onAddToCart={onAddToCart}
                  onCartBtnClick={onCartBtnClick}
                  onDecreaseCart={onDecreaseCart}
                />
              )}
              {type == "admin" && (
                <ButtonDelete deleteProduct={deleteProduct} product={product} />
              )}
            </div>
          )}
        </Link>
      </Col>
    );
  }
}

export default Product;
