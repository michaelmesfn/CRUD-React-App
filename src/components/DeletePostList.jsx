import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";
import '../App.css'
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