import SideNav from "./Containers/SideNav/SideNav"
import "./App.scss"
import Main from "./Containers/Main/Main"
const App = () => {



  return (
    <div>
      <h1 className="punk__title">Types of beers</h1>
      <SideNav/>
      <Main/>
      
     
    </div>
  )
}

export default App
