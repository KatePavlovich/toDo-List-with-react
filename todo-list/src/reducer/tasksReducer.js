import {ADDTASK} from '../constants'

export default (state=[], action) => {
    return action.type === ADDTASK ? state : state
}