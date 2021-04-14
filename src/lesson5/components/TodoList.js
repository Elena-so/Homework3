import React from 'react'
import TodoItem from "./TodoItem"
import Footer from './Footer'
import AddTodo from './AddTodo'
import FilteredList from './FilteredList'
import InputWrapper from './InputWrapper'
import { applyFilter, search } from "../services/filter"

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
        const { title, items, filter, mode, query } = this.props.data
        const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = this.props.actions
        const filtedList = search(applyFilter(items, filter), query);
        return (
            <div className="todolist">
                <header>
                    <h1>{title}</h1>
                    {/*<AddTodo addNew={addNew} />*/}
                    <InputWrapper {...{ addNew, mode, query, setSearchQuery }} />


                </header>
                <FilteredList items={filtedList} changeStatus={changeStatus} />
                {
                    //     <ul className="list-unstyled">
                    //     {filtedList.map(item => <TodoItem key={item.id} data={item} changeStatus={changeStatus} />)}
                    // </ul>
                }

                <Footer {...{ count: items.length, filter, changeFilter, mode, changeMode }} />
            </div>
        )
    }
}

export default TodoList