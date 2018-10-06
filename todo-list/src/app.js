import React from 'react'
import Task from './components/task'

class TodoList extends React.Component {
    state = {
        tasks: [
            {
                title: 'jjjj',
                isDone: false,
                id: '1'
            },
            {
                title: 'lalala',
                isDone: false,
                id: '2'
            }
        ]

    }

    createNewTask = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                tasks: [...this.state.tasks, {title: e.currentTarget.value, isDone: false}]
            })
            e.currentTarget.value = ''
        }
    }

    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }

    render() {
        return (
            <div className="container-fluid" >
                <h2 className="app-header" > todo list </h2>
                <header >
                    <input onKeyPress={this.createNewTask} />

                </header>
                <div className="tasks">
                    {this.state.tasks.map(i => 
                    <Task task={i} deleteCallBack = {this.deleteTask}  key={Math.random((new Date()).getTime())} />
                    )}
                </div>
            </div>
        );
    }
}

export default TodoList