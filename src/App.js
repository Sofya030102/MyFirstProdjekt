import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music/music';
import Setings from './components/Setings/setings';
import News from './components/News/news';

const App = () => {


  return (
    <BrowserRouter>
      <div className='App_grid'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path ='/dialogs/*' element ={<Dialogs />}/>
          <Route path ='/profile' element ={<Profile/>}/>
          <Route path ='/music' element ={<Music/>}/>
          <Route path ='/news' element ={<News/>}/>
          <Route path ='/setings' element ={<Setings/>}/>

          </Routes>
          


        </div>
        
      </div>
    </BrowserRouter>
  );
}





export default App;

