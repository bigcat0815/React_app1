import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Contents from './Components/Content';
import Info from './Components/Info';
import './App.css';
//import ContainerExample from './Components/ContainerExampleAlignment'

import { Container, Divider } from 'semantic-ui-react'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      subject:{title:'WEB',sub:'World Wide Web'},
      
      contents:[
        {id:1 , title : 'HTML',desc :"HTML is for information"},
        {id:2 , title : 'CSS',desc :"CSS is for information"},
        {id:3 , title : 'Java',desc :"Java is for information"}
      ],
      
      s_items:[
        {id:1, name : 'Apples', price : '1200'},
        {id:2, name : 'Pears', price : '2700'},
        {id:3, name : 'Oranges', price : '300'}
      ]
    }
  }
  render(){
    return(
      <div className = "App">         
          
          <Subject 
              title={this.state.subject.title} 
              sub ={this.state.subject.sub}></Subject>            

          <Container textAlign='justified'>   
          <Divider/>                  
            <p><TOC data ={this.state.contents}></TOC></p>
            <p><Contents title ="HTML" desc="HTML is HyerperText Markup Language."></Contents></p>           
          </Container> 
          <Container textAlign='justified'> 
          <Divider/>
            <p><Info p_item={this.state.s_items}></Info></p>
          </Container>
      </div>
    );    
  }
}
export default App;
