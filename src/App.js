import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDetails from './StudentDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Layout from './pages/Layout';


function App() {
  const studentId = 2007;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/student/:id" element={<StudentDetails studentId={studentId} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
