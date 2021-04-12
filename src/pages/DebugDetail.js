import React, { Component } from "react";
import { Link } from "react-router-dom";

class DebugDetail extends Component
{

    constructor(props){
        super(props);
    }

    editHandle(){
        this.props.callBack(true);
    }
    render()
    {

        return(
            <div className='detail'>

                <Link to='/index'>return to index</Link>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.desc}</p>
                <button onClick={this.editHandle.bind(this)}>Edit</button>
                <img src={this.props.data.image} alt={this.props.data.imagedesc}/>

            </div>
        )
    }
}

export default DebugDetail