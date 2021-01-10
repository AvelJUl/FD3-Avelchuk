var initialState = {
    isOrdered: false, 
    filterStringTemplate: '',
};

var FilterBlock = React.createClass({

        displayName: 'FilterBlock',
    
        propTypes: {
            stringArray: React.PropTypes.arrayOf( React.PropTypes.string.isRequired ),
        },

        getDefaultProps: function () {
            return {
                stringArray: [],
            }
        },

        getInitialState: function() {
            return initialState;
        },

        order: function (EO) {
            this.setState( {
                isOrdered: EO.target.checked,
            } );
        },

        filter: function (EO) {
            this.setState( {
                filterStringTemplate: EO.target.value,
            } );
        },

        reset: function () {
            this.setState( initialState );
        },
    
        render: function() {
            var displayStringArray = this.props.stringArray.slice();

            if ( this.state.isOrdered ) {
                displayStringArray = displayStringArray.sort();
            }

            if ( this.state.filterStringTemplate ) {
                displayStringArray = displayStringArray.filter(displayString => displayString.includes(this.state.filterStringTemplate));
            }

            return React.DOM.div( { className: 'FilterBlock', }, 
                React.DOM.div( { className: 'ControllBlock', },
                    React.DOM.input( { className: 'ControllBlockElement', type: 'checkbox', checked: this.state.isOrdered, onChange: this.order, } ), 
                    React.DOM.input( { className: 'ControllBlockElement', type: 'text', value: this.state.filterStringTemplate, onChange: this.filter, }) , 
                    React.DOM.input( { className: 'ControllBlockElement', type:'button', value: 'сброс', onClick: this.reset, } ),
                ),
                React.DOM.div( { className: 'FilteredBlock', },
                    React.DOM.select( { className: 'FilteredBlockElement', multiple: true, size: 5 }, 
                        displayStringArray.map(displayString => React.DOM.option( { key: displayString, value: displayString }, displayString))
                    )
                ),
            )
        },
});