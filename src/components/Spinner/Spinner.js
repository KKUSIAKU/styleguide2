var React = require('react');
import classNames from 'classnames/bind';
import styles from './Spinner.styl';
const cx = classNames.bind(styles);
var blacklist = require('blacklist');

module.exports = React.createClass({

	propTypes: {
		className: React.PropTypes.string,
	},

	getDefaultProps () {
		return {
			size: 'default',
		};
	},

	render () {
		// classes
		var componentClass = cx(
			'spinner',
			'spinner-' + this.props.size,
			this.props.className
		);

		// props
		var props = blacklist(this.props,'size', 'className');
		props.className = componentClass;

		return (
			<div className={cx(componentClass)}>
				<div className={cx('circle')}></div>
			</div>
		)
	},
});
