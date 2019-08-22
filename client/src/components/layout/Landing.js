import React, { Component } from "react";

class Landing extends Component {
    constructor(props) {
        super(props)
        this.isLoggedIn = this.props.isLoggedIn
    }

    render() {
        return (
            <div style={{ height: "75vh", verticalAlign: 'baseline' }} className="center-align">
                <div style={{ verticalAlign: 'baseline' }}>
                <h4>
                    This <b>To-do</b> list was built using the {" "}
                    <span style={{ fontFamily: "monospace", fontWeight: 'bold', fontSize: 'larger' }}>MERN</span> stack
                </h4>
                <p className="flow-text grey-text text-darken-1">
                    <a href="https://www.mongodb.com" rel="noopener noreferrer" target="_blank">MongoDB</a> |
                    <a href="https://expressjs.com/" rel="noopener noreferrer" target="_blank">Express JS</a> |
                    <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">React JS</a> |
                    <a href="https://nodejs.org" rel="noopener noreferrer" target="_blank">Node JS</a>
                </p>
                </div>
            </div>
        );
    }
}
export default Landing;