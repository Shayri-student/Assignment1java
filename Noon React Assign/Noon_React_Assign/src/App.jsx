import React from 'react'
import "./App.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar_Component from './Components/NavBar_Component';
import { Hero_Section_Component } from './Components/Hero_Section_Component';

const App = () => {
  return (
    <div>
      <NavBar_Component/>
      <Hero_Section_Component/>
    </div>
  )
}
export default App;
