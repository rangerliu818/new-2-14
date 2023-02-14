import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  return (
    <div className="App">
        <button onClick={()=>{setFlag(true)}} className="btn">点我一下</button>
        {flag&&
          <div>
            <p>情人节快乐</p>
          </div>
        }
    </div>
  )
}

export default App
