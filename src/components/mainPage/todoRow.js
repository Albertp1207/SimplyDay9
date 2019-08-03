import React,{Component} from "react";
import { connect } from "react-redux";
import { switchPage } from "../../redux/actions/switchPageAction"
import { getTodos } from "../../redux/actions/todosActions"

import {deleteTodo} from "../../utils/fetches"
class Todo extends Component{
    deleteTodo = () => {
        deleteTodo(this.props.todo._id)        
            .then(res=>{
                if(res.status === 200) {
                    this.props.getTodos();
                }
            })
    }

    render() {
        const { text,_id } = this.props.todo;
        const { switchPage } = this.props;
        
        return (            
            <li>
                <label>{text}</label>
                    <button onClick = {switchPage.bind(null,{name:"edit",info:{text,_id}})}>edit</button>
                <button onClick = {this.deleteTodo}>delete</button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchPage: info => {
        dispatch(switchPage(info));
    },
    getTodos: () => {
        dispatch(getTodos());
    }
})

export default connect(null,mapDispatchToProps)(Todo)