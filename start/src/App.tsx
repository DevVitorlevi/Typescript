
import Component from './components/Component'
import './App.css'

function App() {

  const name: string = 'Vitor'
  const userName = (name: string): string => {
    return `Olá ${name}`
  }
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>{userName(name)}</h2>
      <Component />
    </>
  )
}

export default App
