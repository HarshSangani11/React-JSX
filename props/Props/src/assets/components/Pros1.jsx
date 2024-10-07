import React, { Component } from 'react'

export default class Pros1 extends Component {
    constructor(props){
        super();
        this.state={count:0,name:'Harsh'}
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <>
      <div>props1</div>
      <h1>{this.state.count}</h1>
      <h1>{this.state.name}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      </>
    )
  }
}
