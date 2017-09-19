import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from './Head'
import ContainerList from '../containers/ContainerList'
import ContainerPreview from '../containers/ContainerPreview'
import ContainerLayer from '../containers/ContainerLayer'
import ContainerEdit from '../containers/ContainerEdit'
import '../../node_modules/github-markdown-css/github-markdown.css'
import './App.css'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNoteDetail: false,
    }

  }

  changeStatusShow(status) {
    this.setState({
      showNoteDetail: status,
    })
  }

  render() {
    const layer = this.props.isShowLayer ? <ContainerLayer /> : ''
    const editer = this.props.isShowEditer ? <ContainerEdit /> : ''
    return (
      <div className="app">
        <Head></Head>
        <div className="main-screen">
          <ContainerList
            showNoteDetail={this.state.showNoteDetail}
            changeStatusShow={this.changeStatusShow.bind(this)}/>
          <ContainerPreview
            showNoteDetail={this.state.showNoteDetail}
            changeStatusShow={this.changeStatusShow.bind(this)}/>
        </div>
        {layer}
        {editer}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isShowLayer: state.isShowLayer,
  isShowEditer: state.isShowEditer,
})

const App = connect(mapStateToProps)(Root)
export default App
