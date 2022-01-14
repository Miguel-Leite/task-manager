import { BrowserRouter, Route } from 'react-router-dom'

import {Home} from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/globals.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
