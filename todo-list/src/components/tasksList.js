import React from 'react'
import {connect} from 'react-redux'
import Task from './task'

class TasksList extends React.Component {

    render() {
        return (
                <div className="tasks">
                    {this.props.tasks.map(i => 
                    <Task task={i}  updateCallBack = {this.props.onUpdateTask} key={Math.random((new Date()).getTime())}/>
                    )}
                </div>
        );
    }
}


export default connect(state => ({
    tasks: state.tasks}))(TasksList)