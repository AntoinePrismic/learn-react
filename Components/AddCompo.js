import React, { Component } from 'react';

class AddCompo extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{},
        };
    }

    static defaultProps ={
        categories: ['Important','Moins important','Pas important'],
    };
    handleSubmit(e){
        this.setState(
            {
                newProject: {
                title:this.refs.title.value,
                category:this.refs.category.value,
            },
        },
            function(){
                console.log(this.state);
            }
        )
        e.preventDefault();
    }
    render(){
        let selectOptions = this.props.categories.map(category =>{
            return(
                <option key={category} value={category}>
                {category}
                </option>
            );
        });
        return(
            <div>
                <h3>Nouveau projet</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label for="titre">Titre: </label>
                        <input type="text" ref="title" id="titre"/>
                    </div>
                    <div>
                        <label>Categorie: </label>
                        <select ref="category">{selectOptions}</select>
                    </div>
                    <input type="Submit" value="Envoyer"/>
                </form>
            </div>
        );
    }
}

export default AddCompo;