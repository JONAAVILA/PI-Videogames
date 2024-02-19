import './App.css';
import { allVideogamesApi } from './redux/Actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state.allGamesApi)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(allVideogamesApi())
  },[])

  console.log(state)

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <button>Go home</button>
    </div>
  );
}

export default App;
