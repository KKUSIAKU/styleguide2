import React, {Component} from 'react';
import styles from '../index.styl';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import {Jumbotron} from '../../src/index';
// import * as FontAwesome from 'react-icons/md'
const iconsList = require("react-icons/lib/md");
import decamelize from 'decamelize';
import * as IconPack from 'react-icons/lib/md';


export default React.createClass({
  render: function() {
    return (
      <div data-group="splash" className={cx("ss", "active")}>
        <Jumbotron title="Resources"/>
        <div className={cx("content-styleguide")}>
          <section className={cx("clearfix")}>
            <h3>Icons</h3>
            <div className={cx("row")}>
            {Object.keys(iconsList).map((iconName, index) => {
              let realIconName = decamelize(iconName.replace(new RegExp('^'+"Md"), ''), '-')
              let iconricky = React.createElement(IconPack[iconName]);
              return (
                  <div className={cx('icon-box')} key={index}>
                    {iconricky}
                    <div className="icon-name">{iconName}</div>
                    <div className="icon-location" style={{fontSize: 10}}>
                      <code>{`react-icons/lib/md/${realIconName}`}</code>
                    </div>
                  </div>
              );
            })}
            </div>
          </section>
        </div>
      </div>
    );
  }
});
