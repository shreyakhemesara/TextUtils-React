import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("enter text here");
    const [count, setCount] = useState(0);
    const [email, setEmails] = useState("no mail");
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setCount(newText.trim().split(/\s+/).filter(Boolean).length);
    };
    const handleclearclick = () => {
        setText(" ")
    }

    const handleemailexclick = () => {
        const email1 = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g);
        if (email1) {
            setEmails(email1)
        } else {
            setEmails("no mails")
        }
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div>
                <label htmlFor="textbox">Example textarea</label>
                <textarea
                    value={text}
                    className="form-control"
                    id="textbox"
                    onChange={handleOnChange}
                    rows="8"
                ></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleclearclick}>Clear</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleemailexclick}>emailExtactor</button>


            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>{count} words and {text.length} characters</p>
                <p>Minutes read: {0.008 * count}</p>
                <h3>Preview</h3>
                <p>{text}</p>
                <p>email in the text : {email}</p>
            </div>
        </>
    );
}
