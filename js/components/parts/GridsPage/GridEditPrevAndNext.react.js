import React, { Component } from 'react'

import { closeListSingleView,
          asyncUpdateGridContent,
          changeCurrentGrid } from '../../../actions/AppActions'

import Back from '../../../../img/back.png'
import Prev from '../../../../img/prev.png'
import Next from '../../../../img/next.png'

export default class GridEditPrevAndNext extends Component {
  changeGrid(gridId) {
    this.props.dispatch(changeCurrentGrid(gridId))
  }

  render() {
    let data = this.props.dataset

    let all = (
      <div className="gridedit--footer">
        <a className="gridedit--prev" onClick={this.changeGrid.bind(this, data.prev.id)} title={data.prev.title}>
          <img src={Prev} /><span>{data.prev.title}</span>
        </a>
        <a className="gridedit--next" onClick={this.changeGrid.bind(this, data.next.id)} title={data.next.title}>
          <img src={Next} /><span>{data.next.title}</span>
        </a>
      </div>
    )

    let prev = (
      <div className="gridedit--footer">
        <a className="gridedit--prev" onClick={this.changeGrid.bind(this, data.prev.id)} title={data.prev.title}>
          <img src={Prev} /><span>{data.prev.title}</span>
        </a>
      </div>
    )

    let next = (
      <div className="gridedit--footer">
        <a className="gridedit--next" onClick={this.changeGrid.bind(this, data.next.id)} title={data.next.title}>
          <img src={Next} /><span>{data.next.title}</span>
        </a>
      </div>
    )

    if (data.prev.title && data.next.title) {
      return all
    } else {
      if (data.prev.title) {
        return prev
      } else {
        return next
      }
    }
  }
}
