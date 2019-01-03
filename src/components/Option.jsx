import React from 'react'

const Option = (props) => (
    <li className ='option' 
        key={props.ind}
        >
        <p className='option__text'>{props.count}.  {props.data}</p>
        <button 
            className='button button--link'
            onClick={(e)=>{
                props.handleDeleteOption(props.data)
            }}
        >   
            Remove
        </button>
    </li>
)   


export default Option