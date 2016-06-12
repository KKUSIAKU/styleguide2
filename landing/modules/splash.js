import React, {Component} from 'react';
import {Button} from '../../src/index';
import styles from '../index.styl';
import classNames from 'classnames/bind';
import charming from 'charming';

const cx = classNames.bind(styles);

export default React.createClass({

  componentDidMount: function() {
    var element = document.querySelectorAll('.letjs')[0];
    charming(element);

    var element2 = document.querySelectorAll('.letjs')[1];
    charming(element2);
  },

  render: function() {
    return (
      <div data-group="splash" className={cx("splash", "active")}>
        <div className={cx("splash", "theme-dark")}>
          <div className={cx("splash-intro")}>
            <div className={cx("lines")}>
              <span className={cx("line-1")} />
              <span className={cx("line-2")} />
              <span className={cx("line-3")} />
              <span className={cx("line-4")} />
            </div>
            <h1 className={cx("lettering-js", 'letjs')}>Styleguide &nbsp; Boilerplate</h1>
            <p className={cx("lettering-js", 'letjs')}>Professional frontend styleguide made in ReactJS to improve the development of web applications.</p>
            <Button className={cx("btn", "btn-success")} size="large" type="primary">Get Started</Button>
            <Button className={cx("btn", "btn-default")} size="large">Fork from github</Button>
          </div>
        </div>
      </div>
    );
  }
});
