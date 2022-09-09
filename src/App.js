// import './App.css';
import Dashboard from './Page/Dashboard';
import Register from './Page/Dashboard/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Page/Dashboard/Login';


function App() {
  return (
    <div>
    
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/' element={<Register/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
        </Routes>
      </Router>
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
