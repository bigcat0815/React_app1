import React, { Component } from 'react';

import { List } from 'semantic-ui-react'

class Info extends Component
{
    render(){
        console.log("Info render");
        var lists = [];
        var data = this.props.p_item;
        var i = 0;

        while(i < data.length){
            lists.push(<li key={data[i].id}><a href ={"/info/"+data[i].id}>{data[i].name}</a> 
            <b> : {data[i].price}</b></li>);
            ++i;        
         }
    return(
        <nav>
            <List>
                <List.Item>{lists}</List.Item>
            </List>        
        </nav>
        );
    }
}
export default Info;
