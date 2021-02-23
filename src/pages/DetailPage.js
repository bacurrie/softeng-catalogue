import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from './testimg.jpg';
import Image from '../components/Image';

class DetailPage extends Component 
{
    render() 
    {
        return(
            <div className='detail'>
                
                <Link to='/index'>return to index</Link>
                <Image/>
                <h2>Obj subtype</h2>
                <h3>Obj attribute</h3>
                <p>Lorem ipsum yadda yadda yadda</p>

            </div>
        )
    }
}

export default DetailPage