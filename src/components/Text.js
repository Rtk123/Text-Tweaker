// import React, { useState } from 'react';

// export default function Text(props) {
//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText); 
//     }

//     const handleLoClick = () => {
//         let newText = text.toLowerCase();
//         setText(newText); 
//     }

//     const handleOnChange = (event) => {
//         setText(event.target.value);
//     }

//     const handleClearClick = () => {
//         setText("");
//     }
//     const calculateReadingStats = () => {
//         const words = text.trim().split(/\s+/).length; // Count words
//         const averageReadingSpeed = 250; // Average reading speed (wpm)
//         const time = words / averageReadingSpeed; // Calculate reading time in minutes
        
//         setReadingTime(time.toFixed(2)); // Update reading time rounded to two decimal places
//     };

//     const [text, setText] = useState("");
   
//     const [readingTime, setReadingTime] = useState(0); // State for reading time

//     return (
//         <>
//         <div>
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" value={text} onChange={handleOnChange} id="" rows="8" placeholder='Enter you text which do you want to write..'></textarea>
//             </div>
//             <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
//             <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
//             <button className="btn btn-success mx-2" onClick={calculateReadingStats}>Calculate</button>

//         </div>
//         <div className="container">
//             <h2>Your whole summary</h2>
//             <p>{text.split(" ").length} : Words and {text.length} : Character</p>
            
//             <p>{0.004 *text.split(" ").length }Minutes read</p>
//             <p>Estimated Reading Time: {readingTime} Minutes</p>
          
//             <h3>Preview</h3>
//             <p>{text}</p>
//         </div>
//         </>
//     )
// }















import React, { useState } from 'react';

export default function Text(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    }

    const handlePasteClick = async () => {
        const clipboardText = await navigator.clipboard.readText();
        setText(clipboardText);
    }

    const handlePronounceClick = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    const calculateReadingStats = () => {
        const words = text.trim().split(/\s+/).length;
        const averageReadingSpeed = 250;
        const time = words / averageReadingSpeed;
        setReadingTime(time.toFixed(2));
    };

    const [text, setText] = useState("");
    const [readingTime, setReadingTime] = useState(0);

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        id="" 
                        rows="8" 
                        placeholder='Enter your text here...'>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-warning mx-2" onClick={handlePasteClick}>Paste</button>
                <button className="btn btn-success mx-2" onClick={calculateReadingStats}>Calculate</button>
                <button className="btn btn-dark mx-2" onClick={handlePronounceClick}>Pronounce</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>Estimated Reading Time: {readingTime} Minutes</p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
