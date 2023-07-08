import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import List from './pages/List';
import Hotel from './pages/Hotel';
import Previousbooking from './pages/Previousbooking';
import Meal from './pages/Meal';
import Login from './pages/Login';
import Register from './pages/Register';
import Flite from './pages/Flite';

function App() {
  
  return (
    
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/previous" element={<Previousbooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/flite" element={<Flite/>}/>

       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
