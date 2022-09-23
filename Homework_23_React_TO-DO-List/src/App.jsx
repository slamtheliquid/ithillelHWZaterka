import './App.scss';
import React from 'react';
import Input from './components/input'
import List from './components/list'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.createTask = this.createTask.bind(this)
        this.saveTask = this.saveTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    createTask (name, text){
        const task = {
            id: Date.now(),
            name,
            text
        }
        this.setState({
            list: [...this.state.list, task]
        })
    }
    saveTask(key, text, id) {
        let taskList = [...this.state.list]
        Object.keys(taskList).forEach(function(el, i) {
            if(taskList[i].id === id){ taskList[i].name = key; taskList[i].text = text }
        })
        this.setState({list: taskList})
    }
    removeTask(key) {
        let taskList = [...this.state.list]
        taskList = taskList.filter(el => el.id !== key)
        this.setState({list: taskList})
    }
  render(){
    return (
        <div className='wrapper'>
            <h1 className='title'>To-do list (react edition)</h1>
            <Input onCreate={this.createTask} />
            <List list={this.state.list} onDelete={this.removeTask} onSave={this.saveTask}/>
        </div>
    );
  }
}

export default App;
