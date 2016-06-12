import React, {Component} from 'react';
import { Link } from 'react-router'
import styles from '../index.styl';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import * as IconPack from 'react-icons/lib/md';

export default React.createClass({
  render: function() {
    return (
      <div role="complementary" className={cx("aside-styleguide")}>
        <header className={cx("header")}>
          <h1>
            <Link to="/">
              <svg width="40px" viewBox="0 0 470 260" version="1.1" className={"logo"}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path d="M180,80.8 L176.8,10.4 C164,6 124.4,0.8 109.2,0.8 L109.2,4.4 C141.6,13.2 163.2,47.6 176.4,80.8 L180,80.8 Z M191.2,170.8 C191.2,127.2 158.8,111.2 130.4,94.4 C102.8,78 75.2,66.4 75.2,37.2 C75.2,16.4 85.2,7.2 98.4,4.4 L98.4,0.8 C54.4,3.6 1.6,26.8 1.6,81.6 C1.6,121.2 22.8,144.8 55.2,162.8 C92.8,184.4 114.4,194.8 114.4,220.8 C114.4,238.4 105.2,252 91.2,255.6 L91.2,259.2 C155.6,256 191.2,223.6 191.2,170.8 L191.2,170.8 Z M78.8,259.2 L78.8,255.6 C48.4,244.4 15.2,198.4 4,163.2 L0.4,163.2 L4.8,246.4 C15.2,251.2 53.2,257.2 78.8,259.2 L78.8,259.2 Z M205.6,256 L325.6,256 L325.6,4 L205.6,4 L205.6,7.2 C226,11.2 235.2,20.8 235.2,53.6 L235.2,206.4 C235.2,239.2 226,248.8 205.6,252.8 L205.6,256 Z M469.6,189.2 C469.6,148 434,132.8 381.2,124.8 L381.2,124 C430.4,118.4 457.6,96.8 457.6,65.6 C457.6,22.4 410.8,4 341.2,4 L341.2,7.2 C356.4,10.8 373.2,22.4 373.2,64.4 C373.2,93.6 369.2,110.4 354,118 C349.6,120.4 345.2,122 339.6,123.6 L339.6,126.4 C350,128 357.2,130.8 362.8,137.2 C370.8,146.4 375.2,160.4 375.2,185.6 C375.2,240 359.2,250.4 342,252.8 L342,256 C353.6,255.6 367.6,255.2 378.4,254 C430.8,248.4 469.6,229.6 469.6,189.2 L469.6,189.2 Z" id="SB" fill="#000000"></path>
                </g>
              </svg>
            </Link>
          </h1>
          <button data-toggle="collapse" data-target="#menu" className={cx("navbar-toggle", "collapsed")} aria-expanded="false"><span className={cx("sr-only")}>Toggle navigation</span><span className={cx("icon-bar")} /><span className={cx("icon-bar")} /><span className={cx("icon-bar")} /></button>
        </header>
        <div id="menu" className={cx("collapse")} aria-expanded="false">
          <nav className={cx("nav-styleguide")}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/getting-started"><IconPack.MdStar/>Getting Started</Link>
              </li>
              <li>
                <Link to="/design"><IconPack.MdBrush/>Design</Link>
              </li>
              <li>
                <Link to="/components"><IconPack.MdLayers/>Components</Link>
              </li>
              <li><Link to="/resources"><IconPack.MdBuild/>Resources</Link></li>
            </ul>
          </nav>
          <footer className={cx("footer")}><span id="styleguide-version">Version 1.0.0<span id="version" /></span></footer>
        </div>
      </div>
    );
  }
});
