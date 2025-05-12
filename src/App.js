import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SingUpPage from './pages/SingUpPage';
import Login from './pages/Oauth';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/create' element={<SingUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/oauth' element={<Login/>}/>
      </Routes>
    </div>
  );
}


export default App;
