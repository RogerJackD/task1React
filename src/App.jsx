import { useState } from 'react'
import { ShowHelloWorld } from './components/ShowHelloWorld.jsx'
import { BasicLogin } from './components/BasicLogin.jsx'
import { CitaForm } from './components/CitaForm.jsx'
import { CitaFormDoctor } from './components/CitaFormDoctor.jsx'



function App() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 min-h-screen min-w-screen'>
          <div className='m-4'>
            <CitaForm/>
          </div>
          
          <div className='m-4'>
            <CitaFormDoctor/>
          </div>

          <div className='m-4'>
            <BasicLogin/>
          </div>
      </div>
    </>
  )
}

export default App
