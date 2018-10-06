import React from 'react'
import Task from './task'

class TasksList extends React.Component {

    render() {
        return (
                <div className="tasks">
                    {this.props.tasks.map(i => 
                    <Task task={i} deleteCallBack = {this.props.onDeleteTask} updateCallBack = {this.props.onUpdateTask} key={Math.random((new Date()).getTime())} id={this.props.id}/>
                    )}
                </div>
        );
    }
}

export default TasksList