import styles from './styles/NovoProjeto.module.css'

import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm' 

function NovoProjeto(params) {

    const navigate = useNavigate()//Função usada para redirecionar a pagina

    function createPost(project) {
        //Aqui é criado um methodo onde os serviços serao guardados e encaminhados
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify(project),
        })
        .then((resp) => resp.json())  
        .then((data) => {
            console.log(data)
            navigate('/Projects', {state:{text: 'Projeto criado com sucesso'}})//aqui ira mandar o arquivo para o projects e adicionara um valor em
        })
        .catch(err => console.log(err))
    }


    return(
        <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <p>formulario</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div> //tudo certo
        
    ) 
}

export default NovoProjeto