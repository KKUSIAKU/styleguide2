import React from 'react'
import Aside from './aside';
import styles from '../index.styl';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default React.createClass({
  render() {
    return (
      <div>
        <Aside />
        <div className={cx("main-content-styleguide")}>
          <div role="main" className={cx("component-documentation")}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})
