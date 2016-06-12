import React, {Component} from 'react';
import index_style from '../../index.styl';
import styles from './Jumbotron.styl';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

module.exports = React.createClass({

	getDefaultProps () {
		return {
			title: 'Jumbotron',
			description: 'Description',
			img_src: 'http://styleguide.auth0.com/lib/logos/img/design.svg',
		};
	},

  render() {

		var componentClass = cx(
			'jumbotron',
			this.props.className
		);

    return (
      <section className={componentClass}>
        <h2><img src={this.props.img_src} alt="Design" width={48} height /></h2>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </section>
    );
  }
});
