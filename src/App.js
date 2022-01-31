import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsView from './views/CardsView';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ScoutingView from './views/ScoutingView';
import React, { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import ScoutFormComponent from './components/ScoutFormComponent';
import { socket } from './service/Socket';
import useStore from './stores/TeamDataStore';
import "./custom.scss";
import MatchesView from './views/MatchesView';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK0sVn4otFsByWtRYoNC7Gh_6APhaUg_Q",
  authDomain: "project-hermes-d8d3e.firebaseapp.com",
  projectId: "project-hermes-d8d3e",
  storageBucket: "project-hermes-d8d3e.appspot.com",
  messagingSenderId: "170842974663",
  appId: "1:170842974663:web:a95e6f003276abf398d1e2",
  measurementId: "G-MYERRPE8G5"
};

firebase.initializeApp(firebaseConfig)

const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      disableSignUp: { status: true },
    }],
}



function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  socket.on('connection', (res) => {
    console.log(":R");
    console.log(res);

    useStore.setState({ teamData: res.data });

  })

  socket.on('data-update', (res) => {
    console.log ("received update");
    console.log(res)

    useStore.setState({ teamData: res.data });
  })

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    })

    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div className="mt-5">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardsView />} />
            <Route path="/scouting" element={<ScoutingView />} />
            <Route path="/scouting/scoutforms/:id" element={<ScoutFormComponent />} />
            <Route path="/matches" element={<MatchesView/>}/>
            {/* <Route path="/login" element={<div id="firebaseui-auth-container" />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;