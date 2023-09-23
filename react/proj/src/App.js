
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Empresa from './components/pages/Empresa'
import NovoProjeto from './components/pages/NovoProjeto'
import Projects from './components/pages/Projects'

import Container  from './components/formulario/layouts/Container'
import NavBar from './components/formulario/layouts/Navbar'
import Footer from './components/formulario/layouts/Footer'

import Sign from "./components/Login/Signin/Sign"
import Singup from "./components/Login/Singup/Singup"
import userAuth from "./components/Login/hooks/userAuth";


const Private = ({ Item }) => {
  const { signed } = userAuth();

  return signed > 0 ? <Item /> : <Sign />;
};

function App() {
  return (
    <BrowserRouter>
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
    <Route path="/" element={<Private Item={<Home/>}/>}>
    </Route> 
    <Route path="/Sign.js" element={<Sign/>}> 
    </Route> 
    <Route path="/Singup.js" element={<Singup/>}>
    </Route>  
    <Route path="*" element={<Sign/>}>
    </Route>  
</Routes>
</Container>
<Footer/>
</BrowserRouter>
  );
  
}

export default App;

