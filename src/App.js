import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SingUpPage from './pages/SingUpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='create' element={<SingUpPage/>}/>
      </Routes>
    </div>
  );
}


export default App;
