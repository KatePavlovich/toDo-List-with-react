import React from 'react'

class Task extends React.Component {
/*     deleteTask=(e) => {
        this.props.deleteCallBack(this.)
    }
 */
    render() {
        return (
            <li className="task" id={this.props.id}>
                <input type="checkbox" onChange={() => this.props.updateCallBack(this.props.task)} />
                <p className={this.props.task.isDone ? 'done' : ''} >{this.props.task.title}</p>
                <span className="deleteBtn" onClick={() => this.props.deleteCallBack(this.props.task.id)}>x</span>
            </li>
        );
    }
}

export default Task