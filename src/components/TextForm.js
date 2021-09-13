import React, { useState } from "react";

function TextForm(props) {
  const [text, changedText] = useState("");
  // changedText("New text");
  const changeToUpper = () => {
    // console.log("Uppercase button is clicked!!" + text);
    let newText = text.toUpperCase();
    changedText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const changeToLower = () => {
    // console.log("Lowercase button is clicked!!" + text);
    let newText = text.toLowerCase();
    changedText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const changeToCamelCase = () => {
    // console.log("Camel-case button is clicked!!" + text); =>used console.log only for understanding and debugging
    let newText = function camelCase(text) {
      return text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
        
    };
    changedText(newText);
    setbtnText("Convert to Camel-case");
    props.showAlert(`Converted to ${btnText}`,"success");
  };
  const [btnText, setbtnText] = useState("Convert to Camel-case");
  const changeToOriginal = () => {
    // console.log("Lowercase button is clicked!!" + text);
    let result = text.replace(/([A-Z])/g, " $1");
    let newText = result.charAt(0).toUpperCase() + result.slice(1);
    changedText(newText);
    setbtnText("Original");
  };
  const clearText = () => {
    // console.log("Lowercase button is clicked!!" + text);
    let newText = "";
    changedText(newText);
    props.showAlert("Cleared text","success");

    
  };
  // to remove extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    changedText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");
  };
  // to copy text
  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
  };

  const handleOnChange = (event) => {
    // console.log("Something's changed!!");
    changedText(event.target.value);
    // event.target.value is used to get the value that triggered the event => this syntax we'll mostly use
    // in case of input fields
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "light" ? "#8d8dff" : "grey",
              color: props.mode === 'light' ? 'black' : 'white' ,
              caretColor : props.mode === 'light' ? 'black' : 'white' ,
              cursor : props.mode === 'light' ? 'auto' : 'default' ,
            }}
          ></textarea>
        </div>
        {/* <button className="btn btn-warning mx-2" onClick={changeToOriginal}>
        Original
      </button> */}
        <button className={`btn btn-${props.mode === "light" ? "dark" : "warning"}`} onClick={changeToUpper}>
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "warning"} mx-2`}
          onClick={changeToCamelCase}
          onDoubleClick={changeToOriginal}
        >
          {btnText}
        </button>
        <button className={`btn btn-${props.mode === "light" ? "dark" : "warning"}`} onClick={changeToLower}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode === "light" ? "dark" : "warning"} mx-2`} onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className={`btn btn-${props.mode === "light" ? "light" : "info"} mx-2`} onClick={copyText}>
          Copy
        </button>
        <button className={`btn btn-${props.mode === "light" ? "light" : "info"} mx-2`} onClick={clearText}>
          Clear
        </button>
        <br />
        <p className="stuff my-3 mx-2">
          [p.s. double click on camel case button to get original text]
        </p>
      </div>
      {/* a container for text summary */}
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          <b>
            <i>
              {text.split(" ").length} words and {text.length} characters
            </i>
          </b>
        </p>
        <p>
          <b>
            <i>
              Average time required to read the above text :{" "}
              {0.008 * text.split(" ").length} minutes
            </i>
          </b>
        </p>
        <hr />

        <h3>Preview</h3>
        <p>{text===''?"Enter a text to get a preview here!" : text}</p>
      </div>
    </>
  );
}

export default TextForm;
