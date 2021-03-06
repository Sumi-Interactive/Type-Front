import { TOGGLE_SCAN_HELP_INFORMATION,
          HIDE_SCAN_HELP_INFORMATION,
          GENERATE_SCAN_QRCODE,
          DATA_INIT,
          READY_IMPORT_DIARIES,
          IMPORT_BUTTON_PROCESSING,
          CANCEL_IMPORT_DIARIES,
          OPEN_LIST_SINGLE_VIEW,
          CLOSE_LIST_SINGLE_VIEW,
          CHANGE_CURRENT_GRID,
          UPDATE_GRID_CONTENT,
          GENERATE_IMPORT_SCAN_QRCODE } from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

var initialState = window.INITIAL

function rootReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    // Scan Page
    case GENERATE_SCAN_QRCODE:
      return assignToEmpty(state, {
        qrcodeText: action.qrcodeText
      })
    case TOGGLE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: !state.showInfo
      });
    case HIDE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: false
      });
    case DATA_INIT:
      setTimeout(() => {action.history.pushState(null, '/grids')}, 100)
      return assignToEmpty(state, {
        gridsSet: action.gridsSet
      })

    // Grids Page
    case READY_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: true
      });
    case IMPORT_BUTTON_PROCESSING:
      return assignToEmpty(state, {
        importStatus: 'processing'
      });
    case CANCEL_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: false
      });
    case OPEN_LIST_SINGLE_VIEW:
      return assignToEmpty(state, {
        showEdit: true,
        currentEditGridId: action.gridId
      });
    case CLOSE_LIST_SINGLE_VIEW:
      return assignToEmpty(state, {
        showEdit: false,
        currentEditGridId: null,
        changeGrid: false
      });
    case CHANGE_CURRENT_GRID:
      return assignToEmpty(state, {
        currentEditGridId: action.gridId,
        changeGrid: true
      });
    case UPDATE_GRID_CONTENT:
      let newGrids = state.gridsSet.grids.map((grid) => {
        if (grid.id == action.gridId) {
          grid = assignToEmpty(grid, {
            content: action.content
          })
        }
        return grid
      })

      let newGridsSet = assignToEmpty(state.gridsSet, {grids: newGrids})

      return assignToEmpty(state, {
        gridsSet: newGridsSet
      })
    case GENERATE_IMPORT_SCAN_QRCODE:
      return assignToEmpty(state, {
        importQRcodeText: action.importQRcodeText
      })

    default:
      return state;
  }
}

export default rootReducer
