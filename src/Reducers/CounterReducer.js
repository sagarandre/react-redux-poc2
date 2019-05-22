
const CounterReducer = (state = {counter:0}, action) => {
   switch (action.type) {
       case 'ADD_COUNTER':
       
           return {
            counter:state.counter + 1
           }
         
   
       default:
       return state;
           
   }
}

export default CounterReducer;