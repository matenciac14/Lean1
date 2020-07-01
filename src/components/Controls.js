import React, { Component} from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.btncreate = React.createRef();
  }

 
 
  handlleinputname=(e) =>{
    this.setState({nameTaks:e.target.value})
    if(e.target.value !== ""){
      this.btncreate.current.disabled= false;
    }else{this.btncreate.current.disabled= true;}
    
  }

  createTask =() =>{

    this.props.add(this.state.nameTaks,0)
  }

  render() {
    
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex' }}>
          <input
            placeholder="New task name"
            style={{ fontSize: '1rem' }}
            data-testid="new-task-name-input"
            onChange={this.handlleinputname}
            
          />
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="create-task-btn"
            onClick={this.createTask}
            ref={this.btncreate}

          >
            Create
          </button>
        </div>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            disabled
            style={{ fontSize: '1rem' }}
            value={this.props.taskName}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            onClick={()=>this.props.moveBack(this.props.taskName)}
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            onClick ={()=>this.props.moveForward(this.props.taskName)}
          >
            Move forward
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="delete-btn"
            onClick={()=>this.props.delete(this.props.taskName)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
