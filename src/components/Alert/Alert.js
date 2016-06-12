var React = require('react');
import classNames from 'classnames/bind';
import styles from './Alert.styl';
const cx = classNames.bind(styles);

var ALERT_TYPES = [
	'danger',
	'error', // alias for danger
	'info',
	'primary',
	'success',
	'warning',
];

module.exports = React.createClass({

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(ALERT_TYPES).isRequired,
	},

	render () {
		var componentClass = cx(
			'alert',
			'alert-' + this.props.type,
			this.props.className
		);

		return <div className={componentClass}>{this.props.children}</div>;
	},
	
});
