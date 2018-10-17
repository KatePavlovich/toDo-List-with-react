import React from 'react'
import Task from './task'
import {connect} from 'react-redux'
import {addTasks} from '../ac'

class TasksList extends React.Component {

    render() {
        return (
                <div className="tasks">
                    {this.props.tasks.map(i => 
                    <Task task={i} deleteCallBack = {this.props.onDeleteTask} updateCallBack = {this.props.onUpdateTask} key={Math.random((new Date()).getTime())}/>
                    )}
                </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(TasksList)