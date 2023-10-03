import React,{ useState } from 'react';
import  Input  from '../Input/index';
import  Button  from '../Button/index';
import {Link,useNavigate} from "react-router-dom"
import * as C from "./styles"
import axios from 'axios';

function Sign() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error,setError] = useState("");
  var resultado = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/verificar-conta', { email: email.toString(), senha: senha.toString() });
      resultado = response.data;
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }

    if (resultado === "A conta existe.") {
        navigate(`/Inicio/`, {state: {email}});
      }
      else {
        setError("Email ou senha incorretos")
      }
    
  };

    return (
      <C.Container>
            <C.Label>LOGIN</C.Label>
            <C.Content>
                <Input
                type="text"
                placeholder ="Digite o seu email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]} required
                />
                <Input
                type="password"
                placeholder ="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]} required
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Entrar" onClick={handleLogin}/>
                <C.LabelSingup>
                    Nao tem uma Conta?
                    <C.Strong>
                        <Link to="/Entrar">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSingup>
            </C.Content>
        </C.Container>
     )
    
}
export default Sign
