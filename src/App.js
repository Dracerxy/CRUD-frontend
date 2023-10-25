
import './App.css';
import Nav from "./components/Nav"
import { HashRouter,Routes,Route } from 'react-router-dom';
import Createstudent from './components/Createstudent';
import Studentlist from './components/Studentlist';
import EditStudent from './components/Editstudent';
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Createstudent/>}/>
          <Route path="/create-student" element={<Createstudent/>}/>
          <Route path="/student-list" element={<Studentlist/>}/>
          <Route path="/edit-student/:id" element={<EditStudent/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
