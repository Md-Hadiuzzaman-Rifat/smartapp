import '../style/global.scss'
import classes from './App.module.scss'
import Experties from './Experties/Experties'
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Hero from "./hero/Hero"
// import People from "./People/People"
import Portfolio from "./Portfolio/Portfolio"
import Work from "./Work/Work"
function App() {
  return (
     <div className={`${classes.container} bg-primary`}>
        <Header></Header> 
        <Hero></Hero>
        <Experties></Experties>
        <Work></Work>
        <Portfolio></Portfolio>
        {/* <People></People> */}
        <Footer></Footer>
     </div>
  )
}

export default App
 