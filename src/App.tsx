import { BrowserRouter, Route } from 'react-router-dom'

import {Home} from './pages/Home'
import {Auth} from './pages/Auth'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/globals.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/auth' component={Auth}></Route>
    </BrowserRouter>
  );
}

export default App;
