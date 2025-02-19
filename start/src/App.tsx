
import Component from './components/Component'

import './App.css'
import Props from './components/Props'
import Destructing from './components/Destructing'

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
      <Props name='VT' />
      <Destructing title='A Volta de Quem Não Foram' duration={45} tags={['Ola', 'rapaz', 'jsjhg']} comentsqnt={3} />
    </>
  )
}

export default App
