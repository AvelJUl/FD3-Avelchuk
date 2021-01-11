﻿import React from 'react';
import PropTypes from 'prop-types';

import './IShopProductView.css';

class IShopProductView extends React.Component {

    static propTypes = {
        products: PropTypes.arrayOf( 
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                itemName: PropTypes.string.isRequired,
                itemPrice: PropTypes.number.isRequired,
                itemImageUrl: PropTypes.string.isRequired,
                itemStorehouseQuantity: PropTypes.number.isRequired,
            }) 
        ),
        viewProductId: PropTypes.number,
    }
    render() {
        let product = this.props.products.filter( product => product.id == this.props.viewProductId)[0];

        return this.props.viewProductId && (<div className='IShopProductView'>
            <div className='Field-id'>
                <span>ID: </span>{product.id}
            </div>
            <div className='Field-itemName'>
                <span>Name: </span>{product.itemName}
            </div>
            <div className='Field-itemPrice'>
                <span>Price: </span>{product.itemPrice}
            </div>
            <div className='Field-itemImageUrl'>
                <span>Image: </span>{product.itemImageUrl}
            </div>
            <div className='Field-itemStorehouseQuantity'>
                <span>Quantity: </span>{product.itemStorehouseQuantity}
            </div>
        </div>)
    }

}

export default IShopProductView;