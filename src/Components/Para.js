import React from 'react'

export default function Para(props) {
  return (
        <p style = {Object.assign({color: `${props.mode === 'light'? 'black': 'white'}`}, props.font)}> {props.text} </p>
  )
}
