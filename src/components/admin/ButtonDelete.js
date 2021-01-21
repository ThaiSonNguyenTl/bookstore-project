
import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import QuantityAdjustment from './QuantityAdjustment'
class ButtonDelete extends Component {
    render() {
        // let { type, onAddToCart, cart, product, onCartBtnClick, onDecreaseCart } = this.props
        // let cartCurrently = cart.find(element => element.product._id === product._id)
        let {deleteProduct,product} = this.props
        return (
            <div className="cart-btn">
                {/* {
                    cartCurrently !== undefined ? <QuantityAdjustment cartCurrently={cartCurrently} product={product} onAddToCart={onAddToCart} onDecreaseCart={onDecreaseCart} /> :
                        <button className={type === 'related' ? 'btn related' : 'btn'} onClick={(e) => { onAddToCart(product); e.preventDefault(); onCartBtnClick() }}>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            {
                                type === 'related' ? <p>Cart</p> : <p>Add to cart</p>
                            }
                        </button>
                } */}
                <Button className="btn related" onClick={() => deleteProduct(product)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <p>Delete</p>
                </Button>
            </div>
        )
    }
}

export default ButtonDelete