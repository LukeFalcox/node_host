import {FaFacebookF,FaInstagramSquare,FaGithub} from 'react-icons/fa'

import styles from './styles/Footer.module.css'

function Footer(params) {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                <FaFacebookF/>
                </li>
                <li>
                <FaInstagramSquare/>
                </li>
                <li>
                <FaGithub/>
                </li>
            </ul>
            <p className={styles.copy_rigth}>
            <span>Clover</span> 
            &copy; 2023</p>
        </footer>
    )
}
export default Footer