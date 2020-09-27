import React ,{Component} from 'react';

class House extends Component
{
    render(){
        
        console.log("House render - Debug");
        var lists =[];
        var data = this.props.p_House;
        var i = 1;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a href={"/house/"+data[i].id}
                    data-id ={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                    {data[i].title}</a>
            </li>);
            i=i+1;
        }
        return (
            <nav>
                <p><h2>{data[0].maintitle}</h2></p>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default House;