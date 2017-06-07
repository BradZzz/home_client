// @flow
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux"
import Slider from 'react-slick'
import styles from "./styles.css"

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  }

  render() {
    const { settings } = this.state
    return (
      <div className={ styles.root }>
        <div className={ styles.overlay }></div>
        <Slider {...settings}>
          <div><img src="../images/profile_01.jpg" className={ styles.image }/></div>
          <div><img src="../images/profile_02.jpg" className={ styles.image }/></div>
          <div><img src="../images/profile_03.jpg" className={ styles.image }/></div>
          <div><img src="../images/profile_04.jpg" className={ styles.image }/></div>
          <div><img src="../images/profile_05.jpg" className={ styles.image }/></div>
          <div><img src="../images/profile_06.jpg" className={ styles.image }/></div>
        </Slider>
      </div>
    )
  }
}