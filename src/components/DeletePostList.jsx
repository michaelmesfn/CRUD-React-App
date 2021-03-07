import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";

class DeletePostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.match.params.index
        }
    }

    componentDidMount() {
        
    }

    deleteElement = (e) => {
        e.preventDefault();
        delete PostData[this.state.index];
        console.log("Element at index " + this.state.index + " deleted");
        this.props.history.push('/elements');
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
                            {/* <h3 className="text-center">Delete</h3> */}
                            <center><a href='/'><img src={logo} alt='talentbait_logo' style={{ width: '8%', height: 'auto' }}></img></a></center>
                            <div className="card-body">
                                <form>
                                    <h4>Are you sure?</h4>
                                    <button className="btn btn-danger"onClick={this.deleteElement}>Yes</button>
                                    <button className="btn btn-light"onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>No</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default DeletePostList