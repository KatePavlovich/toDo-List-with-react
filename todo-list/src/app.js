import React from "react";
import TodoListFooter from "./components/todoListFooter";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/tasksList";

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            filter: 'all'
        }
        fetch('https://repetitora.net/api/JS/Tasks?widgetId=119876&count=30', {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'accept': 'application/json'
            },
            mode: 'cors'
        })
            .then(result => result.json())
            .then(tasksFromServer => {
                let tasks = tasksFromServer.map(i => {
                    return {
                        id: i.id,
                        title: i.title,
                        isDone: i.done
                    }
                })
                this.setState({
                    tasks: tasks
                });
            })
    }

    putTaskToState = e => {
        if (e.key === "Enter") {

            const data = new URLSearchParams()
            data.append('widgetId', 119876)
            data.append('title', e.currentTarget.value)

            const newTaskInput = e.currentTarget

            fetch('https://repetitora.net/api/JS/Tasks', {
                method: 'POST',
                body: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                mode: 'cors'

            })
                .then(result => result.json())
                .then(data => {
                    console.log(data)

                    this.setState({
                        tasks: [
                            ...this.state.tasks,
                            { title: data.task.title, isDone: data.task.done, id: data.task.id }
                        ]
                    });
                    newTaskInput.value = "";
                })

        }
    }

    toggleTaskStatus = (task) => {
        let newTasksList = [...this.state.tasks]
        newTasksList.forEach(t => {
            if (t.id === task.id) {
                t.isDone = !task.isDone
                return
            }
        })

        this.setState({
            tasks: newTasksList
        })
    }

    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        });
    }

    changeFilter = (filterValue) => {
        this.setState({ filter: filterValue })
    }

    clearComplited = () => {
        this.setState({ tasks: this.state.tasks.filter(i => !i.isDone) })
    }

    render() {
        let { tasks, filter } = this.state
        let filteredTasks = []
        switch (filter) {
            case 'all':
                filteredTasks = tasks;
                break;
            case 'selected':
                filteredTasks = tasks.filter(i => !i.isDone);
                break;
            case 'complited':
                filteredTasks = tasks.filter(i => i.isDone);
                break;
            default:
                filteredTasks = tasks;
        }
        return (
            <div className="container-fluid">
                <h2 className="app-header"> todo list </h2>
                <TaskCreator putTaskToState={this.putTaskToState} />
                <TasksList
                    tasks={filteredTasks}
                    onDeleteTask={this.deleteTask}
                    onUpdateTask={this.toggleTaskStatus} />
                <TodoListFooter
                    tasks={tasks}
                    filter={filter}
                    onFilterChanged={this.changeFilter}
                    clearComplited={this.clearComplited} />
            </div>
        );
    }
}

export default TodoList;
