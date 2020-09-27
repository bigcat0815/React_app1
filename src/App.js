import React, { Component } from 'react';
import TOC from './Components/TOC';
import Subject from './Components/Subject';
import Contents from './Components/Content';
import Contents2 from './Components/Content2';
import Info from './Components/Info';
import Unreal from './Components/Unreal';
import House from './Components/House';

import './App.css';
//import ContainerExample from './Components/ContainerExampleAlignment'

import { Container, Divider } from 'semantic-ui-react'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      mode:"read",
      selected_contend_id:2,
      selected_House_id:2,
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
      ],

      s_House:[
        {id:0,maintitle :"우리집 주방 도구"},
        {id:1,title : 'Coffee Cup' , desc:"스타벅스 컵"},
        {id:2,title : 'Water Cup' , desc:"일반 물컵"}
      ]
    }
  }
  render(){
    console.log("App render");
    var _title,_desc = null;
    var _title_house,_desc_house = null;

    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contend_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i= i+1;
      }
    }
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
       var j = 0;
      while(j<this.state.s_House.length){
      var data2 = this.state.s_House[j];
        if(data2.id === this.state.selected_House_id)
        {
          _title_house = data2.title;
          _desc_house =data2.desc;
          break;
        }
        j++;
      }
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
           <TOC onChangePage={function(id){           
            
            this.setState({mode:'read',selected_contend_id:Number(id)});
             
           }.bind(this)} data ={this.state.contents}></TOC>
            <Contents title ={_title} desc={_desc}></Contents>
          </Container> 
          <Container textAlign='justified'> 
          <Divider/>
            <Info p_item={this.state.s_items}></Info>
          </Container>
          <Divider/>
          <Unreal p_Unreal={this.state.s_Unreal}></Unreal>
          <Container textAlign='justified'> 
          <Divider/>
            <House onChangePage={function(id){
              this.setState({mode:'read',selected_House_id:Number(id)});

            }.bind(this)}
            
              p_House= {this.state.s_House}>
            </House>
            <Contents2 title ={_title_house} desc={_desc_house}></Contents2>
            </Container>
          
      </div>
    );    
  }
}
export default App;
