import React from 'react'

class Task extends React.Component {

    render() {
        return (
            <li className="task" id={this.props.id}>
                <input type="checkbox" onChange={() => this.props.updateCallBack(this.props.id)} />
                <p className={this.props.task.isDone ? 'done' : ''} >{this.props.task.title}</p>
                <span className="deleteBtn" onClick={() => this.props.deleteCallBack(this.props.id)}>x</span>
            </li>
        );
    }
}

export default Task