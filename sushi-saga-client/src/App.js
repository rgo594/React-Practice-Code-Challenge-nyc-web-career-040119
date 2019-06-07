import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: []
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ sushi: data }));
    }

    sushiList = () => {
      return this.state.sushi.map( soosh => {
        return soosh.name
      }).splice(0, 4)
    }
    //I probably couldve done some of the other deliverables, but it makes it really hard to test anything without this

    moreBtn = (e) => {
      e.target
    }

    // deleteSushi = (e) => {
    //   if (e.currentTarget === )
    // }


  render() {
    console.log(this.state.sushi.map( soosh => {
      return soosh.name
    }).splice(0, 4))
    return (
      <div className="app">
      <li>{this.sushiList}</li>
        <SushiContainer btnClick={this.moreBtn}/>
        <Table />

      </div>
    );
  }
}

export default App;
