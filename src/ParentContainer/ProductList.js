import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// now we are consuming it here
import { ProductConsumer } from "../context";


export default class ProductList extends Component {
    render() {
        // console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            {/* we are consuming it here. we are consuming the
                            value that was passed in the context Api by the Provider */}
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product  key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
