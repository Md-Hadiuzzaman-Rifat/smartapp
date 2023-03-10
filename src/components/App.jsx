import '../style/global.scss'
import './App.css'
import Experties from './Experties/Experties'
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Work from "./Work/Work"

function App() {
  return (
     <div className='bg-primary'>
        <Header></Header>
        <Hero></Hero>
        <Experties></Experties>
        <Work></Work>
     </div>
  )
}

export default App
 