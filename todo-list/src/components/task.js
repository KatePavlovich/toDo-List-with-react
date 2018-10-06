import React from 'react'

class Task extends React.Component {
    state = {
        task: this.props.task
    }

    toggleTaskStatus = () => {
        let newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        }
        this.setState({
            task: newTask
        })
    }

    render() {
        return (
            <li className="task" id={Math.random((new Date()).getTime())}>
                <input type="checkbox" onChange={this.toggleTaskStatus} />
                <p className={this.state.task.isDone ? 'done' : ''} >{this.state.task.title}</p>
                <span className="deleteBtn" onClick={() => this.props.deleteCallBack(this.props.id)}>x</span>
            </li>
        );
    }
}

export default Task