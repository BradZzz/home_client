// @flow
import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { DomainPanel } from "../../../components/organisms/"
//import * as DomainActions from "../../../actions/domain"
import styles from "./styles.css"

export class ResumePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          Resume Page
        </div>
      </div>
    )
  }
}

ResumePage.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { signedIn } = state.user
  return {
    signedIn,
  }
}

export default connect(mapStateToProps)(ResumePage)