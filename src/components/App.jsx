import '../style/global.scss'
import Experties from './Experties/Experties'
// import Header from "./Header/Header"
import classes from './App.module.scss'
import Hero from "./Hero/Hero"
import Optional from "./optional/Optional"
import Work from "./Work/Work"
function App() {
  return (
     <div className={`${classes.container} bg-primary`}>
      <Optional></Optional>
        {/* <Header></Header> */}
        <Hero></Hero>
        <Experties></Experties>
        <Work></Work>
        {/* <Portfolio></Portfolio> */}
     </div>
  )
}

export default App
 