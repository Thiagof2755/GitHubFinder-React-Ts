import { Outlet, Link } from 'react-router-dom';
import Style from "./App.module.scss";

function App() {
  return (
    <div className={Style.AppContainer}>
      <h1 className={Style.Header}>
        <Link className={Style.UserLink} to="/">GitHub Finder</Link>
      </h1>
      <Outlet/>
    </div>
  )
}

export default App;
