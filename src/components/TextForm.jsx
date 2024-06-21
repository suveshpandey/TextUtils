import styles from "./TextForm.module.css"
import { useState } from "react";

const TextForm = (props) =>{
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{ // to add text when we type.
        setText(event.target.value);
    }
    const handleClearClick = (event) =>{ // to add text when we type.
        let clearValue = "";
        setText(clearValue);
        setCopyBtnName("Copy to clipboard")
    }
    
    const [copyBtnName, setCopyBtnName] = useState("Copy To Clipboard")
    const handleCopyClick = (event) =>{ // to add text when we type.
        if(text == ""){
            alert("There is nothing to copy!");
        }
        else{
            navigator.clipboard.writeText(text);
            setCopyBtnName("Text Copied");
        }
        
    }

    //title btn function
    // Function to convert text to title case
    const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    };
    // Function to handle button click
    const handleTitleBtnClick = () => {
        setText(toTitleCase(text));
    };


    return(
        <>
            <div className="container mb-3">
                <label htmlFor="myBox" className={`form-label ${styles.heading}`}>{props.heading}</label>
                <textarea 
                className={`form-control ${styles.box} mb-2 `} 
                id="myBox" rows="7" 
                value={text}
                placeholder="Enter the text here..."
                onChange={handleOnChange}
                ></textarea>

                <div className={`btnContainer ${styles.btnContainer}`}>
                    <button 
                    className={`btn btn-primary mx-1 ${styles.btns}`} 
                    onClick={handleUpClick}
                    >Convert to UpperCase</button>

                    <button 
                    className={`btn btn-primary mx-1 ${styles.btns}`}
                    onClick={handleLowerClick}
                    >Convert to LoverCase</button>

                    <button  
                    className={`btn btn-primary mx-1 ${styles.btns}`}
                    onClick={handleTitleBtnClick}
                    >Convert to TitleCase</button>


                    <button 
                    className={`btn btn-secondary mx-1 ${styles.btns}`}
                    onClick={handleClearClick}
                    >Clear Text</button>


                    <button 
                    className={`btn btn-success mx-1 ${styles.btns}`}
                    onClick={handleCopyClick}
                    >{copyBtnName}</button>

                </div>
            </div>
            <div className={`container ${styles.con2}`}>
                <h1>Your text summary:</h1>
                <div className={styles.pContainer}>
                    <p>Words-<span>{(text.split(" ").filter(word => word !== "").length)}</span></p>
                    <p>Characters- <span>{text.length}</span></p>
                </div>
                <div className={styles.timeInfo}>
                    <p>It will take about <span>{0.008 * (text.split(" ").filter(word => word !== "").length)}</span> minutes to read. </p>
                </div>
            </div>

        </>
    )
}

export default TextForm;

