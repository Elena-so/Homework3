import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import AddTodo from './AddTodo'
import FilteredList from './FilteredList'

class TodoList extends React.Component {
    applyFilter(list, filter) {
        switch (filter) {
            case 'completed':
                return list.filter(item => item.completed === true)
            case 'active':
                return list.filter(item => item.completed !== true)
            default:
                return list
        }
    }
    render() {
        console.log(this.props)
        const { title, items, filter } = this.props.data
        const { addNew, changeFilter, changeStatus } = this.props.actions
        const filtedList = this.applyFilter(items, filter)
        return (
            <div className="todolist">
                <header>
                    <h1>{title}</h1>
                    <AddTodo addNew={addNew} />

                </header>
                <FilteredList items={filtedList} changeStatus={changeStatus} />
                {
                    //     <ul className="list-unstyled">
                    //     {filtedList.map(item => <TodoItem key={item.id} data={item} changeStatus={changeStatus} />)}
                    // </ul>
                }

                <Footer {...{ count: items.length, filter, changeFilter }} />
            </div>
        )
    }
}

export default TodoList