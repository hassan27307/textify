import React, { useState } from 'react'
import propTypes from 'prop-types'

 function Navbar(props) {
  
  return (

<div>

<nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary" data-bs-theme=${props.mode}`} >
  <div className= "container-fluid " >
    <a className="navbar-brand " href="/textBox">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-a active" aria-current="page" href="/textBox">{props.home}</a>
        </li>
        <li className= "nav-item">
          <a className="nav-a active" aria-current="page" href="/about">{props.about}</a>
        </li>
       
      </ul>


      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}` }>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label>
      </div>
  
    </div>
  </div>
</nav>
 
</div>
    
  )}
  
Navbar.propTypes = {
    title: "propTypes.string.isRequired",
    home: "propTypes.string.isRequired",
    about: "propTypes.string.isRequired"

}

Navbar.defaultProps = {
    title: "write title here",
    home: "write home here",
    about: "write about here"
}

export default Navbar;
