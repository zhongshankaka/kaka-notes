import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className={this.props.clsName}
          data-id={this.props.id}
          onClick={() => {
          this.props.onClick(this.props.id)
          this.props.changeStatusShow(!this.props.showNoteDetail)
      }}>
        <div className="note-box"></div>
          <h3 className="note-title">{this.props.title}</h3>
          <p>{this.props.content}</p>
          <span><i className="iconfont">&#xe64d;</i>{this.props.time}</span>
      </li>
    )
  }
}

export default ListItem
