import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsView from './views/CardsView';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ScoutingView from './views/ScoutingView';
import React from 'react';
import 'firebase/compat/auth';
import ScoutFormComponent from './components/forms/ScoutFormComponent';
import { socket } from './service/Socket';
import useStore from './stores/TeamDataStore';
import "./custom.scss";
import MatchesView from './views/MatchesView';
import AdminView from './views/AdminView';
import SettingsView from './views/SettingsView';


function handleSocketError(err) {
  useStore.setState({ loadingStatus: "NotConnected" })
}

function App() {

  socket.on('connect_error', err => handleSocketError(err))
  socket.on('connect_failed', err => handleSocketError(err))
  socket.on('disconnect', err => handleSocketError(err))

  socket.on('connection', (res) => {
    useStore.setState({ teamData: res.data, config: res.config });
  })

  socket.on('data-update', (res) => {
    useStore.setState({ teamData: res.data, config: res.config });
  })

  socket.on('loading-update', (res) => {
    useStore.setState({ loadingStatus: res.status })
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsView />} />
          <Route path="/scouting" element={<ScoutingView />} />
          <Route path="/scouting/scoutforms/:id" element={<ScoutFormComponent />} />
          <Route path="/matches" element={<MatchesView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/settings/:id" element={<SettingsView />} />
        </Routes>
      </BrowserRouter>
    </>
  )



}

export default App;
