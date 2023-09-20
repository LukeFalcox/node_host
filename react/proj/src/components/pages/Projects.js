import Message from "../layouts/Message"

import{useLocation} from 'react-router-dom'

import styles from './styles/Projects.module.css'
function Projects(params) {
    
    const location = useLocation()// esse hook resgata um valor que é a mensagem la do novo projeto
    let text = ''
    if(location.state){
        text = location.state.text
    } 


    return(
        <div>
            <div>
                <h1>Meus Projetos</h1>
                <a></a>
            </div>
            {text && <Message type="success" msg={text}/>}
        </div>

    )
}

export default Projects