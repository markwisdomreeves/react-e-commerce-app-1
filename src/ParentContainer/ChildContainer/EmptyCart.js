import React, { Component } from 'react';


export default class EmptyCart extends Component {
    render() {
        return (
            <div className="containern mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h3>your cart is currently empty</h3>
                    </div>
                </div> 
            </div>
        );
    }
}
