import React from 'react'

function removeUserProp(WrapperComp, gender) {
    return function newRander(props) {
        const { user, ...otherProps } = props
        return <WrapperComp {...{ ...otherProps, gender }} />
    }
}

function Demo() {
    return <div>1234</div>
}

export class Demo2 extends React.Component {
    componentDidMount() {
        console.log("Demo2 Mount")
    }

    render() {
        return <div>Demo2</div>
    }
}

removeUserProp(Demo)



function logPros(InputComp) {
    InputComp.prototype.componentDidMount = function (prevProps) {
        console.log("Current props", this.props)
        console.log("Prvios props", prevProps)
    }
    return InputComp
}


export const EnhanceComp = logPros(Demo2)

