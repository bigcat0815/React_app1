import React,{Component} from 'react';

class Unreal extends Component{
    render(){
        console.log("Unreal render");
        var lists = [];
        var data = this.props.p_Unreal;
        var i = 0;
        while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/unreal/"+data[i].id}>{data[i].title}</a>
            <p>{data[i].desc}</p>
        </li>);
            i++;
        }
        return(
            <nav>
                {lists}
            </nav>
        );
    }
}
export default Unreal