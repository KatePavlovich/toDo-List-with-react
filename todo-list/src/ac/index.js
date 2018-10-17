import { ADDTASK, DELETE_TASK } from '../constants'

export function addTasks() {
    return {
        type: ADDTASK
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: {id}
    }
}
