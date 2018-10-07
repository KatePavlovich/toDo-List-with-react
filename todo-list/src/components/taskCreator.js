import React from 'react'

class TaskCreator extends React.Component {
    state = {
    }

    render() {
        return (
            <header >
                <input onKeyPress={this.props.putTaskToState} />
            </header>
        );
    }
}

export default TaskCreator