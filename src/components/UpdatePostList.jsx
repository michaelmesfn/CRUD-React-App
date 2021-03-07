import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";

import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

import '../App.css';

class UpdatePostList extends Component {
    constructor(props) {
        super(props)
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
        console.log(this.state.index);
        // setting the current state with values from the object
        this.setState({
            _id: PostData[this.state.index]._id,
            title: PostData[this.state.index].title,
            city: PostData[this.state.index].city,
            employer: PostData[this.state.index].employer,
            requirements: PostData[this.state.index].requirements,
            tasks: PostData[this.state.index].tasks
        });
    }

    updateElement = (e) => {
        e.preventDefault();
        let element = {
            _id: this.state._id,
            title: this.state.title,
            city: this.state.city,
            employer: this.state.employer,
            requirements: this.state.requirements,
            tasks: this.state.tasks
        };
        console.log(element);
        // update object
        PostData[this.state.index]._id = element._id;
        PostData[this.state.index].title = element.title;
        PostData[this.state.index].city = element.city;
        PostData[this.state.index].employer = element.employer;
        PostData[this.state.index].requirements = element.requirements;
        PostData[this.state.index].tasks = element.tasks;
        // notification
        store.addNotification({
            message: "Updated :)",
            type: "success",
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
        this.props.history.push(`/read-view/${this.state.index}`);
        // this.props.history.push("/index-view");
    }

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
    changeTaskHandler = (event, index) => {
        this.setState(state => {
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
    deleteTaskRow(event, index) {
        event.preventDefault();
        this.state.tasks.splice(index, 1)
        this.setState({ tasks: this.state.tasks })
    }
    appendTask(event) {
        event.preventDefault();
        var newTask = ``;
        this.setState(prevState => ({ tasks: prevState.tasks.concat([newTask]) }));
    }
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
                                        <center><table className="table table-borderless table-hover reqtask-table">
                                            <tbody>
                                                {
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
                                                                    {/* delete task field */}
                                                                    <button className="btn btn-outline-danger" onClick={(e) => this.deleteTaskRow(e, index)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table></center>
                                        {/* add task field */}
                                        <center><button onClick={(e) => this.appendTask(e)} className="btn btn-outline-primary">+</button></center>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateElement}>Update</button>
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
export default UpdatePostList