import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";
import '../App.css';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
        this.editElement = this.editElement.bind(this);
    }

    editElement(index) {
        this.props.history.push(`/update-view/${index}`);
    }

    deleteElement(index) {
        this.props.history.push(`/delete-view/${index}`);
    }

    newElement() {
        this.props.history.push(`/create-view/`);
    }

    readElement(index) {
        this.props.history.push(`/read-view/${index}`);
    }
    componentDidMount() {
        console.log(PostData);
    }
    home() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-link centered" onClick={this.home.bind(this)}> <center>
                    <img className="sized" src={logo} alt='talentbait_logo' ></img>
                </center></button>
                {/* <h2 className="text-center"> Table</h2> */}
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Location</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //this.state.elements.map(
                                PostData.map(
                                    (element, key) =>
                                        <tr key={key}>
                                            <td><button type="button" className="btn btn-link" onClick={() => this.readElement(key)}>{element.title}</button></td>
                                            <td>{element.city}</td>
                                            <td>{element.employer}</td>
                                            <td>
                                                <button className="btn btn-outline-secondary" onClick={() => this.editElement(key)}>Edit</button>
                                            </td>
                                            <td>
                                                {/* <button className="btn btn-outline-danger" onClick={() => this.deleteElement(key)}>Delete</button> */}
                                                {/* <button className="btn btn-outline-danger" onClick={() => this.setState({ showTaskDialog: true })}>Delete</button>
                                                <DeleteDialog show={this.state.showTaskDialog} confirm={this.state.confirm} /> */}
                                                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Click OK to delete')) this.deleteElement(key) }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <button className="btn btn-primary talentbait-blue" onClick={() => this.newElement()}>New</button>
                </div>
            </div>
        );
    }
}


export default PostList;