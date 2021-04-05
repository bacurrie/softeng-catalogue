import React, { Component } from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import chair from '../data/images/chair.png';
import couch from "../data/images/couch.jpg";
import table from "../data/images/table.jpg";
import desk from "../data/images/desk.jpg";

class DetailPage extends Component
{
    render()
    {
      let img = {"Chair": chair, "Couch": couch, "Coffee Table": table, "Desk": desk}
      return(
          <div className='detail'>

              <Link to='/index'>return to index</Link>
              <h2>{this.props.data.name}</h2>
              <p>{this.props.data.desc}</p>
              <img src={img[this.props.data.name]} alt={this.props.data.imagedesc}/>

          </div>
      )
    }
}

export default DetailPage