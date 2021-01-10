var tableFields = {
    id: 'ID',
    itemName: 'Name', 
    itemPrice: 'Price',
    itemImageUrl: 'Image URL',
    itemStorehouseQuantity: 'Quantity',
};

var IShopCatalog = React.createClass({

    displayName: 'IShopCatalog',

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

    render: function() {
        return React.DOM.div( 
            { className: 'IShopCatalog' },
            React.DOM.div(
                { className: 'Name' }, 
                this.props.shopName 
            ),
            React.DOM.div(
                { className: 'Table' },
                React.DOM.div( 
                    { className: 'Row Header' }, 
                    Object.entries( tableFields ).map( 
                        (field, fieldHeader) =>  React.DOM.div( { key: field, className: `Cell Header-Cell Column-${field}` }, fieldHeader )
                    ) 
                ),
                this.props.products.map( 
                    function ( product ) {
                        return React.DOM.div( 
                            { key: product.id, className: 'Row' }, 
                            Object.keys( tableFields ).map( 
                                field => React.DOM.div( { key: field, className: `Cell Column-${field}` }, product[field] )
                            )
                        );
                    }
                ),
            ),
        );
    },

});