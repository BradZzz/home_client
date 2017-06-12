// @flow
import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { DomainPanel } from "../../../components/organisms/"
import { GridList } from "../../../components/cells/"
import styles from "./styles.css"

export class PortfolioPage extends Component {
  constructor(props) {
    super(props)
    const coon = "http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.ngsversion.1485815402351.adapt.1900.1.JPG"
    this.state = {
      pics : [coon, coon, coon, coon, coon, coon, coon, coon, coon, coon]
    }
  }

  render() {
    const { pics } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          <GridList pics={ pics }></GridList>
        </div>
      </div>
    )
  }
}

PortfolioPage.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { signedIn } = state.user
  return {
    signedIn,
  }
}

export default connect(mapStateToProps)(PortfolioPage)