import React, {Component} from 'react';
import ListItem from './listItem'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.removeTask = this.removeTask.bind(this)
        this.saveTask = this.saveTask.bind(this)
    }
    removeTask(item){
        this.props.onDelete(item)
    }
    saveTask(item, text, id){
        this.props.onSave(item, text, id)
    }

    render() {
        const { list } = this.props;
        return(
            <ul className="List">
                {list.map((item) => {return <ListItem key={item.id} item={item} onDelete={this.removeTask} onSave={this.saveTask}/>})}
            </ul>
        )
    }
}
export default List;