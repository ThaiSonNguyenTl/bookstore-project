import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Category from './Category'
import Products from './Products'

class Main extends Component {
    render() {
        let { products, perPage, totalProducts, paginate, onFilterProducts, onGetAllProduct } = this.props
        // console.log(products) 8 products
        return (
            <main className="main">
                <Container fluid={true}>
            
                    <Row>
                        {/* category  */}
                        
                        <Category onFilterProducts={onFilterProducts} paginate={paginate} />
                        {/* Products  */}
                        <Products products={products} perPage={perPage} totalProducts={totalProducts} paginate={paginate} onGetAllProduct={onGetAllProduct}>
                            {this.props.showProducts}
                        </Products>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Main