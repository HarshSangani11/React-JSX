import React, { Component } from 'react'
import './Count.css'
export default class Count extends Component {
 constructor(props){
    super();
    this.state={count:0};
 }
 increment=()=>{
    this.setState({count:this.state.count+1})
 }
 decrement=()=>{
    this.setState({count:this.state.count-1})
 }
 reset=()=>{
    this.setState({count:this.state.count=0})
 }
    render() {
    return (
      <div className='main'>
        <h1 className='h1'>COUNTER</h1>
        <h1 className='h1'>{this.state.count}</h1>
        <h1 className='h1'>{this.state.name}</h1>
       
        <button onClick={this.increment} className='in'><i class="ri-add-fill"></i></button>
        <button onClick={this.reset}  className='reset'><i class="ri-restart-line"></i></button>
        <button onClick={this.decrement} className='de'><i class="ri-subtract-fill"></i></button>
        </div>
    )
  }
}
