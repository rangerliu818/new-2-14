import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  return (
    <div className="App w-screen h-screen bg-fuchsia-100">
      <div className='w-screen h-screen flex flex-col items-center justify-center flex-nowrap'>
          <button onClick={()=>{setFlag(true)}} className="btn">点我一下</button>
          {flag&&
            <div className='mt-1'>
              <p>情人节快乐</p>
            </div>
          }
      </div>
    </div>
  )
}

export default App