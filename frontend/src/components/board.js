import PropTypes from "prop-types";
import "./board.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


export default class BoardPage extends Component {
    
    constructor(props){
        super(props);
        this.state={
            classname:""
        }
    }
    
    componentDidMount(){
        this.state.classname=this.props.location.state;
        console.log(this.state.classname);
    }

  render(){
    return (
        <div className="boardpage" > 
                <text>
                    {this.props.location.state.classname}
                    <br/>
                    "not gonna work"
                </text>
        </div>

    );
  }
}

 console.log("hi");



BoardPage.propTypes = {
}
BoardPage.defaultProps = {
}

