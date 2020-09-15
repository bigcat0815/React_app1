import React,{Component} from 'react';

import { Container} from 'semantic-ui-react'


class Subject extends Component
{
  render(){
    return (
      <header>
            <Container textAlign='center'>
               <h1>{this.props.title}</h1>
               <h3>{this.props.sub}</h3>                
            </Container>           
      </header>
    );
  }
}
export default Subject;