import React, { Component } from "react";
import test from '../pages/testimg.jpg';

class Image extends Component
{
    render()
    {
        return(
            <div className='image'>
                <img src={test} alt="stuff"></img>
            </div>
        )
    }
}

export default Image