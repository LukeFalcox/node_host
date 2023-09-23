import {Link} from 'react-router-dom'
import Header from "../../Side/Header/index";
import Container from './Container'

import style from './styles/Navbar.module.css'
import logo from '../../../img/loading.svg'


function NavBar(params) {
    return(
        <nav className={style.navbar}>
            <Header/>
        </nav>
    )
}

export default NavBar


{/* <Container>
<Link to="/">
    <img src={logo} alt='Clover'/>
</Link>
<ul className={style.list}>
    <li className={style.item}>
    <Link to='/'>Home</Link>
    </li>

    <li className={style.item}>
        <Link to='/Contact'>Contato</Link>
    </li>

    <li className={style.item}>
        <Link to='/Empresa'>Empresa</Link> 
    </li>
</ul>
</Container> */}