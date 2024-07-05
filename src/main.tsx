import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form'
import PostTable from './components/PostTable'
import DepartmentList from './components/DepartmentList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/posts" element={<PostTable/>} />
        <Route path="/departments" element={<DepartmentList/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
