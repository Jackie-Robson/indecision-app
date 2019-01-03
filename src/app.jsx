import React from 'react'
import ReactDom from 'react-dom'
import IndecisionApp from './components/IndecisionApp.jsx'
import 'normalize-css'
import './styles/style.scss'

const layout = () => {
    return (
        <div>
            <p>header</p>
            <p>footer</p>
        </div>
    )
}
ReactDom.render(<IndecisionApp options={[]}/> ,document.getElementById('app'))
