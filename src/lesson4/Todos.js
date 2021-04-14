import React from 'react'
import TodoItem from "./TodoItem"

class Todos extends React.Component {
    render() {
        const items = this.props.data.map(({ id, text, completed }, index) => {
            return <TodoItem
                key={index}
                id={id}
                text={text}
                completed={completed}
            />
        })
        return <div>{items}</div>
    }
}

export default Todos