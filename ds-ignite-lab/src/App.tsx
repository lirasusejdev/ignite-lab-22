import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'

export function App() {
  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hello World</h1>
      <button className="bg-cyan-500 font-medium px-4 py-3 rounded text-white hover:bg-violet-600">
        Enviar
      </button>
    </>
  )
}
