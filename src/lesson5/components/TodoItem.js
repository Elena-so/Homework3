import React from 'react'
import CheckBox from './CheckBox'

class TodoItem extends React.Component {

    render() {
        const { data, changeStatus } = this.props
        const handleChange = (checked) => changeStatus(data.id, checked)
        const className = "todo-item ui-state-default " + (data.completed ? 'completed' : 'pending')
        return <li className={className}>
            <div className="checkbox">
                <label>
                    {
                        // <input type="checkbox" value="" /> {data.text}
                    }
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                </label>
            </div>
        </li>
    }
}

export default TodoItem