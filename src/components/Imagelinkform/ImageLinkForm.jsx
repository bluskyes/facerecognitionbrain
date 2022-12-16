import React from 'react';
import './ImageLinkForm.css'

const Imagelinkform = ({onInputChange , onButtonSubmit}) => {
    return ( 
        <div>
             <p className="f3">
                {'this magic brain will detect faces in your pics give it a try...'}
             </p>
             <div className="center">
                <div className=" form center pa3 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type='text' onChange={onInputChange}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                onClick={onButtonSubmit}>detect</button>
    
                </div>
            </div>
        </div>
    
)}



export default Imagelinkform;