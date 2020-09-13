import React, { Component } from 'react';
import './App.css';
//import ContainerExample from './Components/ContainerExampleAlignment'

import { Container, Divider } from 'semantic-ui-react'

class Subject extends Component
{
  render(){
    return (
      <header>
            <h1>WEB</h1>
            world wide web!
      </header>
    );
  }
}

class TOC extends Component
{
  render(){
    return (
      <nav>
      <ul>
          <li><a href ="1.html">HTML</a></li>
          <li><a href ="2.html">CSS</a></li>
          <li><a href ="3.html">JavaScript</a></li>
      </ul>
  </nav>
    );
  }
}

class Contents extends Component
{
  render(){
    return (
      <article>
       <h2>HTML</h2>
          HTML is HyerperText Markup Language.
        </article>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div className = "App">
          <Container textAlign='center'>WEB</Container>
          <Container textAlign='justified'>
            <b><Subject></Subject></b>
            <Divider/>
            <p><TOC></TOC></p>
            <p><Contents></Contents></p>
          </Container>       
      </div>
    );    
  }
}
export default App;
