import React, {useState} from 'react';
import propTypes from 'prop-types';

export default function TestForm(props) {

  const [text, setText] = useState("Write text here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleOnClick = () => {
    let upText  = text.toUpperCase();
    setText(upText);
    props.showAlert("success", "Text has been converted to UPPER-CASE successfully!")
  }

  const handleLoClick = () => {
    let lowText  = text.toLowerCase();
    setText(lowText);
    props.showAlert("success", "Text has been converted to LOWER-CASE successfully!")
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert("success", "Text has been CLEARED successfully!")
  }

  const handleCleanClick = () => {
    let cleanText = text.trim();
    setText(cleanText);
    props.showAlert("success", "Text has been CLEANED successfully!")
  }

  return (

    <div>
      <div className="mb-3">
  <label htmlFor="box" className="form-label">{props.heading1}</label>

  <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==="secondary"?"white":"black", backgroundColor: props.mode==="secondary"?"grey":"white" }}  id="box1" rows="10"></textarea>

  <div className='container my-3 d-flex justify-content-center' >
    <button className='btn btn-primary mx-3' onClick={handleOnClick}>  Click for Upper case  </button>
    <button className='btn btn-success mx-3' onClick={handleLoClick}>  Click for Lower case  </button>
    <button className='btn btn-info mx-3'    onClick={handleCleanClick}>  Clean </button>
    <button className='btn btn-danger mx-3'  onClick={handleClearClick}>  Clear </button>
  </div>

<div className='container'>
    <h6>Text Summary: </h6>
    <p>{text.split(" ").length} WORDS and {text.length} CHARACTERS</p>
    <p>Reading time is {0.48 * text.length} seconds </p>
</div>

<div className='container'>
    <h6>Text Preview: </h6>
    <p>{text}</p>
</div>

   </div>
   
    </div>
  )};

TestForm.propTypes = {
    heading1: "proptypes.string.isRequired"
};

TestForm.defaultProps = { 
    heading1: "Enter heading name here"
};


