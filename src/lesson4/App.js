import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'
import { getAll, addToList, updateStatus } from "./services/todo"
import { FILTER_ACTIVE } from "./services/filter"
import StateProvider from "./StateProvider"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <StateProvider>
                        <TodoList />
                    </StateProvider>
                </div>
            </div>
        )
    }
}


const MyApp = <App />
export default MyApp