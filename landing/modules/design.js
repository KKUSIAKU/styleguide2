import React, {Component} from 'react';
import styles from '../index.styl';
import classNames from 'classnames/bind';
import {Jumbotron, Panel, Grid, Row, Col} from '../../src/index';
import Playground from "./playground/";
import css_variables from 'raw!../../src/theme/variables.styl';
const cx = classNames.bind(styles);

var gridExample1 = require('raw!./examples/Grid-1.example');
var gridExample2 = require('raw!./examples/Grid-2.example');
var gridExample3 = require('raw!./examples/Grid-3.example');
var gridExample4 = require('raw!./examples/Grid-4.example');
var gridExample5 = require('raw!./examples/Grid-5.example');

export default React.createClass({

  render: function() {

    return (
      <div id="design" data-group="Design" data-budicon={258} className={cx("design-page", "active")}>
        <Jumbotron title="Design" description="“The only important thing about design is how it relates to people.”"/>
        <div className={cx("content-styleguide")}>
          <div className={cx("typography-section")}>
            <section>
              <h2 id="typography">Typography</h2>
              <p>The body font is set to Avenir Next, font size is 15px and line height is 2.</p>
              <Row>
  	            <Col xs={12} sm={12} md={6} lg={6}>
                  <h5>Theme Light</h5>
                  <div className={cx("type-box", "theme-light")}>
                    <h1>Headline 1</h1>
                    <h2>Headline 2</h2>
                    <h3>Headline 3</h3>
                    <h4>Headline 4</h4>
                    <h5>Headline 5</h5>
                    <p>Body 1</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <h5>Theme Dark: add the class <code>.theme-dark</code> to the parent container.</h5>
                  <div className={cx("type-box", "theme-dark")}>
                    <h1>Headline 1</h1>
                    <h2>Headline 2</h2>
                    <h3>Headline 3</h3>
                    <h4>Headline 4</h4>
                    <h5>Headline 5</h5>
                    <p>Body</p>
                  </div>
                </Col>
              </Row>

              <div className={cx("row")}>
                <div className={cx("type-box", "box-table", "theme-light")}>
                  <table className={cx("typography-table")}>
                    <tbody><tr>
                        <td>Light theme default type color</td>
                        <td className={cx("big", "opacity-87", "variable")}>$color-text</td>
                        <td className={cx("big", "opacity-87", "name")}>Primary</td>
                        <td className={cx("big", "opacity-87", "color")}>#00000</td>
                        <td className={cx("big", "opacity-87", "opacity")}>87%</td>
                      </tr>
                      <tr>
                        <td rowSpan={2} className={cx("rowspan", "opacity-54")}>
                          Default light bg:<br />Auth0 Grey, #e3e5e7
                        </td>
                        <td className={cx("big", "opacity-54", "variable")}>$color-text-light</td>
                        <td className={cx("big", "opacity-54", "name")}>Secondary</td>
                        <td className={cx("big", "opacity-54", "color")}>#00000</td>
                        <td className={cx("big", "opacity-54", "opacity")}>54%</td>
                      </tr>
                      <tr>
                        <td className={cx("big", "opacity-26", "variable")}>$color-text-lighter</td>
                        <td className={cx("big", "opacity-26", "name")}>Disabled</td>
                        <td className={cx("big", "opacity-26", "color")}>#00000</td>
                        <td className={cx("big", "opacity-26", "opacity")}>26%</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className={cx("theme-dark")}>
                <div className={cx("type-box","box-table")}>
                  <table className={cx("typography-table")}>
                    <tbody><tr>
                        <td>Light theme default type color</td>
                        <td className={cx("big", "opacity-100", "variable")}>$color-text-contrast</td>
                        <td className={cx("big", "opacity-100", "name")}>Primary</td>
                        <td className={cx("big", "opacity-100", "color")}>#ffffff</td>
                        <td className={cx("big", "opacity-100", "opacity")}>100%</td>
                      </tr>
                      <tr>
                        <td rowSpan={2} className={cx("rowspan", "opacity-70")}>
                          Default light bg:<br />Auth0 Grey, #e3e5e7
                        </td>
                        <td className={cx("big", "opacity-70", "variable")}>$color-text-contrast-light</td>
                        <td className={cx("big", "opacity-70", "name")}>Secondary</td>
                        <td className={cx("big", "opacity-70", "color")}>#ffffff</td>
                        <td className={cx("big", "opacity-70", "opacity")}>70%</td>
                      </tr>
                      <tr>
                        <td className={cx("big", "opacity-30", "variable")}>$color-text-contrast-lighter</td>
                        <td className={cx("big", "opacity-30", "name")}>Disabled</td>
                        <td className={cx("big", "opacity-30", "color")}>#ffffff</td>
                        <td className={cx("big", "opacity-30", "opacity")}>30%</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </section>
          </div>

          <section>
            <h2>The grid</h2>
            <p>Grid based on the flex display property.</p>

            <Playground
              className={cx('playground', 'playground-grid')}
              title="Responsive"
              description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths."
              codeText={gridExample1}
              scope={{React: React, Panel: Panel, Row: Row, Col: Col}} />

            <Playground
              className={cx('playground')}
              title="Offset"
              description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths."
              codeText={gridExample2}
              scope={{React: React, Panel: Panel, Row: Row, Col: Col}} />

            <Playground
              className={cx('playground')}
              title="Auto width"
              description="Add any number of auto sizing columns to a row. Let the grid figure it out."
              codeText={gridExample3}
              scope={{React: React, Panel: Panel, Row: Row, Col: Col}} />

            <Playground
              className={cx('playground')}
              title="Alignment"
              description="Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column."
              codeText={gridExample4}
              scope={{React: React, Panel: Panel, Row: Row, Col: Col}} />

            <Playground
              className={cx('playground')}
              title="Distribution"
              description="Add classes to distribute the contents of a row or column."
              codeText={gridExample5}
              scope={{React: React, Panel: Panel, Row: Row, Col: Col}} />

          </section>

          <section>
            <h3>Body text </h3>
            <p>Is it possible to control man’s mental evolution so as to make him proof against the psychosis of hate and destructiveness? Here I am thinking by no means only of the so-called uncultured masses. Experience proves that it is rather the so-called “intelligentsia” that is most apt to yield to these disastrous collective suggestions, since the intellectual has no direct contact with life in the raw but encounters it in its easiest, synthetic form — upon the printed page. … But … here we have the best occasion of discovering ways and means to render all armed conflicts impossible.</p>
            <p>I know that in your writings we may find answers, explicit or implied, to all the issues of this urgent and absorbing problem. But it would be of the greatest service to us all were you to present the problem of world peace in the light of your most recent discoveries, for such a presentation well might blaze the trail for new and fruitful modes of action.</p>
            <p> <code>$font-size-base = 14px</code></p>

            <hr />

            <Row>
	            <Col xs="1" sm="1" md="1" lg="1/2">
                <h3>Lists</h3>
                <Row>
                  <Col xs="1" sm="1" md="1/2" lg="1/2">
                    <ol>
                      <li>Ricky Rauch</li>
                      <li>Ramiro Silveyra d'Avila</li>
                      <li>Gabriel Andretta </li>
                      <li>Javier Centurion</li>
                      <li>Cristian Douce </li>
                    </ol>
                  </Col>
                  <Col xs="1" sm="1" md="1/2" lg="1/2">
                    <ul>
                      <li>Ricky Rauch</li>
                      <li>Ramiro Silveyra d'Avila</li>
                      <li>Gabriel Andretta </li>
                      <li>Javier Centurion</li>
                      <li>Cristian Douce </li>
                    </ul>
                  </Col>
                </Row>
              </Col>

	            <Col xs="1" sm="1" md="1" lg="1/2" className={cx("quote")}>
                <h3>Quote</h3>
                <blockquote>
                  <p>“Intrigued by that enigma, he dug so deeply into her sentiments that in search of interest he found love, because by trying to make her love him he ended up falling in love with her.” </p>
                  <footer>Gabriel Garcí­a Márquez, One Hundred Years of Solitude</footer>
                </blockquote>
              </Col>
            </Row>
          </section>

          <section>
            <h2 id="primary-colors">Primary Colors</h2>
            <p>These are the colors that define our brand.</p>
            <Row>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","primary-color-1")}><span className={cx("color-info")}><strong>$color-1</strong><span data-hex="data-hex">{styles.primaryColor1}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","primary-color-2")}><span className={cx("color-info")}><strong>$color-2</strong><span data-hex="data-hex">{styles.primaryColor2}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","primary-color-3")}><span className={cx("color-info")}><strong>$color-3</strong><span data-hex="data-hex">{styles.primaryColor3}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","primary-color-4")}><span className={cx("color-info")}><strong>$color-4</strong><span data-hex="data-hex">{styles.primaryColor4}</span></span></div>
              </Col>
            </Row>
          </section>

          <section>
            <h2 id="secondary-colors">Secondary Colors</h2>
            <p>These colors are support to accompany the primary colors.</p>
            <Row>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","secondary-color-1")}><span className={cx("color-info")}><strong>$color-5</strong><span data-hex="data-hex">{styles.secondaryColor1}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","secondary-color-2")}><span className={cx("color-info")}><strong>$color-6</strong><span data-hex="data-hex">{styles.secondaryColor2}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","secondary-color-3")}><span className={cx("color-info")}><strong>$color-7</strong><span data-hex="data-hex">{styles.secondaryColor3}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("js-color","color","secondary-color-4")}><span className={cx("color-info")}><strong>$color-8</strong><span data-hex="data-hex">{styles.secondaryColor4}</span></span></div>
              </Col>
            </Row>
          </section>

          <section>
            <h2 id="bg-colors">Background Colors</h2>
            <p>We recommend to use this set of background colors in order to complement the primary and secondary colors.</p>
            <Row>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color", "bg-color-1")}><span className={cx("color-info")}><strong>$bg-color-1</strong><span data-hex="data-hex">{styles.bgColor1}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color", "bg-color-2")}><span className={cx("color-info")}><strong>$bg-color-2</strong><span data-hex="data-hex">{styles.bgColor2}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color", "bg-color-3")}><span className={cx("color-info")}><strong>$bg-color-3</strong><span data-hex="data-hex">{styles.bgColor3}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color", "bg-color-4")}><span className={cx("color-info")}><strong>$bg-color-4</strong><span data-hex="data-hex">{styles.bgColor4}</span></span></div>
              </Col>
            </Row>
          </section>

          <section>
            <h2 id="bg-colors-status">Status Colors</h2>
            <p>These colors are used in every alert message: info, error, success and warning.</p>
            <Row>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color","bg-status-success")}><span className={cx("color-info")}><strong>$status-success</strong><span data-hex="data-hex">{styles.bgStatusSuccess}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color","bg-status-error")}><span className={cx("color-info")}><strong>$status-error</strong><span data-hex="data-hex">{styles.bgStatusError}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color","bg-status-info")}><span className={cx("color-info")}><strong>$status-info</strong><span data-hex="data-hex">{styles.bgStatusInfo}</span></span></div>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <div className={cx("color","bg-status-alert")}><span className={cx("color-info")}><strong>$status-alert</strong><span data-hex="data-hex">{styles.bgStatusAlert}</span></span></div>
              </Col>
            </Row>
          </section>
          <section>
            <h2 id="color-hues">Color hues</h2>
            <p>The different hues have different wavelenghts in the spectrum. The value is a measurement of the brightness of a colour.</p>
            <Row>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <ul className={cx("hue-palette","primary-color-1")}>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li><span className={cx("hex")}>#D63AFF</span></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                </ul>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <ul className={cx("hue-palette","primary-color-2")}>
                  <li>&nbsp; <span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li><span className={cx("hex")}>#FF4C43</span></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                </ul>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <ul className={cx("hue-palette","primary-color-3")}>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li><span className={cx("hex")}>#01ACEE</span></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                </ul>
              </Col>
	            <Col xs="1" sm="1" md="1/2" lg="1/4">
                <ul className={cx("hue-palette","primary-color-4")}>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li><span className={cx("hex")}>#FFC23C</span></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                  <li>&nbsp;<span className={cx("hex")} /></li>
                </ul>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    );
  }
});
