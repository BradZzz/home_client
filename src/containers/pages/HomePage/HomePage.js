// @flow
import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { Gallery } from "../../../components/cells/"
import styles from "./styles.css"

export class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <Gallery></Gallery>
      </div>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(HomePage)