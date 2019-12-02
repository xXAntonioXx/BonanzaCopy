import React, { Component } from 'react';
import './App.css';
import Login from './Login';

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
      <Login />
    );
  }

}

export default App;