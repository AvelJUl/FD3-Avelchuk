﻿import React from 'react';
import PropTypes from 'prop-types';

import './IShop.css';

import IShopProduct from './IShopProduct';
import IShopProductView from './IShopProductView';

var tableFields = {
    id: 'ID',
    itemName: 'Name', 
    itemPrice: 'Price',
    itemImageUrl: 'Image URL',
    itemStorehouseQuantity: 'Quantity',
    delete: 'Control',
};

class IShop extends React.Component {

    static propTypes = {
        shopName: PropTypes.string.isRequired,
        products: PropTypes.arrayOf( 
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                itemName: PropTypes.string.isRequired,
                itemPrice: PropTypes.number.isRequired,
                itemImageUrl: PropTypes.string.isRequired,
                itemStorehouseQuantity: PropTypes.number.isRequired,
            }) 
        ),
    }

    state = {
        products: this.props.products, 
        selectedProductId: null, 
    }

    
    deleteItem = (itemId) => {
        var isSubmit = confirm(`Удалить товар с id ${itemId}?`);
        if (isSubmit)
            this.setState( (prevState, props) => { 
                return { products : prevState.products.filter( product => product.id != itemId ) }; 
            });
    }

    
    selectItem = (itemId) => {

        this.setState( 
            { selectedProductId: itemId } 
        );
    }

    render() {
        var products = this.state.products.map( product =>
            <IShopProduct key={product.id} id={product.id} itemName={product.itemName} itemPrice={product.itemPrice}
                    itemImageUrl={product.itemImageUrl} itemStorehouseQuantity={product.itemStorehouseQuantity}
                    selectedProductId={this.state.selectedProductId} deleteItemCallback={this.deleteItem}
                    selectedItemCallback={this.selectItem}
            />
        );

        return (<div className='IShop'>
            <div className='Name'>{this.props.shopName}</div>
            <div className='Table'>
                <div className='Row Header'>
                {            
                    Object.entries( tableFields ).map( 
                        ( [field, fieldHeader] ) => <div key={field} className={`Cell Header-Cell Column-${field}`}>{fieldHeader}</div>
                    )
                }
                </div>
                {products}
            </div>
            <div className='AddButton'>
                <input type='button' value='Add'/>
            </div>
            {
                this.state.selectedProductId && (
                    <IShopProductView products={this.state.products} viewProductId={this.state.selectedProductId} />
                )
            }
        </div>);

    }

}

export default IShop;