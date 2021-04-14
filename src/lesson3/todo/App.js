import React from 'react'
import Todos from './Todos.js'
import AddTodo from './AddTodo.js'
import Footer from './Footer.js'
import "./index.css"

class App extends React.Component {
    state = {
        choosevalue: 1,
        data: this.props.data
    }

    //     render() {
    //         const { data } = this.state;
    //         return (
    //             <div className='ui comments'>
    //                 <h1>My Todo with React</h1>
    //                 <div className='ui divider'></div>
    //                 <AddTodo />
    //                 <Todos data={data} />
    //                 <Footer />
    //             </div>
    //         )
    //     }
    // }

    OnAddTodoItem(newItem) {
        let newdata = this.state.data.concat(newItem);
        this.setState({ data: newdata });
    }

    render() {
        const { data } = this.state;
        return (
            <div className='ui comments'>
                <h1>My Todo with React</h1>
                <div className='ui divider'></div>
                <AddTodo
                    AddTodoItem={this.OnAddTodoItem.bind(this)} />
                <Todos
                    data={data} />
                <Footer />
            </div>
        )
    }
}
export default App;