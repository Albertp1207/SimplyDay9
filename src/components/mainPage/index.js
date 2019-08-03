import React, {Component} from 'react';
import TodoList from "./todoList"
import {addTodo} from "../../utils/fetches";
import {connect} from "react-redux";
import {getTodos} from "../../redux/actions/todosActions"

class mainPaige extends Component {
    state = {
        inputValue: ""
    }

    addTodo = (e) => {
        e.preventDefault();
        addTodo(this.state.inputValue)             
            .then((res)=>{
                if(res.status === 200) {
                    this.setState({
                        inputValue: ""
                    })      
                    this.props.getTodos()             
                } else {
                    console.error("change text")
                }
            })
        
    }

    onChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }
    componentDidMount() {
        this.props.getTodos()
    }
    render() {
        const {isLoading, error} = this.props;
        return (
            <div>
                <form>
                    <input onChange = {this.onChange} value ={this.state.inputValue} type = "text" />
                    <input onClick = {this.addTodo} type = "submit" />
                </form>
                {error ? <div>error</div> : <TodoList todos = {this.props.todos} />}
                {isLoading ? <div>Loading ...</div> : null }
            </div>
        )
    }
    
}


const mapStateToProps = state => ({
    todos: state.todosReducer.todos,
    isLoading: state.todosReducer.isLoading,
    error: state.todosReducer.error
})

const mapDispatchToProps = dispatch => ({
    getTodos: () => {
        dispatch(getTodos())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(mainPaige)