import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Data from "../data/data.json";

class CollectionIndex extends Component 
{
    render() 
    {
        return(
            <div className="indexlist">
                <ul>
                    {Data.map(data => (
                        <li>
                            <Link to={data.id}>{data.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CollectionIndex