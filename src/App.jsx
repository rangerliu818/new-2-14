import { useState, useEffect } from 'react'
import { Loading } from './comp/loading'
import reactLogo from './assets/react.svg'
import { useRoutes } from "react-router-dom";
import { routes } from './route';
import './App.css'

function App() {
  const view = useRoutes(routes);
  return (
    <div className="App w-screen h-screen bg-fuchsia-100">
      {view}
    </div>
  )
}

export default App