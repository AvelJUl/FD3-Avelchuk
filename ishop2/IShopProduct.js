var IShopProduct = React.createClass({

    displayName: 'IShopProduct',

    getDefaultProps: function () {
        return {
            id: null,
            itemName: null,
            itemPrice: null,
            itemImageUrl: null,
            itemStorehouseQuantity: null,
            selectedProductId: null,
            deleteItemCallback: null,
            selectedItemCallback: null,
        }
    },

    propTypes: {
        id: React.PropTypes.number.isRequired,
        itemName: React.PropTypes.string.isRequired,
        itemPrice: React.PropTypes.number.isRequired,
        itemImageUrl: React.PropTypes.string.isRequired,
        itemStorehouseQuantity: React.PropTypes.number.isRequired,
        selectedProductId: React.PropTypes.number,
        deleteItemCallback: React.PropTypes.func.isRequired,
        selectedItemCallback: React.PropTypes.func.isRequired,
    },

    select: function (EO) {
        this.props.selectedItemCallback(this.props.id);
    },

    delete: function (EO) {
        EO.stopPropagation();
        this.props.deleteItemCallback(this.props.id);
    },

    render: function() {
        return React.DOM.div( 
            { className: this.props.id == this.props.selectedProductId ?'IShopProduct Selected': 'IShopProduct' , }, 
            React.DOM.div( { className: 'Cell Column-id', onClick: this.select, }, this.props.id, ),
            React.DOM.div( { className: 'Cell Column-itemName', onClick: this.select,}, this.props.itemName ),
            React.DOM.div( { className: 'Cell Column-itemPrice', onClick: this.select,}, this.props.itemPrice ),
            React.DOM.div( { className: 'Cell Column-itemImageUrl', onClick: this.select,}, this.props.itemImageUrl ),
            React.DOM.div( { className: 'Cell Column-itemStorehouseQuantity', onClick: this.select,}, this.props.itemStorehouseQuantity ),
            React.DOM.input( { className: 'Cell Column-delete', type:'button', value: 'Delete', onClick: this.delete,} ),
        );
        
    },

});