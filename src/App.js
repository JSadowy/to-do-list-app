import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>

    </div>
  )
};

export default App;
