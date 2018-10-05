import React from 'react'

class Task extends React.Component {
    state = {
        task: this.props.task
    }

    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter(item => item !== id)
        })
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
            <li className={this.state.task.isDone ? 'task' : 'task done'} >
                <input type="checkbox" onChange={() => this.toggleTaskStatus} />
                {this.state.task.title}
                <span className="deleteBtn" onClick={() => this.props.deleteCallBack}>x</span>
            </li>
        );
    }
}

export default Task