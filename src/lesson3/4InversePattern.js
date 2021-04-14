import React from 'react'


//组件提供方
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.defaultValue }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    render() {
        return <input value={this.state.value} onChange={this.handleChange} />
    }
}

function Input2({ value, onChange }) {
    return <input value={value} onChange={onChange} />
}


//调用方
function Demo({ defaultValue }) {
    return <Input defaultValue={defaultValue} />
}




class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tab: 1 }
        this.handleTabChange = this.handleTabChange.bind(this)
    }
    handleTabChange(e) {
        if (this.state.tab === 1) {
            this.setState({ tab: 2 })
        } else {
            this.setState({ tab: 1 })
        }
    }
    render() {
        const { tab } = this.state
        return (
            <div>
                {tab === 1 ? <Demo defaultValue={1} /> : <Demo defaultValue={2} />}
                <button onClick={this.handleTabChange} >switch tab</button>
            </div>
        )
    }
}

class Nav2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tab: 1, value1: 1, value2: 2 }
        this.handleTabChange = this.handleTabChange.bind(this)
        this.handleValue1Change = this.handleValue1Change.bind(this)
        this.handleValue2Change = this.handleValue2Change.bind(this)
    }
    handleTabChange(e) {
        console.log(this.state)
        if (this.state.tab === 1) {
            this.setState({ tab: 2 })
        } else {
            this.setState({ tab: 1 })
        }
    }
    handleValue1Change(e) {
        console.log('handleValue1Change', e.target.value)
        this.setState({ ...this.state, value1: e.target.value })
    }

    handleValue2Change(e) {
        console.log('handleValue2Change', e.target.value)

        this.setState({ ...this.state, value2: e.target.value })
    }

    render() {
        const { tab, value1, value2 } = this.state
        return (
            <div>
                {tab === 1 ? <Input2 value={value1} onChange={this.handleValue1Change} /> : <Input2 value={value2} onChange={this.handleValue2Change} />}
                <button onClick={this.handleTabChange} >switch tab</button>
            </div>
        )
    }
}

export default Nav2