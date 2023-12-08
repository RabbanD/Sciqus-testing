import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Register from '../pages/Register'
import StudentsList from '../pages/StudentsList'
import Editstudent from '../pages/Editstudent'
import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/studentslist" element={<StudentsList/>} />
    <Route path="/editstudent" element={<Editstudent/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    
  </Routes>
}

export default Routers