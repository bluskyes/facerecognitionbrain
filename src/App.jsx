import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Imagelinkform from './components/Imagelinkform/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Clarifai from 'clarifai';
// import Particles from 'react-particles-js';

// const app = new Clarifai.App({
//   apiKey: '6e26a7f78b554412b4784b976957f0b5'
//  });
 


const particlesOption = {
      particles: {
          shape: {
             type: 'images',
             image: [
                  {src: 'path/to/first/image.svg', height: 20, width: 20},
                  {src: 'path/to/second/image.jpg', height: 20, width: 20},
              ]
          }
      }
  }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl : '',
      route : 'signin',
      isSignedin : false

    }
  }

  onInputChange = (event) => {
    this.setState({input :event.target.value});
    console.log(event.target.value);
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl : this.state.input})
  //   app.models
  //       .predict(
  //       Clarifai.FACE_DETECT_MODEL,
        
  //           this.state.input
  //       )        
  //   .then(function(response) {
  //       console.log(response);
  //       },
  //       function(err) {}
  //   );    


  // } 
    onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState({isSignedin : false})
      }else if (route === 'home'){
        this.setState({isSignedin:true})
      }
      this.setState({route : route});
     }


    
  render() {
    const {isSignedin , imageUrl , route} = this.state;
    return (
      <div className='App'>
      {/* <Particles className='particles'
        params={particlesOption}/> */}
          <Navigation isSignedin={isSignedin} onRouteChange = {this.onRouteChange}/>
          {this.state.route === 'home'
           ?
           <div> 

           {/* <Logo/> */}
              <Rank/>
              <Imagelinkform
              onInputChange = {this.onInputChange}
              onButtonSubmit = {this.onButtonSubmit}
                />
              <FaceRecognition imageUrl = {imageUrl}/>
              <Footer/>
           </div>
           : (
            route === 'signin'
            ? <Signin onRouteChange = {this.onRouteChange}/>
            : <Register onRouteChange = {this.onRouteChange}/>
            
           )
           
           
            
          
        }
      </div>
    );
  }
}



export default App;
