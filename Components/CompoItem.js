import React, { Component } from 'react';

class CompoItem extends Component {
    render(){
        console.log(this.props);
        return(
            <li className="Compo">
            {this.props.project.title} - {this.props.project.category}
            </li>
        );
    }
}
export default CompoItem;