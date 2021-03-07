import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";

class ReadPostList extends Component {
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
        this.setState({
            _id: PostData[this.state.index]._id,
            title: PostData[this.state.index].title,
            city: PostData[this.state.index].city,
            employer: PostData[this.state.index].employer,
            requirements: PostData[this.state.index].requirements,
            tasks: PostData[this.state.index].tasks
        });
    }

    cancel() {
        this.props.history.push('/elements');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <center><a href='/'><img src={logo} alt='talentbait_logo' style={{ width: '8%', height: 'auto' }}></img></a></center>
                            <div className="card-body">
                                <form>
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
                                        {/* <input readOnly placeholder="Requirements" name="requirements" className="form-control"
                                            value={this.state.requirements} /> */}
                                        <div className="row">
                                            <center><table className="table table-borderless table-hover " style={{ width: "94%", backgroundColor: "#E9ECEF" }}>
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
                                    <div className="form-group">
                                        <label>Tasks: </label>
                                        {/* <input readOnly placeholder="Tasks" name="tasks" className="form-control"
                                            value={this.state.tasks}  /> */}
                                        <div className="row">
                                            <center><table className="table table-borderless table-hover " style={{ width: "94%", backgroundColor: "#E9ECEF" }} >
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
                                    <button className="btn btn-secondary" onClick={this.cancel.bind(this)} style={{ marginLeft: "400px" }}>Go Back</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ReadPostList