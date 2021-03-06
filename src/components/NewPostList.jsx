import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";

import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

import '../App.css';

class NewPostList extends Component {
    constructor(props) {
        super(props)
        // initialize states
        this.state = {
            index: this.props.match.params.index,
            _id: '',
            title: '',
            city: '',
            employer: '',
            requirements: [],
            tasks: []
        }
    }

    componentDidMount() {
    }

    newElement = (e) => {
        e.preventDefault();
        // setting the new element with state values
        let element = {
            _id: this.state._id,
            title: this.state.title,
            city: this.state.city,
            employer: this.state.employer,
            requirements: this.state.requirements,
            tasks: this.state.tasks
        };
        console.log(element);
        PostData.push(element);
        store.addNotification({
            message: "Added :)",
            type: "default",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
        this.props.history.push('/index-view');
    }
    // state setters, handle user input in the text fields
    change_idHandler = (event) => {
        this.setState({ _id: event.target.value });
    }
    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changeCityHandler = (event) => {
        //console.log(this.state.requirements[0]);
        this.setState({ city: event.target.value });
    }
    changeEmployerHandler = (event) => {
        this.setState({ employer: event.target.value });
        // this.state.employer = event.target.value;
    }
    //task array handler, receives index of specific task and deletes it out of the task array
    changeTaskHandler = (event, index) => {
        this.setState(state => {
            // goes through the tasks and looks for the index provided
            const tasks = state.tasks.map((item, j) => {
                if (j === index) {
                    item = event.target.value;
                    return item;
                } else {
                    return item;
                }
            });

            return {
                tasks,
            };
        });
    }
    //delete a task out of the tasks array
    deleteTaskRow(event, index) {
        event.preventDefault();
        this.state.tasks.splice(index, 1)
        this.setState({ tasks: this.state.tasks })
    }
    //add a new element to the tasks array
    appendTask(event) {
        event.preventDefault();
        //default value of the text field is intialized here
        var newTask = ``;
        this.setState(prevState => ({ tasks: prevState.tasks.concat([newTask]) }));
    }

    //requirement handler, works the same way as the task handler
    changeRequirementHandler = (event, index) => {
        this.setState(state => {
            const requirements = state.requirements.map((item, j) => {
                if (j === index) {
                    item = event.target.value;
                    return item;
                } else {
                    return item;
                }
            });

            return {
                requirements,
            };
        });
    }
    deleteRequirementRow(event, index) {
        event.preventDefault();
        this.state.requirements.splice(index, 1)
        this.setState({ requirements: this.state.requirements })
    }
    appendRequirement(event) {
        event.preventDefault();
        var newRequirement = ``;
        this.setState(prevState => ({ requirements: prevState.requirements.concat([newRequirement]) }));
    }
    cancel() {
        this.props.history.push('/index-view');
    }
    home() {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <button type="button" className="btn btn-link centered" onClick={this.home.bind(this)}> <center>
                                <img className="sized" src={logo} alt='talentbait_logo' ></img>
                            </center></button>
                            <div className="card-body">
                                {/* input form with values initialized to state values which are empty */}
                                {/* respective event handlers are called on change */}
                                <form>
                                    <div className="form-group">
                                        <label> ID: </label>
                                        <input placeholder="ID" name="_id" className="form-control"
                                            value={this.state._id} onChange={this.change_idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                            defaultValue={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Employer: </label>
                                        <input placeholder="Employer" name="employer" className="form-control"
                                            value={this.state.employer} onChange={this.changeEmployerHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Requirements: </label>
                                        <center><table className="table table-borderless table-hover reqtask-table"  >
                                            <tbody>
                                                {
                                                    // index is passed as a parameter to indicate which element of the array should be edited or deleted
                                                    this.state.requirements.map(
                                                        (requirement, index) =>
                                                            <tr key={index}>
                                                                <td><input placeholder="Requirement" name="requirement" className="form-control"
                                                                    value={requirement} onChange={(e) => this.changeRequirementHandler(e, index)} /></td>
                                                                <td>
                                                                    <button className="btn btn-outline-danger" onClick={(e) => this.deleteRequirementRow(e, index)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table></center>
                                        {/* add new requirement field */}
                                        <center><button onClick={(e) => this.appendRequirement(e)} className="btn btn-outline-primary" >+</button></center>
                                    </div>
                                    <div className="form-group">
                                        <label>Tasks: </label>
                                        <center><table className="table table-borderless table-hover reqtask-table" >
                                            <tbody>
                                                {
                                                    this.state.tasks.map(
                                                        (task, index) =>
                                                            <tr key={index}>
                                                                <td><input placeholder="Task" name="task" className="form-control"
                                                                    value={task} onChange={(e) => this.changeTaskHandler(e, index)} /></td>
                                                                <td>
                                                                    <button className="btn btn-outline-danger" onClick={(e) => this.deleteTaskRow(e, index)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table></center>
                                        <center><button onClick={(e) => this.appendTask(e)} className="btn btn-outline-primary">+</button></center>
                                    </div>
                                    {/* adds new element */}
                                    <button className="btn btn-success" onClick={this.newElement}>Add</button>
                                    <button className="btn btn-light" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default NewPostList