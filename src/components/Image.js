import React, { Component } from "react";
import test from '../pages/testimg.jpg';

class Image extends Component 
{
    render()
    {
        return(
            <div className='image'>
                <h1>Obj name</h1>
                <img src={test}></img>
            </div>
        )
    }
}

export default Image