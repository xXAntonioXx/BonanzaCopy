import React, { Component } from 'react';
import './searchBar.css';
import Products from './Product';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            values:[
                {
                    "Tela": "Batista",
                    "Tipo": "algodón",
                    "Cantidad": 220,
                    "Costo": 500
                },
                {
                    "Tela": "Tweed",
                    "Tipo": "tejido escocés",
                    "Cantidad": 50,
                    "Costo": 350
                },
                {
                    "Tela":"Gabardina",
                    "Tipo":"tejido algodón",
                    "Cantidad":220,
                    "Costo":350
                },
                {
                    "Tela":"Franela",
                    "Tipo":"Crepé",
                    "Cantidad":220,
                    "Costo":350
                }
            ],
            filteredValues:[
                {
                    "Tela": "Batista",
                    "Tipo": "algodón",
                    "Cantidad": 220,
                    "Costo": 500
                },
                {
                    "Tela": "Tweed",
                    "Tipo": "tejido escocés",
                    "Cantidad": 50,
                    "Costo": 350
                },
                {
                    "Tela":"Gabardina",
                    "Tipo":"tejido algodón",
                    "Cantidad":220,
                    "Costo":350
                },
                {
                    "Tela":"Franela",
                    "Tipo":"Crepé",
                    "Cantidad":220,
                    "Costo":350
                }
            ],
            Tela:"",
            Tipo:"",
            Cantidad:"",
            Costo:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.searchAndFilter = this.searchAndFilter.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    searchAndFilter(event){
        let filtered = this.state.values.filter((tela) => {
            return (tela.Tela === this.state.Tela || this.state.Tela === "") && 
                    (tela.Tipo === this.state.Tipo || this.state.Tipo === "")
        });
        this.setState({filteredValues:filtered});
    }

    render() {
        return (
            <div class="holder">
                <form class="outer-form">
                    <div class="inner-form">
                        <div class="first-wrap">
                            <input id="search" type="text" placeholder="Tela" class="fields" name="Tela" onChange={this.handleChange}/>
                        </div>
                        <div class="first-wrap">
                            <input id="location" type="text" placeholder="Tipo" class="fields" name="Tipo" onChange={this.handleChange}/>
                        </div>
                        <div class="first-wrap">
                            <input id="location" type="text" placeholder="Cantidad" class="fields" name="Cantidad" onChange={this.handleChange}/>
                        </div>
                        <div class="first-wrap">
                            <input id="location" type="text" placeholder="Costo" class="fields" name="Costo" onChange={this.handleChange}/>
                        </div>
                        <div class="first-wrap">
                            <button class="btn-search" type="button" onClick={this.searchAndFilter}>Buscar</button>
                        </div>
                    </div>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Products filteredTelas={this.state.filteredValues}/>
            </div>
        );
    }
}

export default SearchBar;