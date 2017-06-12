// @flow
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux"

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import sStyles from "./styles.css"

export class Gridlist extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      pics: props.pics.map((url, idx) => {
        return {
          img : url,
          title: 'Racoon',
          author: 'Brad Z',
          featured: idx % 3 ? false : true,
        }
      }),
      styles: {
        gridList: {
          width: 800,
          margin: '1em auto',
          height: '77vh',
          overflowY: 'auto',
        },
      }
    }
  }

  mapTiles = (tile, idx) => {
    <GridTile
      key={tile.img}
      title={tile.title}
      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      actionPosition="left"
      titlePosition="top"
      titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      cols={tile.featured ? 2 : 1}
      rows={tile.featured ? 2 : 1}>
      <img src={tile.img} />
    </GridTile>
  }


  render() {
    const { styles, pics } = this.state
    return (
      <div className={sStyles.root}>
          <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}>
          {pics.map((tile, idx) => (
            <GridTile
              key={ idx }
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}>
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

Gridlist.propTypes = {
  pics: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Gridlist)