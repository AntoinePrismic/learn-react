import React, { Component } from 'react';
import CompoItem from './CompoItem'

class Compo extends Component {
  render() {
    let compoItems;
    if(this.props.projects){
      compoItems = this.props.projects.map
        (project => {
          return (
            <CompoItem key={project.title} project={project} />
          )
        }
      );
    }
    return (
      <div className="Compo">
        {compoItems}
      </div>
    );
  }
}

export default Compo;