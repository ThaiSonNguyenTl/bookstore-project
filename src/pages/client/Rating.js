
import React from "react";
import { Component } from "react";
import { Form,Button} from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import Nav from '../../components/client/Nav'
import { actRatingProductRequest } from "../../actions";
import { Link } from 'react-router-dom'
class Ratings extends Component {
  state = {
    countRating: [],
    comment: '',
    productOrdered: null,

  }

  componentDidMount() {
    let { order } = this.props
    let { comment } = this.state
    this.setState({
      comment: comment,
      productOrdered:order
    })
  }
  
  onHandleChange = (event) => {
    let target = event.target
    let value = target.value
    let name = target.name
    this.setState({
      [name]: value
    });
  }
  
  handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.props.order)
    // console.log(this.state.comment)
    // console.log(this.state.countRating)
    alert('Thank you your feedback!')
    let dbRating  = { ...this.state }
    delete dbRating.countRating
    // console.log(dbRating)
    this.props.actAddDbRating(dbRating)
  }
  handleClick = value => {
    let { countRating } = this.state
    countRating.push(value)
    // console.log(countRating)
  }
  render() {
    const ratingStar = {
      size: 30,
      count: 5,
      color: "black",
      activeColor: "yellow",
      value: 0,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
    };
    let { order } = this.props;
    
    let { countRating } = this.state
    // console.log(countRating)
    // order.map((item) =>
    //   item.cartItem.map((itemOrder) => console.log(itemOrder))
    // );
    // order.map((item) =>
    //   item.cartItem.map((itemOrder) => console.log(itemOrder.product))
    // );

    // console.log(order.map((item) => item.cartItem));
    // console.log(this.state.countRating)
    return (
      <React.Fragment>
        <Nav />
        <Button outline color="warning" style={{marginTop: "30px",float:'left'}}>
          <Link to="/">Back to Home</Link>
        </Button>
        <div className="container" style={{ marginTop: "100px"}}>
      <Form onSubmit= {this.handleFormSubmit}>
          <div className="row"> 
            {order.map((item) =>item.cartItem.map((itemOrder, index) => {
              return (
                    <div key={index} className="card m-2">
                    <img
                      src={itemOrder.product.img}
                      className="card-img-top"
                    alt="..."
                    style={{ width: "90%", height: '250px' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{itemOrder.product.name}</h5>
                      <p>{itemOrder.product.author}</p>
                    <ReactStars {...ratingStar} onChange={this.handleClick} />
                      {itemOrder.product.rating = countRating[index]}
                    </div>
                  </div>
                );
              })
              )}
                 
            </div>
               <div className="row">
                      <label for="exampleFormControlTextarea1" className="form-label">Comment:</label>
              <textarea className="form-control" name='comment' rows="3" onChange={ this.onHandleChange}/>
                </div> <br/>
                    <Button type="submit" className="btn w-100" disabled={order.length===0}>Submit</Button>

            </Form>
        </div>
      </React.Fragment>   
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddDbRating: dbRating => dispatch(actRatingProductRequest(dbRating))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
