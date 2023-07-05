import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const cityInfo = {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    imageUrl: 'https://example.com/rio.jpg',
    visited: true,
  };
  

  return <div>
    <Header/>
    <Card cityInfo={cityInfo} />
  </div>
  
}

export default App
