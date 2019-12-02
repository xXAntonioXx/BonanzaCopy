import React, { Component } from 'react';
import './App.css';
//import { MDBBtn } from "mdbreact";
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import SearchBar from './searchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false,
      category: ''
    }


  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/v1/post/')
      .then(
        response => response.json()
      ).then((result) => {
        this.setState({
          data: result,
          loaded: true
        })
        console.log(this.state.data)
      }
      )
  }

  licra() {
    this.setState({
      category: 'LIC'
    })
    // this.setState({
    //   data: this.state.data.filter(prod => {
    //     return prod.category === 'LIC'

    //   })
    // })
  }


  camiseta() {
    this.setState({
      category: 'CAM'
    })
    // this.setState({
    //   data: this.state.data.filter(prod => {
    //     return prod.category === 'CAM'
    //   })
    // })
  }

  algodon() {
    this.setState({
      category: 'ALG'
    })
    // this.setState({
    //   data: this.state.data.filter(prod => {
    //     return prod.category === 'ALG'
    //   })
    // })
  }

  todo() {
    this.setState({
      category: ''
    })
    // fetch('http://127.0.0.1:8000/api/v1/post/').then(
    //   data => data.json()
    //  ).then((result) =>{
    //    this.setState({
    //      data : result,
    //      loaded : true
    //    })
    //  }
    //  )
  }

  render() {
    return (
      <div className="App">
        <header className="Sticker">
          <StickyHeader>  </StickyHeader>
          <div className="cat-container">

            {/* <div className="d-flex bd-highlight"  >

              <MDBBtn className="p-2 flex-fill bd-highlight" size="lg" color="elegant" onClick={this.todo.bind(this)}>Todo</MDBBtn>
              <MDBBtn className="p-2 flex-fill bd-highlight" size="lg" color="elegant" onClick={this.camiseta.bind(this)}>Camiseta</MDBBtn>
              <MDBBtn className="p-2 flex-fill bd-highlight" size="lg" color="elegant" onClick={this.licra.bind(this)}>Licra</MDBBtn>
              <MDBBtn className="p-2 flex-fill bd-highlight" size="lg" color="elegant" onClick={this.algodon.bind(this)}>Algodón</MDBBtn>
            </div> */}

          </div>
        </header>

        <div className="data-container">
        <h2>Almacén </h2>
          <SearchBar />
        </div>



        <div className="footer-container">
          <Footer />
        </div>

      </div>
    );
  }

}

export default App;