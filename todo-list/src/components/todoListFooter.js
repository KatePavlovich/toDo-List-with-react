import React from 'react'

class TodoListFooter extends React.Component {
    state = {

    }

    handleFilterChanged=(e) =>{
        this.props.onFilterChanged(e.currentTarget.dataset.value)
    }

    render() {
        let {tasks, filter, clearComplited} = this.props
        return (
            <footer>
                <div>{tasks.filter(i => !i.isDone).length} items left</div>
                <div 
                className={filter === 'all' ? 'selected' : ''}
                data-value="all" 
                onClick={this.handleFilterChanged}
                >All</div>
                <div
                className={filter === 'selected' ? 'selected' : ''}
                data-value="selected" 
                onClick={this.handleFilterChanged}
                >active</div>
                <div
                className={filter === 'complited' ? 'selected' : ''}
                data-value="complited" 
                onClick={this.handleFilterChanged}
                >complited</div>
                <div onClick={clearComplited}>clear complited</div>
            </footer>
        );
    }
}

export default TodoListFooter