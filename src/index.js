import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//createStore import code
//to use the middleware structure and merge process
import {createStore,applyMiddleware,compose} from 'redux';
//to use the thunk structure
import thunk from 'redux-thunk';

//for firebase connection
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';

 
import rootReducer from './store/reducers/rootReducer';

import {Provider} from 'react-redux';
//for firebase config
import firebaseConfig from './config/firebaseConfig';

//We create a store using createStore.
//Let's give  reducer as parameter
//store, thunk will be used to provide information
const store=createStore(
    rootReducer,
    //firebase and firestore setting process with thunk merge
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseConfig),
    //Activate the firebase standby feature.
    //import the users collection into the profile property.
    reactReduxFirebase(firebaseConfig,{attachAuthIsReady:true,useFirestoreForProfile:true,
        userProfile:'users'})
    
    )
  );

  //if the page firebaseIsReady property succeeds do render
  store.firebaseAuthIsReady.then(()=>{
      //In store attribute, we place the store that we created.
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  })


