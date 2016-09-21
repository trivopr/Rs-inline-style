import autobind from 'autobind-decorator'
import React from 'react'

import Carousel from './carousel'
import Frame from './frame'
import Slide from './slide'
import Nav from './nav'

import css from './app.css'

export default class DriftApp extends React.Component {
  render() {
    return (
      <div>
          <div className="mycarousel">
              <Slide image={require('./images/1.jpg')} title="IMAGE 1 TITLE">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos
              </Slide>
              <Slide image={require('./images/2.jpg')} title="IMAGE 1 TITLE">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos
              </Slide>
              <Slide image={require('./images/3.jpg')} title="IMAGE 1 TITLE">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos
              </Slide>
              <Slide image={require('./images/4.jpg')} title="IMAGE 1 TITLE">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos
              </Slide>
              <Slide image={require('./images/5.jpg')} title="IMAGE 1 TITLE">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos
              </Slide>
          </div>
      </div>
    )
  }
}
