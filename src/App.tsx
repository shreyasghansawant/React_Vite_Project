import Form from './components/Form'
import PostTable from './components/PostTable'
import DepartmentList from './components/DepartmentList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/posts" element={<PostTable/>} />
        <Route path="/departments" element={<DepartmentList/>} />
      </Routes>
    </Router>
  )
}

export default App
