import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";
import '../App.css';

class ReadPostList extends Component {
    constructor(props) {
        super(props)
        // intializing state values
        this.state = {
            //saving the index passed from the previous page on the local var index
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
        //this state setters
        console.log(this.state.index);
        this.setState({
            _id: PostData[this.state.index]._id,
            title: PostData[this.state.index].title,
            city: PostData[this.state.index].city,
            employer: PostData[this.state.index].employer,
            requirements: PostData[this.state.index].requirements,
            tasks: PostData[this.state.index].tasks
        });
    }
    //takes to index view
    cancel() {
        this.props.history.push('/index-view');
    }
    //takes to home view
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
                            {/* creating readonly input fields initialized with state fields */}
                            <div className="card-body">
                                    <div className="form-group">
                                        <label> ID: </label>
                                        <input readOnly placeholder="ID" name="_id" className="form-control"
                                            value={this.state._id} />
                                    </div>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input readOnly placeholder="Title" name="title" className="form-control"
                                            defaultValue={this.state.title} />
                                    </div>
                                    <div className="form-group">
                                        <label> City: </label>
                                        <input readOnly placeholder="City" name="city" className="form-control"
                                            value={this.state.city} />
                                    </div>
                                    <div className="form-group">
                                        <label> Employer: </label>
                                        <input readOnly placeholder="Employer" name="employer" className="form-control"
                                            value={this.state.employer} />
                                    </div>
                                    <div className="form-group">
                                        <label> Requirements: </label>
                                        {/* mapping members of the requirements array to separate fields */}
                                        <div className="row">
                                            <center><table className="table table-borderless table-hover reqtask-table" >
                                                <tbody>
                                                    {
                                                        this.state.requirements.map(
                                                            (requirement, key) =>
                                                                <tr key={key}>
                                                                    <td>{requirement}</td>
                                                                </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table></center>
                                        </div>
                                    </div>
                                    {/* mapping members of the tasks array to separate fields */}
                                    <div className="form-group">
                                        <label>Tasks: </label>
                                        {/* <input readOnly placeholder="Tasks" name="tasks" className="form-control"
                                            value={this.state.tasks}  /> */}
                                        <div className="row">
                                            <center><table className="table table-borderless table-hover reqtask-table" >
                                                <tbody>
                                                    {
                                                        this.state.tasks.map(
                                                            (task, key) =>
                                                                <tr key={key}>
                                                                    <td>{task}</td>
                                                                </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table></center>
                                        </div>
                                    </div>
                                    {/* return to index view */}
                                    <button className="btn btn-secondary " onClick={this.cancel.bind(this)} style={{ marginLeft: "335px" }}>Go to Index View</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ReadPostList