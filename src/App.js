import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      taskName:""
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }


  setTaskName = (name)=>{
    this.setState({taskName: name})
  }

  add = (name,stage)=>{
    const arr = this.state.tasks;
    arr.push({
      name,
      stage
     } )
    this.setState({tasks: arr})
  }

  moveForward =name=>{
    const task = this.state.tasks.find(item => item.name === name);
    const index = this.state.tasks.findIndex(item => item.name === name);
    if( this.state.taskName!=="") {

      if(task.stage < 3){
        const arr = this.state.tasks;
        task.stage = task.stage+1;
        arr[index]=task;
        this.setState({tasks:arr})
      }
    }
  }

  moveBack =(name)=>{  
    const task = this.state.tasks.find(item => item.name === name);
    const index = this.state.tasks.findIndex(item => item.name === name);
    if(  this.state.taskName!==""){
      if(task.stage >0 ){
        task.stage = task.stage-1;
        const arr = this.state.tasks;
        arr[index]=task;
        this.setState({tasks:arr} ) 
      }
    }
  }

  delete = (name)=>{
  if(  this.state.taskName==="") return ""
   const arr = this.state.tasks.filter(item=>item.name !== name)
   this.setState({tasks:arr,taskName:""})

  }

  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls 
          taskName ={this.state.taskName}
          add = {this.add}
          moveForward = {this.moveForward}
          moveBack = {this.moveBack}
          delete = {this.delete}
        />

        <Board
          setTaskName={this.setTaskName}
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
        />
      </div>
    );
  }
}

export default App;
