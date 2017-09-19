import { connect } from 'react-redux'
import List from '../components/List'
import { showNote, showLayer } from '../actions/note'

const mapStateToProps = (state, ownProps) => ({
  listData: state.notes,
  isShowLayer: state.isShowLayer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  noteClick: (id) => {
    dispatch(showNote(id))
  },
  addBtnClick: (isShowLayer) => {
    dispatch(showLayer(isShowLayer))
  }
})

const ContainerList = connect(mapStateToProps, mapDispatchToProps)(List)

export default ContainerList
