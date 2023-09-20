import styles from './styles/Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(params) {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao banco <span>Clover</span></h1>
            <p>Comece a gerenciar as suas contas agora mesmo!</p>
           <LinkButton to="/NovoProjeto" text="Entrar"/>
          
        </section>
    )
}

export default Home