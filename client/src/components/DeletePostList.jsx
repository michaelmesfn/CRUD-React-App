import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";
import '../App.css'

import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

class DeletePostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // setting the state index to the index received
            index: this.props.match.params.index
        }
    }

    componentDidMount() {

    }

    deleteElement = (e) => {
        //prevent default stops the page from refreshing with new Data
        e.preventDefault();
        //delete the element at the specific index
        delete PostData[this.state.index];
        console.log("Element at index " + this.state.index + " deleted");
        //notification
        store.addNotification({
            message: "Item Deleted :)",
            type: "danger",
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
        //redirects to the index view when done
        this.props.history.push('/index-view');
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
                                    {/* confirmation form */}
                                    <h4 style={{ color: 'red' }}>The item will be permanently deleted</h4>
                                    <h5>Do you wish to continue?</h5>
                                    <br></br>
                                    <button className="btn btn-danger" onClick={this.deleteElement}>Yes</button>
                                    <button className="btn btn-light" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>No</button>
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