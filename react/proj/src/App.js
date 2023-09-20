
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Empresa from './components/pages/Empresa'
import NovoProjeto from './components/pages/NovoProjeto'
import Projects from './components/pages/Projects'

import Container  from './components/layouts/Container'
import NavBar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'


function App() {
  return (
    <Router>
  <ul>
  <NavBar/>
  </ul>
  <Container customClass="alturaMin">
<Routes>
    <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/Empresa' element={<Empresa/>}>
      </Route>
      <Route path='/Contact'element={<Contact/>}>
      </Route>
      <Route path='/NovoProjeto' element={<NovoProjeto/>}>
    </Route> 
      <Route path='/Projects' element={<Projects/>}>
    </Route> 
</Routes>
</Container>
<Footer/>
</Router>
  );
  
}

export default App;
