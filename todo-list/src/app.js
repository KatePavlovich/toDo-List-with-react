import React from "react";
import TodoListFooter from "./components/todoListFooter";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/tasksList";
import { createTask, getTasks } from "./components/services";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: "all"
    };

    getTasks(119876).then(tasksFromServer => {
      let tasks = tasksFromServer.map(i => {
        return {
          id: i.id,
          title: i.title,
          isDone: i.done
        };
      });
      this.setState({
        tasks: tasks
      });
    });
  }

  putTaskToState = e => {
    if (e.key === "Enter") {
      const newTaskInput = e.currentTarget;
      createTask(newTaskInput.value, 119876).then(data => {
        this.setState({
          tasks: [
            ...this.state.tasks,
            { title: data.task.title, isDone: data.task.done, id: data.task.id }
          ]
        });
        newTaskInput.value = "";
      });
    }
  };

  toggleTaskStatus = task => {
    let newTasksList = [...this.state.tasks];
    newTasksList.forEach(t => {
      if (t.id === task.id) {
        t.isDone = !task.isDone;
        return;
      }
    });

    this.setState({
      tasks: newTasksList
    });
  };

  changeFilter = filterValue => {
    this.setState({ filter: filterValue });
  };

  clearComplited = () => {
    this.setState({ tasks: this.state.tasks.filter(i => !i.isDone) });
  };

  render() {
    let { tasks, filter } = this.state;
    let filteredTasks = [];
    switch (filter) {
      case "all":
        filteredTasks = tasks;
        break;
      case "selected":
        filteredTasks = tasks.filter(i => !i.isDone);
        break;
      case "complited":
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
          onUpdateTask={this.toggleTaskStatus} 
        />
        <TodoListFooter
          tasks={tasks}
          filter={filter}
          onFilterChanged={this.changeFilter}
          clearComplited={this.clearComplited}
        />
      </div>
    );
  }
}

export default TodoList;
