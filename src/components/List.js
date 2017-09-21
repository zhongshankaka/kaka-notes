import React, { Component } from 'react'
import ListItem from './ListItem'


class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let listData = this.props.listData
    let showNotesList = this.props.showNotesList
    let changeStatusShow = this.props.changeStatusShow
    let noteClick = this.props.noteClick
    let addBtnClick = this.props.addBtnClick
    let isShowLayer = this.props.isShowLayer
    let showListStyle = showNotesList ? 'toright' : 'toleft'
    return (
      <div className={"notes-box " + showListStyle}>
        <h1>所有笔记</h1>
        {listData.length === 0 ?
         <p className="key">写点什么？</p> :
         <ul className="notes-list">
           {listData.map((item) => {
             const clsName = (item.isActive) ? 'active' : ''
             return (
               <ListItem
                 clsName={clsName} key={item.id}
                 id={item.id} title={item.title} time={item.time}
                 content={(item.content.length>60) ? (item.content.substring(0, 60)+'...') : item.content}
                 showNotesList={showNotesList} changeStatusShow={changeStatusShow} onClick={noteClick} />
             )
           })}
         </ul>
        }
        <span
          title="新增"
          className="add-new"
          onClick={() => addBtnClick(!isShowLayer)}>
          <i className="iconfont">&#xe889;</i>
        </span>
      </div>
    )
  }
}

export default List
