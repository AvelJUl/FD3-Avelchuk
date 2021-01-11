import React from 'react';
import PropTypes from 'prop-types';

import './IShopProductForm.css';

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
        editProductId: PropTypes.number,
    }

    state = {
        errors: {
            id: '',
            itemName: '',
            itemPrice: '',
            itemImageUrl: '',
            itemStorehouseQuantity: '',
        }
    }

    validateId = (EO) => {

    }

    validateNumber = (EO) => {

    }

    validateString = (EO) => {
    }

    render() {
        let product;
        let isEditExisMode = Boolean(self.props.editProductId);
        if (isEditExisMode) {
            product = this.props.products.filter( product => product.id == this.props.viewProductId)[0];
        } else {
            product = {
                id: '',
                itemName: '',
                itemPrice: '',
                itemImageUrl: '',
                itemStorehouseQuantity: '',
            };
        }

        return (
            <div className='IShopProductForm'>
                <div>{isEditExisMode? 'Edit Exist Poduct' : 'Add New Product' }</div>
                <div className='Field-id'>
                    <label>ID: <input type='text' defaultValue={product.id} onChange={this.validate}/></label>
                </div>
                <div className='Field-itemName'>
                    <label>Name: <input type='text' defaultValue={product.itemName} onChange={this.validate}/></label>
                </div>
                <div className='Field-itemPrice'>
                    <label>Price: <input type='text' defaultValue={product.itemPrice} onChange={this.validate}/></label>
                </div>
                <div className='Field-itemImageUrl'>
                    <label>Image: <input type='text' defaultValue={product.itemImageUrl} onChange={this.validate}/></label>
                </div>
                <div className='Field-itemStorehouseQuantity'>
                    <label>Quantity: <input type='text' defaultValue={product.itemStorehouseQuantity} onChange={this.validate}/></label>
                </div>
            </div>
        )
    }

}

export default IShopProductView;