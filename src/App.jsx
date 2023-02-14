import { useState, useEffect } from 'react'
import { Loading } from './comp/loading'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [flag2, setFlag2] = useState(false)
  const [flag, setFlag] = useState(false)
  const [openflag, setOpenflag] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setOpenflag(false)
    },2000)
})

  return (
    <div className="App w-screen h-screen bg-fuchsia-100">
      {openflag?
        <Loading />:
        <div className='w-screen h-screen flex flex-col items-center justify-around flex-nowrap'>
            <button onClick={()=>{setFlag2(true)}} className="btn">点我一下</button>
            {flag2&& <button onClick={()=>{setFlag(true)}} className="btn">再点一下嘛</button> }
            {flag&&
              <div className='mt-1'>
                <p className='text-slate-700'>情人节快乐!!</p>
              </div>
            }
        </div>
      }
    </div>
  )
}

export default App