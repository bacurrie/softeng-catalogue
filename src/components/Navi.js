import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navi extends Component 
{
    render() 
    {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/index'>Index</Link>
                    </li>
                    <li>
                        <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/detail'>Detail</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navi