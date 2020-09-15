import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Contents from './Components/Content';
import './App.css';
//import ContainerExample from './Components/ContainerExampleAlignment'

import { Container, Divider } from 'semantic-ui-react'

class App extends Component{
  render(){
    return(
      <div className = "App">         
          
              <Subject title="Web" sub ="World Wide Web"></Subject>            
              <Subject title="React" sub ="React is Veryeasy WebApp!"></Subject>                            
          <Container textAlign='justified'>   
          <Divider/>                  
            <p><TOC></TOC></p>
            <p><Contents title ="HTML" desc="HTML is HyerperText Markup Language."></Contents></p>
          </Container>       
      </div>
    );    
  }
}
export default App;
