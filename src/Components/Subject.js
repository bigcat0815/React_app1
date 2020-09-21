import React,{Component} from 'react';

import { Container} from 'semantic-ui-react'


class Subject extends Component
{
  render(){
    console.log("Subject render");
    return (
      <header>
            <Container textAlign='center'>
               <h1><a href="/" onClick={function(e){
                 e.preventDefault();
                 this.props.onChangePage();
               }.bind(this)}>{this.props.title}</a></h1>
               <h3>{this.props.sub}</h3>                
            </Container>           
      </header>
    );
  }
}
export default Subject;