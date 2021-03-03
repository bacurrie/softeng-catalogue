import React, { Component } from 'react'
import Form from "@rjsf/core"
import DetailPage from './DetailPage';
class Debug extends Component {
    
    constructor(props){
        super(props);

        this.state = {
                    text: "clicks",
                    data: {"name": "Chair", "desc": "comfortable", "imagedesc": "a chair"}
                    };
    }    

    onSubmit = ({formData}) => this.setState({text: formData.test, data: formData}, function() {console.log(formData)});

    render() {
        console.log(this.state.data);
        const schema = {
                        "title": "a test",
                        "description": "this is a sample",
                        "type": "object",
                        "properties": {

                            "name": {
                                type: "string",
                                title: "name"
                            },
                            "desc": {
                                type: "string",
                                title: "description"
                            },
                            "imagedesc": {
                                type: "string",
                                title: "image description"
                            }
                        }
                    };
        
        return (
            <div className="clicker">
                <Form schema={schema} onSubmit={this.onSubmit.bind(this)} noValidate>
                    <button type="submit">Save</button>
                </Form>
                <DetailPage data={this.state.data} />
            </div>

        );
    }
}

export default Debug