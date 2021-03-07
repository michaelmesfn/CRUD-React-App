import React, { Component } from 'react';

class Try extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: []
        };
    }

    appendInput() {
        // var newInput = `input-${this.state.inputs.length}`;
        var newInput = ``;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
    //   handleChange(event,index) {
    //         // this.state.countries[index] = e.target.value
    //         // this.setState({countries: this.state.countries})
    //         this.setState(state => {
    //             const countries = state.countries.map((item, j) => {
    //                 if (j === index) {
    //                     item = event.target.value;
    //                     return item;
    //                 } else {
    //                     return item;
    //                 }
    //             });

    //             return {
    //                 countries,
    //             };
    //         });
    //   }
    changeTaskHandler = (event, index) => {

        this.setState(state => {
            const inputs = state.inputs.map((item, j) => {
                if (j === index) {
                    item = event.target.value;
                    return item;
                } else {
                    return item;
                }
            });

            return {
                inputs,
            };
        });
    }
    render() {
        console.log(this.state.inputs)
        return (
            <div>
                <form>
                    <div id="dynamicInput">
                        <label>Tasks: </label>
                        <center><table className="table table-borderless table-hover " style={{ width: "94%", backgroundColor: "#E9ECEF" }} >
                            <tbody>
                                {
                                    this.state.inputs.map(
                                        (input, index) =>
                                            <tr key={index}>
                                                <td><input placeholder="Task" name="input" className="form-control"
                                                    value={input} onChange={(e) => this.changeTaskHandler(e, index)} /></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table></center>

                    </div>
                </form>
                
                    <button onClick={() => this.appendInput()} className="btn btn-primary" style={{ backgroundColor: '#3e55f4' }}>+</button>
            </div>
        );
    }

}

export default Try;
