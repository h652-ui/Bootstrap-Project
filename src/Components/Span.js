import React from 'react'

export default function Span(props) {
    return (
        <div className= {`d-flex justify-content-center my-3 text-${props.mode === 'light'? 'dark': 'light'}`}><span>Enter some text above to <font className='text-danger'>Preview</font></span></div>
    )
}
