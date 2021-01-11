﻿import React from 'react';
import PropTypes from 'prop-types';

import './IShopProduct.css';

class IShopProduct extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        itemName: PropTypes.string.isRequired,
        itemPrice: PropTypes.number.isRequired,
        itemImageUrl: PropTypes.string.isRequired,
        itemStorehouseQuantity: PropTypes.number.isRequired,
        selectedProductId: PropTypes.number,
        deleteItemCallback: PropTypes.func.isRequired,
        selectedItemCallback: PropTypes.func.isRequired,
    }

    select = (EO) => {

        this.props.selectedItemCallback(this.props.id);
    }

    delete = (EO) => {
        EO.stopPropagation();
        this.props.deleteItemCallback(this.props.id);
    }

    render() {
        return (<div className={ this.props.selectedProductId == this.props.id ?'IShopProduct Selected': 'IShopProduct' }>
            <div className='Cell Column-id' onClick={this.select}>{this.props.id}</div>
            <div className='Cell Column-itemName' onClick={this.select}>{this.props.itemName}</div>
            <div className='Cell Column-itemPrice' onClick={this.select}>{this.props.itemPrice}</div>
            <div className='Cell Column-itemImageUrl' onClick={this.select}>{this.props.itemImageUrl}</div>
            <div className='Cell Column-itemStorehouseQuantity' onClick={this.select}>{this.props.itemStorehouseQuantity}</div>
            <div className='Cell Column-controll' >
                <input className='Controll' type='button' value='Delete' onClick={this.delete}/>
                <input className='Controll' type='button' value='Edit'/>
            </div>
        </div>)
    }

}

export default IShopProduct;