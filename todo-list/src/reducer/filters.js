import { CHANGE_FILTER } from '../constants'

const BASE_FILTER = 'all'

const filter = (state = BASE_FILTER, { activeFilter, type }) => {
  switch (type) {
  case CHANGE_FILTER:
    return activeFilter
    break
  default:
    return state
  }
}

export default filter
