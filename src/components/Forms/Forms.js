import React from 'react';
import classNames from 'classnames/bind';
import Formsy from 'formsy-react';
// import FRC from 'formsy-react-components';
// import Options from './options';
import styles from './Forms.styl';
const cx = classNames.bind(styles);

module.exports = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
        <Formsy.Form
          className={this.getLayoutClassName()}
          {...this.props}
        >
            {this.props.children}
        </Formsy.Form>
    );
  }
});
