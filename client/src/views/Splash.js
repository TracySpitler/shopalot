import React, { Component } from 'react';
import styled from 'styled-components';
import splashbg from '../assets/images/splashbg.jpg';

class Splash extends Component{
  
   render(){

      return (
      
        <Background>    
        <Cta className="container">
          <h1>Shopalot</h1>
          <p>Who said shopping couldn&#39;t be easy?</p>
          <p>Experience the best way to shop, fast. </p>
          <button>Get Started</button>
        </Cta>
        </Background>
        
      );  

	}
}

export default Splash;

const Background = styled.div`
  background: url(${splashbg}) no-repeat center center fixed;
  background-size: cover;
  height: 94vh;
  padding-top: 10%;
`
const Cta = styled.div`
  color: #fff;
  h1 {
    font-size: 72px;
  }
  p {
    font-size: 30px;
  }
  button {
    background-color: #350074;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
<<<<<<< HEAD
  a:link, a:visited {
    background-color: #350074;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 10px;
  }
  a:hover, a:hover {
    background-color: #6D538E;
  }

  @media all and (max-width: 736px) { 
    h1 {
      font-size: 52px;
    }
    p {
      font-size: 20px;
    }
   }
`

