var tableFields = {
    id: 'ID',
    itemName: 'Name', 
    itemPrice: 'Price',
    itemImageUrl: 'Image URL',
    itemStorehouseQuantity: 'Quantity',
    delete: 'Control',
};

var IShop = React.createClass({

    displayName: 'IShop',

    getDefaultProps: function () {
        return {
            shopName: "Anonymous Shop",
            products: [],
        }
    },

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        products: React.PropTypes.arrayOf( 
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                itemName: React.PropTypes.string.isRequired,
                itemPrice: React.PropTypes.number.isRequired,
                itemImageUrl: React.PropTypes.string.isRequired,
                itemStorehouseQuantity: React.PropTypes.number.isRequired,
            }) 
        ),
    },

    getInitialState: function() {
        return { 
            products: this.props.products, 
            selectedProductId: null, 
        };
    },

    
    deleteItem: function (itemId) {
        var isSubmit = confirm(`Удалить товар с id ${itemId}?`);
        if (isSubmit)
            this.setState( (prevState, props) => { 
                return { products : prevState.products.filter( product => product.id != itemId ) }; 
            });
    },

    
    selectItem: function (itemId) {
        this.setState( 
            { selectedProductId: itemId } 
        );
    },

    render: function() {
        var products = this.state.products.map( product =>
            React.createElement(
                IShopProduct,
                { 
                    key: product.id, 
                    id: product.id,
                    itemName: product.itemName,
                    itemPrice: product.itemPrice,
                    itemImageUrl: product.itemImageUrl,
                    itemStorehouseQuantity: product.itemStorehouseQuantity,
                    selectedProductId: this.state.selectedProductId, 
                    deleteItemCallback: this.deleteItem,
                    selectedItemCallback: this.selectItem,
                },
            )
        );

        return React.DOM.div( 
            { className: 'IShop' },
            React.DOM.div(
                { className: 'Name' }, 
                this.props.shopName 
            ),
            React.DOM.div(
                { className: 'Table' },
                React.DOM.div( 
                    { className: 'Row Header', }, 
                    Object.entries( tableFields ).map( 
                        ( [field, fieldHeader] ) => { 
                            return React.DOM.div( { key: field, className: `Cell Header-Cell Column-${field}` }, fieldHeader )
                        }
                    ) 
                ),
                products,
            ),
        );
    },

});