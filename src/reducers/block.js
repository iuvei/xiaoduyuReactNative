import merge from 'lodash/merge'

let initialState = {}

export default function block(state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_BLOCK_STATE':
      return merge({}, action.state, {})

    case 'SET_BLOCK_LIST_BY_NAME':
      var { name, data } = action
      state[name] = data
      return merge({}, state, {})

    case 'REMOVE_BLOCK_BY_ID':

      for (let i in state) {

        let data = state[i].data
        if (data.length > 0) {
          for (let n = 0, max = data.length; n < max; n++) {
            if (data[n]._id == action.id) {
              data.splice(n, 1)
              break
            }
          }
        }
      }

      return merge({}, state, {})

    default:
      return state;
  }
}

export const getBlockListByName = (state, name) => {
  return state.block[name] ? state.block[name] : {}
}
