import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SHOW_LAYER, SHOW_EDITER } from '../utils/type'
import {setStorage, getStorage} from '../utils/storage'

const localNotes = JSON.parse(getStorage('notes'))
const localCurrentNote = getStorage('cnote')
const initialState = {
  notes: localNotes || [],
  cnote: localCurrentNote || {},
  isShowLayer: false,
  isShowEditer: false,
  isShowToolbar: false,
}

const note = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        id: action.id,
        title: action.title,
        content: action.content,
        time: action.time,
      })
    default:
      return state
  }
}

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      let isNew = true
      const _arr = state.map((item) => {
        if (item.id === action.id) {
          isNew = false
          item.title = action.title
          item.content = action.content
          item.time = action.time
        }
        return item
      })

      if (isNew) {
        return [...state, note({}, action)]
      } else {
        return _arr
      }
    default:
    return state
  }
}


const noteApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      let _notes = notes(state.notes, action)
      setStorage('notes', JSON.stringify(_notes))
      setStorage('isShowToolbar', false)
      return Object.assign({}, state, {
        notes: _notes,
        isShowToolbar: false,
      })
    case SHOW_NOTE:
      const notesArr = state.notes.map((item) => {
        if (item.id === action.id) {
          item.isActive = true
        } else {
          item.isActive = false
        }
        return item
      })
      let _cnote = state.notes.filter(item => item.id === action.id)[0]

      setStorage('notes', JSON.stringify(notesArr))
      setStorage('cnote', _cnote)
      setStorage('isShowToolbar', true)

      return Object.assign({}, state, {
        notes: notesArr,
        cnote: _cnote,
        isShowToolbar: true,
      })
      case DELETE_NOTE:
        let newnotes = state.notes.filter(item => item.id !== action.id)
        setStorage('notes', JSON.stringify(newnotes))
        setStorage('cnote', {})
        setStorage('isShowToolbar', false)

        return Object.assign({}, state, {
          notes: newnotes,
          cnote: {},
          isShowToolbar: false,
        })
      case SHOW_LAYER:
        return Object.assign({}, state, {
         isShowLayer: action.isShowLayer,
        })
      case SHOW_EDITER:
        return Object.assign({}, state, {
          isShowEditer: action.isShowEditer,
        })
      default:
        return state
  }
}

export default noteApp
