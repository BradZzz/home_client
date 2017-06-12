// @flow
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux"
import Slider from 'react-slick'
import styles from "./styles.css"

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pics : ["../images/profile_01.jpg", "../images/profile_02.jpg", "../images/profile_03.jpg",
        "../images/profile_04.jpg", "../images/profile_05.jpg", "../images/profile_06.jpg"],
      settings : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  }

  renderImage = (img, idx) => {
    return (
      <div key={ idx }>
        <img src={ img } className={ styles.image }/>
      </div>
    )
  }

  render() {
    const { settings, pics } = this.state
    return (
      <div className={ styles.root }>
        <div className={ styles.overlay }></div>
        <div className={ styles.imgParent }>
          <Slider {...settings}>
            { pics.map(this.renderImage) }
          </Slider>
        </div>
      </div>
    )
  }
}