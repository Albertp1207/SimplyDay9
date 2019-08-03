import React, {Component} from 'react';
import { connect } from "react-redux";
import { changeTodo } from '../../utils/fetches';
import { switchPage } from "../../redux/actions/switchPageAction";

class EditPage extends Component {
    state = {
        inputValue: "",
        isLoading: false,
        error: null
    }

    editTodo = (e) => {
        e.preventDefault();
        const {_id} = this.props.info
        const {inputValue} = this.state
        this.setState({
            isLoading:true
        })
        changeTodo(_id,inputValue)        
            .then((res)=>{
                if(res.status === 200) {
                    this.props.switchPage({name:"main",info:null})
                } else {
                    this.setState({
                        error: "error",
                        isLoading:false
                    })
                }
            })
    }

    onChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        const { text } = this.props.info;
        const { isLoading, error } = this.state;
        return (
            <div>
                <form>
                    <input onChange = {this.onChange} defaultValue = {text} type = "text" />
                    <input onClick = {this.editTodo} type = "submit" />
                </form>
                {error ? <div>change text</div>:null}
                {isLoading ? <div>Loading ...</div>:null}
            </div>            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchPage: (info) => {
        dispatch(switchPage(info));
    }
})

export default connect(null,mapDispatchToProps)(EditPage);