import React from 'react'
import * as KeyCode from "keycode-js"

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value || ''
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    clear() {
        this.setState({ value: '' })
    }
    handleKeyUp(e) {
        const { addNew } = this.props
        const text = this.state.value.trim()
        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            addNew(text)
            this.clear()
        }
    }
    render() {
        return (
            <input type="text" className="form-control add-todo" placeholder="添加"
                value={this.state.value}
                onKeyUp={(e) => this.handleKeyUp(e)}
                onChange={e => this.handleChange(e)}

            />
        )
    }
}

export default AddTodo