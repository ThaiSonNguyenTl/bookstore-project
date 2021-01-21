import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card,CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
export default class PauseOnHover extends Component {
  showRating(numberStar) {
    let result = []
    for (let i = 1; i <= numberStar; i++){
      result.push( <li key = {i}><i className="fa fa-star" /></li>)
    }
    for (let j = 1; j <= 5 - numberStar; j++){
      result.push( <li key ={j+5}><i className="fa fa-star-o" /></li>)
    }
    return result
  }
    render() {
      let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const ratingStar = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "yellow",
        a11y: true,
        edit:false,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
      };
        let { productsRating } = this.props
        // console.log(products) 
        // chi hien thi product co  product.rating =5
      return (
        <div>
          <h2>Featured books </h2>
          <Slider {...settings}>
            {
              productsRating.map(item1 => item1.productOrdered.map(item2 => item2.cartItem.map((itemOrder, index) => {
                if (itemOrder.product.rating === 5) {
                  return (
                    <Card>
                      <Link className="product" to={`/product/${itemOrder.product._id}`}>
                      <CardImg src={itemOrder.product.img} style={{ width: "90%", height: '250px' }} alt="Card image cap" />&nbsp;
                        </Link>
                  <CardBody>
                    <CardTitle tag="h5">{itemOrder.product.name}</CardTitle>
                        <CardText>{itemOrder.product.author}</CardText>
                        <ReactStars {...ratingStar} value={itemOrder.product.rating} />
                  </CardBody>
                </Card>
                  )
                }
             })))
            }
          </Slider>
        </div>
      );
    }
  }
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// export default class PauseOnHover extends Component {
//     render() {
//       var settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true
//       };
//       return (
//         <div>
//           <h2>Pause On Hover</h2>
//           <Slider {...settings}>
//             <div>
//               <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//             </div>
//             <div>
//             <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//             </div>
//             <div>
//               <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//                   </div>
//                   <div>
//               <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//                   </div>
//                   <div>
//               <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//                   </div>
//                   <div>
//               <img src="https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420" />
//             </div>
//           </Slider>
//         </div>
//       );
//     }
//   }