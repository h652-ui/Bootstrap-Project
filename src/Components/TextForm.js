import React, { useState } from 'react'
import Para from './Para';
import Span from './Span';

export default function TextForm(props) {
    const [text, changeText] = useState("");
    const [font, changeFont] = useState({ fontFamily: "Lucida Console, Courier New, monospace" });
    const [count, counter] = useState(0);
    function convertUppercase() {
        changeText(text.toUpperCase());
        props.setAlert({
            msg: "Converted to UpperCase",
            type: "success"
        });
        setTimeout(() => props.setAlert(null), 3000);
    }
    function convertLowercase() {
        changeText(text.toLowerCase());
        props.setAlert({
            msg: "Converted to LowerCase",
            type: "success"
        });
        setTimeout(() => props.setAlert(null), 3000);
    }
    function onChangeText(event) {
        changeText(event.target.value)
    }
    function convertFont() {
        if (typeof convertFont.arrFont == 'undefined') {
            convertFont.arrFont = [{ fontFamily: "Times New Roman, Times, serif" }, { fontFamily: "Arial, Helvetica, sans-serif" }, { fontFamily: "Lucida Console, Courier New, monospace" }];
        }
        changeFont(convertFont.arrFont[count % 3]);
        counter(count + 1)
        props.setAlert({
            msg: `Font Changed to ${convertFont.arrFont[count % 3].fontFamily.split(",")[0]}`,
            type: "success"
        });
        setTimeout(() => props.setAlert(null), 3000);
    }
    function copyText() {
        navigator.clipboard.writeText(document.getElementById('mytext').value);
        props.setAlert({
            msg: "Text Copied",
            type: "success"
        });
        setTimeout(() => props.setAlert(null), 3000);
    }
    function extraSpace() {
        let textArray = text.split(/[ ]+/);
        console.log(textArray);
        changeText(textArray.join(' '));
        props.setAlert({
            msg: "Removed Extra Space",
            type: "success"
        });
        setTimeout(() => props.setAlert(null), 3000);
    }
    return (
        <div className='container my-2'>
            <div className="mb-3 my-1" style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>
                <h1 className="d-flex justify-content-center">{props.heading}</h1>
                <textarea className="form-control" id="mytext" style={Object.assign({ backgroundColor: `${props.mode === 'light' ? 'white' : '#413c3c'}`, color: `${props.mode === 'light' ? 'black' : 'white'}`, caretColor: `${props.mode === 'light' ? 'black' : 'white'}` }, font)} value={text} onChange={onChangeText} rows="8"></textarea>
            </div>
            <div className='d-flex justify-content-center my-1'>
                <button className='btn btn-outline-success mx-1 my-1' disabled={text.length===0} onClick={convertUppercase}>Convert UpperCase</button>
                <button className='btn btn-outline-success mx-1 my-1' disabled={text.length===0} onClick={convertLowercase}>Convert LowerCase</button>
                <button className='btn btn-outline-success mx-1 my-1' disabled={text.length===0} onClick={convertFont}>Change Font</button>
            </div>
            <div className='d-flex justify-content-center my-1'>
                <button className='btn btn-outline-success mx-1 my-1' disabled={text.length===0} onClick={extraSpace}>Remove Extra Spaces</button>
                <button className='btn btn-outline-success mx-1 my-1' disabled={text.length===0} onClick={copyText}>Copy Text</button>
            </div>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'success'}`}>
                <h2 className={`d-flex justify-content-center my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Details</h2>
                <div className="d-flex justify-content-center my-3">
                    <p className='border border-success p-2 mx-1 my-1'>Characters : {text.length}</p>
                    <p className='border border-success p-2 mx-1 my-1'>Words : {text.length === 0 ? 0 : (text.split(" ")[text.split(" ").length - 1] === '' ? text.split(" ").length - 1 : text.split(" ").length)}</p>
                    <p className='border border-success p-2 mx-1 my-1'>Minutes Read : {text.length === 0 ? 0 : text.split(" ").length * 0.08}</p>
                </div>
            </div>
            <div>
                <h2 className={`d-flex justify-content-center my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                {text.length > 0 ? <Para font={font} text={text} mode={props.mode} /> : <Span mode={props.mode} />}
            </div>
        </div>
    )
}
