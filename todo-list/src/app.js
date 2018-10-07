import React from "react";
import TodoListFooter from "./components/todoListFooter";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/tasksList";

class TodoList extends React.Component {
    state = {
        tasks: [
            {
                title: "jjjj",
                isDone: false,
                id: "1"
            },
            {
                title: "lalala",
                isDone: false,
                id: "2"
            }
        ],
        filter: 'all'
    };

    putTaskToState = e => {
        if (e.key === "Enter") {
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    { title: e.currentTarget.value, isDone: false, id: Math.random((new Date()).getTime()) }
                ]
            });
            e.currentTarget.value = "";
        }
    };

    toggleTaskStatus = (task) => {
       // debugger
        let newTasksList = [...this.state.tasks]
        newTasksList.forEach(t => {
            if(t.id === task.id) {
                t.isDone = !task.isDone
                return
            }
        })
/*         for (let i = 0; i < newTasksList.length; i++) {
            if (newTasksList[i].id === task.id) {
                newTasksList[i].isDone = task.isDone;
            } 
        }*/

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
