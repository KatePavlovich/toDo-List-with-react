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
        ]
    };

    createNewTask = e => {
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
        let newTasksList = [...this.state.tasks]
        for (let i = 0; i < newTasksList.length; i++) {
            if (newTasksList[i].id === task.id) {
                newTasksList[i].isDone = task.isDone;
            }
        }

        this.setState({
            tasks: newTasksList
        })
    }

    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <h2 className="app-header"> todo list </h2>
                <TaskCreator createNewTask={this.createNewTask} />
                <TasksList
                    tasks={this.state.tasks}
                    onDeleteTask={this.deleteTask}
                    onUpdateTask={this.toggleTaskStatus} />
                <TodoListFooter />
            </div>
        );
    }
}

export default TodoList;
