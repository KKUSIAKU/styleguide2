let alertExample = require('raw!./examples/Alert.example');
let buttonExample = require('raw!./examples/Button.example');
let jumbotronExample = require('raw!./examples/Jumbotron.example');
let spinnerExample = require('raw!./examples/Spinner.example');
let switchExample = require('raw!./examples/Switch.example');
let tabsExample = require('raw!./examples/Tabs.example');
import React from 'react';
import Playground from './playground/';
import FormPlayground from './examples/forms';
import { Alert, Button, Forms, Jumbotron, Spinner, Switch, Tabs } from '../../src/index';
import classNames from 'classnames/bind';
import styles from '../index.styl';
const cx = classNames.bind(styles);


export default React.createClass({
  render: function() {
    return (
      <div data-group="splash" className={cx("ss", "active")}>
        <Jumbotron title="Components" description="Set of components used across our website and apps." className={cx("jumbotron")}/>
        <div className={cx("content-styleguide")}>
          <section>
            <h3>Alert</h3>
            <p>Provide contextual feedback messages for typical user actions with the handful
              of available and flexible alert messages.</p>
            <Playground className={cx("playground")} theme="sb" codeText={alertExample}
              scope={{ React: React, Alert: Alert }} />
          </section>
          <section>
            <h3>Buttons</h3>
            <Playground className={cx("playground")} theme="sb" codeText={buttonExample}  scope={{React: React, Button: Button}} />
          </section>
          <section>
            <h3>Forms</h3>
            <div className={cx("playground")}>
              <FormPlayground />
            </div>
          </section>
          <section>
            <h3>Jumbotron</h3>
            <Playground className={cx('playground')} theme='sb' codeText={jumbotronExample}
              scope={ { React: React, Jumbotron: Jumbotron } } / >
          </section>
          <section>
            <h3>Spinner</h3>
            <Playground className={cx("playground")} theme="sb" codeText={spinnerExample}
              scope={ {React: React, Spinner: Spinner}} />
          </section>
          <section>
            <h3>Switch</h3>
            <Playground className={cx("playground")} theme="sb" codeText={switchExample}
              scope={{React: React, Switch: Switch}} />
          </section>
          <section>
            <h3>Tabs</h3>
            <Playground className={cx("playground")} theme="sb" codeText={tabsExample}
              scope={{React: React, Tabs: Tabs}} />
          </section>
        </div>
      </div>
    );
  }
});
