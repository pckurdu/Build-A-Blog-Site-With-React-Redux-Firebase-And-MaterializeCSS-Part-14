//default data is used if no state data is assigned.
const initState={
    //projects data
    projects:[
        {id:'1',title:'pckurdu1',content:'first project'},
        {id:'2',title:'pckurdu2',content:'second project'},
        {id:'3',title:'pckurdu3',content:'third project'},
    ]
}

//create reducer with state and action parameters
const projectReducer = (state = initState, action) => {
    //Set reducer by action type
    switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('create project', action.project);
        return state;
      case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.project);
      return state;
      default:
      return state;
    }
  };

export default projectReducer