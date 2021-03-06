import React, { Component } from "react";
import "./tasks.css";
import { taskData } from "../../utils/taskData";
import TaskGroup from "./TaskGroup";

export default class TasksContainer extends Component {
    constructor(){
        super();
        this.state = {
            tasks: taskData[0].tasks
        }
        this.logTasks = this.logTasks.bind(this);
        this.viewTasksHandler = this.viewTasksHandler.bind(this);
    };

    viewTasksHandler(type) {
        return(                
            <div>
                
                {
                    this.state.tasks.map(userTask => {
                        // condition ? return true thing : return false thing
                        return userTask.type === type ? 
                        <div 
                        key={userTask._id}
                        className="card"
                    >
                        <div className="card-body row">
                            <div className="col-md-10">
                                {userTask.task}
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-danger mr-2" type="button">Delete</button>
                                <button className="btn btn-primary mr-2" type="button">Edit</button>

                            </div>

                        </div>

                    </div> : null;
                    })
                }
    
            </div>
        )
    }

    logTasks() {
        console.log(this.allTaskTypes());
    };

    render() {
        const allTaskTypes = (() => {
            let taskTypes = []; // ["personal", "work", "goals"];
                this.state.tasks.forEach(task => taskTypes.push(task.type))
             
                let filteredTypes = taskTypes.filter((type, index) => taskTypes.indexOf(type) === index);
           
                return filteredTypes;
        })();
        return(
            <div className="Tasks container mx-auto">
                {/* <button onClick={this.logTasks}>Log Tasks</button> */}

              {allTaskTypes.map((type, index) => {
                return < TaskGroup
                            key={index}
                            title={type} 
                            tasksHandler = {this.viewTasksHandler(type)}
                        />})
              }
              
              
              
                


            </div>
            )
    }
}