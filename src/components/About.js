import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function About(props) {

 const[changeTheme, setChangeTheme] = useState({
    color: "white",
    backgroundColor: "black"
  });

const[btnState,setBtnState] = useState("Apply Light Theme");


  const handleTheme =()=>{
    if(changeTheme.color === "white"){
      setChangeTheme({
          color: "black",
          backgroundColor: "white"

      })

      setBtnState("Apply Dark mode")

    }
    else{
      setChangeTheme({
        color: "white",
        backgroundColor: "black"
    })
    setBtnState("Apply Light mode")
  }}


  return (
    <>
    <div className='container'>

<div className="accordion" id="accordionExample" style={changeTheme}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={changeTheme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {props.head1}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={changeTheme}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={changeTheme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      {props.head2}
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={changeTheme}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={changeTheme} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      {props.head3}
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={changeTheme}>
        <strong >This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div> 

    <div className='container my-5'>
    <button className="btn btn-secondary" onClick={handleTheme} type="click">{btnState}</button>

    </div>

    </>
  )}

About.propTypes = {
  head1: "proptypes.string.isRequired",
  head2: "proptypes.string.isRequired",
  head3: "proptypes.string.isRequired"
};

About.defaultProps = { 
  head1: "Enter heading1 name here",
  head2: "Enter heading2 name here",
  head3: "Enter heading3 name here"
}
