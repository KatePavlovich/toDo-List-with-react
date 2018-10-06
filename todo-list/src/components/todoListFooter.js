import React from 'react'

class TodoListFooter extends React.Component {
    state = {

    }


    render() {
        return (
            <footer>
                <div>activeItems.length items left</div>
                <div>All</div>
                <div>active</div>
                <div>complited</div>
                <div>clear complited</div>
            </footer>
        );
    }
}

export default TodoListFooter