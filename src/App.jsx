import { useState } from 'react'
import { ShowHelloWorld } from './components/ShowHelloWorld.jsx'
import { BasicLogin } from './components/BasicLogin.jsx'
function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <BasicLogin/>
      </div>
    </>
  )
}

export default App
