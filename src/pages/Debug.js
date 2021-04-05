import React, { Component } from 'react'
import DebugDetail from './DebugDetail';
import DebugForm from './DebugForm';
import first from '../data/images/chair.png';
class Debug extends Component {

    constructor(props)
    {
        super(props);

        this.state =
        {
            text: "clicks",
            data: {name: "Chair", desc: "comfortable", imagedesc: "a chair"},
            isEditable: false
        };
    }

    submitCallback = ({formData}) => {
        this.setState({data: formData});
        this.editCallback(false);
    }

    editCallback = (editBool) => {
        this.setState({isEditable: editBool});
    }

    render() {

        console.log(this.state.data);

        const isEditable = this.state.isEditable;
        if(isEditable){
            return <DebugForm data={this.state.data} callBack={this.submitCallback} cancel={this.editCallback}/>
        } else {
            return <DebugDetail data={this.state.data} callBack={this.editCallback}/>
        }
    }
}

export default Debug