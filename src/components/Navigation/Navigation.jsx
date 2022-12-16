import React from "react";



const Navigation = ({onRouteChange , isSignedin}) =>{
    if(isSignedin)
    {   
     return(
        <nav style={{display : 'flex' , justifyContent : 'flex-end'}}>
            <p onClick={ () => onRouteChange('signout')} className="fe dim black underline pa3 pointer ">sign out</p>
        </nav>
    )
    }else { 
       return(
            <nav style={{display : 'flex' , justifyContent : 'flex-end'}}>
                <p onClick={ () => onRouteChange('signin')} className="fe dim black underline pa3 pointer ">sign in</p>
                <p onClick={ () => onRouteChange('Register')} className="fe dim black underline pa3 pointer "> Register</p>
            </nav>
          ) 
     }
    
}



export default Navigation;