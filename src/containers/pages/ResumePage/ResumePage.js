// @flow
import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { DomainPanel } from "../../../components/organisms/"
import ActionWork from 'material-ui/svg-icons/action/work'
import SocialSchool from 'material-ui/svg-icons/social/school'
import styles from "./styles.css"

const iconStyle = {
  margin: "1.2em 0 0 1em",
  width: "36px",
  height: "36px",
}

export class ResumePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pos : 0,
      elems : [
        {
          name : "Purdue University",
          period : "Aug 2007 - May 2011",
          degrees : [
            "Computer Science",
            "Psychology",
          ],
          cat : "edu",
        },
        {
          name : "Episource",
          position : "Lead Software Engineer",
          period : "Jun 2017 - ",
          duties : [
            "Fullstack Engineer on NodeJS, React, Python stack",
            "Systems/database architecture and design lead",
            "Android mobile development and design lead",
          ],
          cat : "job",
        },
        {
          name : "General Assembly",
          position : "Android/Data Science Immersive Instructor",
          period : "Jun 2016 - Feb 2017",
          duties : [
            "Taught Android & Data Science for 8 hours a day to a classroom full of young professionals",
            "Rewrote course curriculum to better reflect real world applications of the material",
            "All client projects put into production as professional applications",
            "All students in the class offered a position within 3 months of graduation",
          ],
          cat : "job",
        },
        {
          name : "Service Technologies",
          position : "Lead Software Engineer",
          period : "Oct 2015 - May 2016",
          duties : [
            "Designed/wrote fullstack site and administrative CMS in Java Play and AngularJS",
            "Designed/wrote company’s authentication standards and sns notification framework",
            "Designed/wrote customizeable nlp chat parser with UI",
          ],
          cat : "job",
        },
        {
          name : "Snaps",
          position : "Head of Software Engineering",
          period : "Nov 2014 - Sep 2015",
          duties : [
            "Designed and coded company’s enterprise site resting on a MEAN stack",
            "Solely responsible for designing and creating over 30 dedicated Android applications",
            "Wrote and implemented white-labeled framework for contracting out additional Android applications",
          ],
          cat : "job",
        }
      ]
    }
  }

  retIcon = (elem, alt) => {
    if (alt){
      if (elem.cat === "edu"){
        return <SocialSchool style={iconStyle}/>
      } else if (elem.cat === "job"){
        return <ActionWork style={iconStyle}/>
      }
    } else {
      if (elem.cat === "edu"){
        return <SocialSchool/>
      } else if (elem.cat === "job"){
        return <ActionWork/>
      }
    }
    return <div></div>
  }

  renderContent = () => {
    const { pos, elems } = this.state
    const card = elems[pos]
    if (card.cat === "edu") {
      return (
        <div className={ styles.content }>
          <div className={ styles.left + " " + styles.alt }>
            { this.retIcon(card, true) }
          </div>
          <div className={ styles.right + " " + styles.alt }>
            <h1>{ card.name }</h1>
          </div>
          <h3>Period: { card.period }</h3>
          { card.degrees.map((degree) => <div>{ degree }</div>) }
        </div>
      )
    } else if (card.cat === "job") {
      return (
        <div className={ styles.content }>
          <div className={ styles.left + " " + styles.alt }>
            { this.retIcon(card, true) }
          </div>
          <div className={ styles.right + " " + styles.alt }>
            <h1>{ card.name }</h1>
          </div>
          <h3>Position: { card.position }</h3>
          <h3>Period: { card.period }</h3>
          { card.duties.map((duty) => <div>{ duty }</div>) }
        </div>
      )
    }
  }

  renderElem = (elem, idx) => {
    return (
      <div key={ idx } onClick={() => this.setState({ pos: idx })} className={ styles.list + " " + styles.border + " " + styles.noselect }>
        <div className={ styles.left }>
          { this.retIcon(elem, false) }
        </div>
        <div className={ styles.right }>
          <div>{ elem.name }</div>
          <div>{ elem.period }</div>
        </div>
      </div>
    )
  }

  render() {
    const { elems } = this.state
    return (
      <div className={ styles.root }>
        <div className={ styles.left + " " + styles.border + " " + styles.solid }>
          { elems.map(this.renderElem) }
        </div>
        <div className={ styles.right + " " + styles.small }>
          { this.renderContent() }
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