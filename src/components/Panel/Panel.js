let React = require('react');
import classNames from 'classnames/bind';
import styles from './Panel.styl';
const cx = classNames.bind(styles);
const blacklist = require('blacklist');

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
			'panel',
			this.props.className
		);

		// props
		var props = blacklist(this.props, 'className');
		props.className = componentClass;

		return (
			<div className={cx(componentClass)}>
				{this.props.children}
			</div>
		)
	},
});
