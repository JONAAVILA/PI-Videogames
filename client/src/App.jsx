import './App.css';
import { Routes, Route } from 'react-router-dom'
import { allVideogamesApi } from './redux/Actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Landing from './views/Landing';
import Nav from './components/Nav';
import Home from './views/Home';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(allVideogamesApi())
  },[dispatch])

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/*' element={
            <>
             <Nav/>
             <Routes>
                <Route path='/home' element={<Home/>} />
             </Routes>
            </>
          } />
        </Routes>
    </div>
  );
}

export default App;
