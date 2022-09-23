import React, {Component} from 'react';

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            text: '',
            show:'visible',
        }
        this.toggleShowHide = this.toggleShowHide.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.saveTask = this.saveTask.bind(this)
    }
    toggleShowHide() {
        this.setState(oldState => ({show: !oldState.show}));
    }
    removeTask(){
        this.props.onDelete(this.props.item.id)
    }
    saveTask(){
        if(this.state.value.trim()){
            this.props.onSave(this.state.value, this.state.text, this.props.item.id)
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
            <li className='ListEl'>
                <h2 className='itemName'>{this.props.item.name}</h2>
                <h2 className='itemName'>{this.props.item.text}</h2>
                <button className='button'
                        onClick={this.removeTask}
                >Delete task</button>
                <div style={{
                    visibility: this.state.show ? "visible" : "hidden",
                }}>
                    <button className='button'
                            onClick={() => this.toggleShowHide()}
                    >Edit task</button>
                </div>
                <div style={{
                    visibility: this.state.show ? "hidden" : "visible",
                }}>
                    <input value={this.state.value}
                           className='form-control'
                           placeholder='New name'
                           onChange={this.onChange.bind(this)}/>
                    <input value={this.state.text}
                           className='form-control'
                           placeholder='New text'
                           onChange={this.onChangeText.bind(this)}/>
                    <button className='button'
                            onClick={() => {
                                this.toggleShowHide();
                                this.saveTask()
                            }}
                    >Save task</button>
                </div>
            </li>
        )
    }
}
export default ListItem;