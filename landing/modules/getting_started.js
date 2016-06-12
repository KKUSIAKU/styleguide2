import React, {Component} from 'react';
import styles from '../index.styl';
import classNames from 'classnames/bind';
import Highlight from 'react-highlight.js'
import {Jumbotron} from '../../src/index';
const cx = classNames.bind(styles);

export default React.createClass({
render: function() {
    return (
      <div>
        <Jumbotron title="Getting Started"/>
        <div className={cx("content-styleguide")}>
          <section>
            <h2>Why Styleguide Boilerplate?</h2>
            <p>Styleguide Boilerplate is a new new framework built with React to build web apps and websites. It has powerful features like flexbox based grid, </p>
          </section>
          <section>
            <h2>Setting up</h2>
            <p>Clone the repository to your computer. If you want more information read here.</p>
            <Highlight language="terminal">npm install styleguide-boilerplate --save</Highlight>
            <h4>Create a html</h4>
          </section>
        </div>
      </div>
    );
  }
});
