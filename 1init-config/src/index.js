import React, { Component } from 'react';
import {render} from 'react-dom';

class CountBtn extends Component {
    render () {
        <button>{this.props.children}</button>
    }
}

class Counter extends Component {
    render () {
        <span>10</span>
    }
}

class App extends Component {
    render () {
        return (
            <>
                <CountBtn type="subtraction">-</CountBtn>
                <Counter />
                <CountBtn type="addition">+</CountBtn>
            </>
        )
    }
}

render(
    <App/>,
    document.querySelector('#root')
)