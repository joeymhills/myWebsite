import React from 'react'
import NavBar from '../components/navbar.js'
import coding from '../icons/coding.png'
import responsive from '../icons/responsive.png'
import animation from '../icons/animation.png'

const Services = () => {
    return (
      <div className="app">
        <head>
          <link rel="stylesheet" type="text/css" href="style.css" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
  
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    
          <title>JMH Web Design</title>
        </head>
        
        <NavBar/>     
        <div className="services-page2">
          <h1 className="services-heading">Services</h1>
          
          <div className='icon-wrapper'>
              <div className="customCoded">
                <h2>Custom Coded</h2>
                <img src={coding} className='icons' alt='' />
                <p>Custom coded to look unique and professional</p>
              </div>
              <div className="responsive">
                <h2>Responsive</h2>
                <img src={responsive} className='icons' alt='' />
                <p>Built responsively to look great on all devices</p>
              </div>
              <div className="animated">
                <h2>Animated</h2>
                <img src={animation} className='icons' alt='' />
                <p>Animations to create a better user experience</p>
              </div>
              <div className="serviceButtonWrap" href=''>
                <button className="servicesButton">Learn more</button>
              </div>
          </div>
          </div>
      </div>
    );
  }
  
  
  export default Services;