import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "@rjsf/core"
import DebugDetail from "./DebugDetail";
import first from '../data/images/chair.png';


class DebugForm extends Component 
{

//TODO callback for debugform
    onSubmit(formData){
        this.props.callBack(formData);
    }

    cancelHandle(){
        this.props.cancel(false);
    }

    render() 
    {
        const schema = 
        {
            "title": "debug",
            "description": "this is a sample",
            "type": "object",
            "properties": {

                "name": {
                    type: "string",
                    title: "name",
                },
                "desc": {
                    type: "string",
                    title: "description",
                },
                "imagedesc": {
                    type: "string",
                    title: "image description",
                },
                "image": {
                    type: "string",
                    format: "data-url",
                    title: "image",
                }
            }
        };
        
        return(
            <div className='detail'>
                <Form schema={schema} formData={this.props.data} onSubmit={this.onSubmit.bind(this)} noValidate>
                    <button type="submit">Save</button>
                </Form>
                    <button onClick={this.cancelHandle.bind(this)}>cancel</button>
            </div>
        )
    }
}

export default DebugForm