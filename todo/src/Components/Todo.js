import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: "This is task 1", id: 1 },
        { task: "This is task 2", id: 2 },
        { task: "This is task 3", id: 3 },
      ],
      currTask: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      tasks: this.state.tasks,
      currTask: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.currTask === "") return;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.currTask, id: this.state.tasks.length + 1 },
      ],
      currTask: "",
    });
  };

  handleDelete = (id) =>{
    this.setState({
        tasks: this.state.tasks.filter(task => {
            return task.id !== id
        }),
        currTask: "",
      }); 
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.currTask}
          onChange={this.handleChange}
        ></input>

        <button onClick={this.handleSubmit}>Add</button>
        <ul>
          {this.state.tasks.map((taskObj) => {
            return (
              <div key={taskObj.id}>
                <li>{taskObj.task}</li>
                <button onClick={ () => this.handleDelete(taskObj.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
