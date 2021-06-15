import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video className='videoTag' autoPlay muted controls loop>
        <source src='https://lolg-documents.s3.us-west-1.amazonaws.com/yasuo.mp4' type='video/mp4' />
      </video>
      </header>
    </div>
  );
}

export default App;
