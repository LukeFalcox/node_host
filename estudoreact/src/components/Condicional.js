import { useState } from 'react';
function Condicional(){

const [email, setEmail] = useState()
const [userEmail,setUserEmail] = useState()
const [senha, setSenha] = useState()
function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
}
function enviarSenha(a) {
    a.preventDefault()
    console.log(senha)
}
return(
    <div>
        <h2>Cadastre o seu e-mail</h2>
        <form>
            <input type = "email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)}>

            </input>
            <button onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                //Isso daqui é o if
                <div>
                    <p>O e-mail do usuario é: {userEmail}</p>
                    <input type = "password" placeholder="Digite o sua senha..." onChange={(a) => setSenha(a.target.value)}></input>
                    <button onClick={enviarSenha} >Enviar senha</button>
                </div>
            )} 
        </form>
    </div>
)

}

export default Condicional