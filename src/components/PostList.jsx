import React, { Component } from 'react'
import PostData from '../data/posts.json'
import logo from "../talentbait_logo.png";
import '../App.css';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            elements: []
        };
        this.editElement = this.editElement.bind(this);
    }

    editElement(index) {
        this.props.history.push(`/update-element/${index}`);
    }

    deleteElement(index) {
        this.props.history.push(`/delete-element/${index}`);
    }

    newElement() {
        this.props.history.push(`/new-element/`);
    }

    readElement(index) {
        this.props.history.push(`/read-element/${index}`);
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
                {/* <center><a href='/'><img src={logo} alt='talentbait_logo' style={{ width: '8%', height: 'auto' }}></img></a></center> */}
                <button type="button" className="btn btn-link centered" onClick={this.home.bind(this)}> <center>
                <img  className="sized" src={logo} alt='talentbait_logo' ></img>
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
                                            {/* <td onClick = { () => this.readElement(key) }>{element.title}</td> */}
                                            <td><button type="button" className="btn btn-link" onClick={() => this.readElement(key)}>{element.title}</button></td>
                                            {/* <td><a href = {this.readElement(key)}>{element.title}</a></td> */}
                                            <td>{element.city}</td>
                                            <td>{element.employer}</td>
                                            <td>
                                                <button className="btn btn-outline-secondary" onClick={() => this.editElement(key)}>Edit</button>
                                            </td>
                                            <td>
                                                {/* <button className="btn btn-outline-danger" onClick={() => this.deleteElement(key)}>Delete</button> */}
                                                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Click OK to delete')) this.deleteElement(key) }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-primary" style={{ backgroundColor: '#3e55f4' }} onClick={() => this.newElement()}>New</button>
                </div>
            </div>
        );
    }
}


export default PostList;