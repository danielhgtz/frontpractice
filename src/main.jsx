import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
// import { store } from './store/store.js';
// import {Provider} from 'react-redux'

const OtroComponente = () => {
return (
  <div>
    <h1>Hola</h1>
    <p>Soy otro</p>
  </div>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/otro' element={<OtroComponente/>} />

    </Routes>
  </BrowserRouter>
  // </Provider>,
)
