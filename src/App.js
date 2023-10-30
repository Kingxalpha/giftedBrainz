import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/LandingPage/Landing'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Dashboard/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Landing/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/sidebar' element={<Sidebar/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
