import React, { Component } from 'react'
const marked = require('marked')

export default class Preview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let showListStyle = this.props.showNotesList ? "toright" : "toleft"
    let showToolbarStyle = this.props.isShowToolbar ? "show" : "hidden"
    let transIcon
    if (this.props.showNotesList) {
      transIcon = (<i className="iconfont"
             onClick={this.props.changeStatusShow.bind(this, !this.props.showNotesList)} >&#xe660;</i>)
    } else {
      transIcon = (<i className="iconfont"
             onClick={this.props.changeStatusShow.bind(this, !this.props.showNotesList)} >&#xe65f;</i>)
    }
    return (
      <div className={"preview-box " + showListStyle}>
        <div className="preview-top">
          {transIcon}
          <a title="编辑"
             className={"modify-btn iconfont " + showToolbarStyle}
             onClick={() => {
             if (this.props.currentNote.id === undefined) return
             this.props.editClick(!this.props.isShowEditer)}}>&#xe662;</a>
          <a title="删除"
             className={"delete-btn iconfont " + showToolbarStyle}
             onClick={() => {
             const _id = this.props.currentNote.id
             if (_id === undefined) return
             this.props.deleteClick(_id)
             this.props.changeStatusShow(!this.props.showNotesList)}}>&#xe645;</a>
        </div>
        <div className="preview-wrap markdown-body"
             dangerouslySetInnerHTML={{ __html: marked(`${this.props.currentNote.title ? '# ' + this.props.currentNote.title : ''}\n\n${this.props.currentNote.content ? this.props.currentNote.content : ''}`) }}></div>
      </div>
    )
  }
}
