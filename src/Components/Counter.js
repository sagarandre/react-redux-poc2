import React,{Component} from 'react';
import { connect } from 'react-redux';
import {ADD_COUNTER} from  '../Actions/ActionTypes'

class Counter extends Component
{
   constructor(props)
   {
       
       super(props);
       console.log(this.props);
       console.log(this.props.children);
      
   }

   AddCounter = () =>
   {
      this.props.increamentCounter();
   }

   render()
   {
       return(
           <div>
               {this.props.v}
           <span>counter:- {this.props.counter}</span> < br/>
           <button onClick={this.AddCounter}>Add</button>
           </div>
       )
   }
}

const mapStateToProps = (state) =>
{
    console.log(state);
   return(
       {
           counter : state.counter
       }
   )
}

const mapDispatchToProps = (dispatch) =>
{
    
   return(
       {
           increamentCounter : () => {
               dispatch({type:ADD_COUNTER})
           }
       }
   )
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);