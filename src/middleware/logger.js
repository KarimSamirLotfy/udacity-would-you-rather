const Logger = (store) => (next) => (action) => {
 // Here we Log evrything for debuging 
 console.group()
    console.log(action)
    const next_action = next(action)
    console.log("new action from next", next_action); 
    console.log("new State from store", store.getState()); 

 console.groupEnd()
 // return whatever next returns
 return next_action
}

export default Logger