import React from 'react'
import "./index.css"

var styles = {
    'title': {
        marginRight: 10,
        fontSize: 20
    },

    'top': {
        marginTop: 20
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h2 style={styles.top}>show</h2>
                <button
                    type='submit'
                    style={styles.top}
                    className='ui blue button'
                    value='1'
                    ref='all'
                >
                    全部
        </button>
                <button
                    type='submit'
                    style={styles.top}
                    className='ui blue button'
                    value='2'
                    ref='active'
                >
                    还未完成
        </button>
                <button
                    type='submit'
                    style={styles.top}
                    className='ui blue button'
                    value='3'
                    ref='complete'
                >
                    已完成
        </button>
            </div>
        )
    }
}

export default Footer;