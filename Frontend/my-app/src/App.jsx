import React from 'react'
import NavbarAuthComponent from "./component/auth/NavbarAuthComponent";
import LogInAuthComponent from "./component/auth/LogInAuthComponent";
import CreateAuthComponent from "./component/auth/CreateAuthComponent";
import Admin from './component/auth/Admin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <div>
        <BrowserRouter>
        <NavbarAuthComponent/>
          <Routes>
            <Route path='/' element={<LogInAuthComponent />}></Route>
            <Route path='/create' element={<CreateAuthComponent />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;