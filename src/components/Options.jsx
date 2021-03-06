import React from 'react'
import Option from './Option.jsx'

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your options</h3>
            <button 
                className='button button--link'
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
        
        {props.options.length === 0 && <p className='widget__message'>Add some things to do!</p>}
        <ul>
            {
                props.options.map((data, index) => (
                <Option 
                    data={data}
                    key={index}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}/>)
                )}
        </ul>
        
    </div>
)
 

export default Options