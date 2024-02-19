import { Outlet } from 'react-router-dom';
import Style from "./App.module.scss" ;

function App() {
  return (
    <div className={Style.AppContainer}>
    <h1 >GitHub Finder </h1>
    <Outlet/>
    </div>
  )
}

export default App
