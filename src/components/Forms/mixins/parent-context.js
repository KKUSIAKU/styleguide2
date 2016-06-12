const React = require('react');
import styles from '../Forms.styl';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

module.exports = {

    childContextTypes: {
        layout: React.PropTypes.string.isRequired,
        validatePristine: React.PropTypes.bool.isRequired,
        rowClassName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        labelClassName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        elementWrapperClassName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array,
            React.PropTypes.object
        ])
    },

    getChildContext: function() {
        return {
            layout: this.props.layout || 'horizontal',
            validatePristine: this.props.validatePristine || false,
            rowClassName: this.props.rowClassName || '',
            labelClassName: this.props.labelClassName || '',
            elementWrapperClassName: this.props.elementWrapperClassName || ''
        };
    },

    getLayoutClassName: function() {
        return cx('form-' + this.getChildContext().layout);
    }

};
