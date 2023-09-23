import styles from './styles/Home.module.css'
import LinkButton from '../formulario/layouts/LinkButton'
import { AuthProvider } from '../Login/contexts/auth'
import Sign from '../Login/Signin/Sign'

function Home(params) {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao banco <span>Clover</span></h1>
            <p>Comece a gerenciar as suas contas agora mesmo!</p>
            <AuthProvider>
            <LinkButton to="/Sign " text="Entrar"/>
            </AuthProvider>
           
          
        </section>
    )
}

export default Home