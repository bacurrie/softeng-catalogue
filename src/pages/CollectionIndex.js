import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CollectionIndex extends Component 
{
    render() 
    {
        return(
            <div className="indexlist">
                <ul>
                    <li>
                        <Link to='/detail'>example1</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CollectionIndex