import React, {Component} from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            text: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.createTask = this.createTask.bind(this)
    }
    createTask(){
        if (this.state.value.trim() && this.state.text.trim()) {
            this.props.onCreate(this.state.value, this.state.text)
        }
    }
    onChange(event){
        this.setState({
            value: event.target.value
        })
    }
    onChangeText(event){
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return(
            <>
                <input type="text"
                       className="form-control"
                       placeholder="Enter name: "
                       onChange={this.onChange.bind(this)} />
                <input type="text"
                       className="form-control"
                       placeholder="Enter text: "
                       onChange={this.onChangeText.bind(this)} />
                <button className="button"
                        onClick={this.createTask.bind(this)}
                >Create Task</button>
            </>
        )
    }
}
export default Input;