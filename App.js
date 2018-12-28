import React, { Component } from 'react';
import Compo from './Components/Compo';
import './App.css';
import AddCompo from './Components/AddCompo';

class App extends Component {
  constructor() {
    super();
    this.state= {
      projects: [],
    };
  }
componentWillMount(){
  this.setState({
    projects:[
      {
        title: 'Projet 1',
        category: 'Importante'
      },
      {
        title: 'Projet 2',
        category: 'Moins important'
      },
      {
        title: 'Projet 3',
        category: 'Pas important'
      }
    ],
  });
}

handleAddCompo(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
  render() {
    return (
      <div className="App">
        <AddCompo addCompo={this.handleAddCompo.bind(this)}/>
      </div>
    );
  }
}

export default App;