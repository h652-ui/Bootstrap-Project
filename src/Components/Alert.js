import React from 'react'

export default function Alert(props) {
    const convertFirstLetter = (word) => {
        let new_word = word.toLowerCase();
        return new_word.charAt(0).toUpperCase() + new_word.slice(1);

    }
    return (
        <div style={{height: "25px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} id="target" role="alert" style={{padding: "5px"}}>
                <div><strong>{convertFirstLetter(props.alert.type)}! </strong>{props.alert.msg}</div>
            </div>}
        </div>
    )
}
