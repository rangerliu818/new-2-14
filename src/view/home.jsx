import { useState, useEffect } from 'react'
import { Loading } from '../comp/loading'

import '../App.css'

function Home() {
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
        <div className='w-screen h-screen flex flex-col items-center  justify-center flex-nowrap relative'>
            {!flag2?<button onClick={()=>{setFlag2(true)}} className="btn">点我一下</button>: <button onClick={()=>{setFlag(true)}} className="btn">再点一下嘛</button> }
            {flag&&
              <div className='mt-12'>
                <p className='text-slate-600 text-5xl font-bold'>情人节快乐!!</p>
              </div>
            }
            {flag&&
              <div className='absolute  bottom-4 right-4'>
                <p className='text-slate-600  font-bold'>ps：来自多拉小同志的专属祝福哦</p>
              </div>
            }
        </div>
      }
    </div>
  )
}

export default Home