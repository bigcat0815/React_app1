import React ,{Component} from 'react';
import {Header,Segment } from 'semantic-ui-react'

class Contents2 extends Component
{
  render(){
    console.log("Content render");
    return (
      <article>  
            <Header as='h2' attached='top'>
                {this.props.title}
            </Header> 
            <Segment attached>
                {this.props.desc}
            </Segment>             
      </article>
    );
  }
}
export default Contents2;