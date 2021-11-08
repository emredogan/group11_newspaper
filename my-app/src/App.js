import React, { useState } from 'react'
import Header from './Components/Header';
import MyButton from './Components/MyButton';
import EditorCards from './Components/EditorCards'
import JournalistCards from './Components/JournalistCards'
import 'typeface-roboto';
import Navigation from './Components/Navigation';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Route, Swicth } from 'react-router-dom';


function App() {
  return (
    <div>
  <EditorCards/>
  <JournalistCards/>
  </div>
  );
}

export default App;
