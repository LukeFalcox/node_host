import React,{ useState } from 'react';
import  Input  from '../Input/index';
import  Button  from '../Button/index';
import {Link,useNavigate} from "react-router-dom"
import userAuth from "../hooks/userAuth"
import * as C from "./styles"
const Sign = () =>{
    const {signin} = userAuth();
    const navigate = useNavigate();

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [error,setError] = useState("")

    const handleLogin = () => {
        if (!email | !senha) {
          setError("Preencha todos os campos");
          return;
        }
    
        const res = signin(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        navigate("/home");
      };
    return (
        <C.Container>
            <C.Label>LOGIN</C.Label>
            <C.Content>
                <Input
                type="email"
                placeholder ="Digite seu email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                type="password"
                placeholder ="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
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