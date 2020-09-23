import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Contents from './Components/Content';
import Info from './Components/Info';
import Unreal from './Components/Unreal';

import './App.css';
//import ContainerExample from './Components/ContainerExampleAlignment'

import { Container, Divider } from 'semantic-ui-react'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      mode:"read",
      subject:{title:'WEB',sub:'World Wide Web'},
      welcome:{title:'Welcome',desc:"Hello, made by React"},
      contents:[
        {id:1 , title : 'HTML',desc :"HTML is for information"},
        {id:2 , title : 'CSS',desc :"CSS is for information"},
        {id:3 , title : 'Java',desc :"Java is for information"}
      ],
      
      s_items:[
        {id:1, name : 'Apples', price : '1200'},
        {id:2, name : 'Pears', price : '2700'},
        {id:3, name : 'Oranges', price : '300'}
      ],

      s_Unreal:[
        {id:1, title : 'Actor', desc:"Actor is ...."},
        {id:2, title : 'BluePrint', desc:"BluePrint is ...."}
      ]
    }
  }
  render(){
    console.log("App render");
    var _title,_desc = null;

    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return(
      <div className = "App">         
          
          <Subject 
              title={this.state.subject.title} 
              sub ={this.state.subject.sub}
              onChangePage ={function(){
               this.setState({mode:"welcome"});
              }.bind(this)}></Subject>            
  
          <Container textAlign='justified'>   
          <Divider/>                  
           <TOC onChangePage={function(){
      
             this.setState({mode:'read'});
           }.bind(this)} data ={this.state.contents}></TOC>
            <Contents title ={_title} desc={_desc}></Contents>
          </Container> 
          <Container textAlign='justified'> 
          <Divider/>
            <Info p_item={this.state.s_items}></Info>
          </Container>
          <Divider/>
          <Unreal p_Unreal={this.state.s_Unreal}></Unreal>
      </div>
    );    
  }
}
export default App;
