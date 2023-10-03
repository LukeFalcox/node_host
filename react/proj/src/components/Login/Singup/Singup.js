import React, { useState } from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  var resultado = useState('');

  const { signup } = useAuth();

  const handleSignup = async (e) => {

    e.preventDefault();
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } 
    
    else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }


    try {
      const response = await axios.post('http://localhost:3001/Signup', { email: email.toString(), senha: senha.toString() });
      resultado = response.data;

    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }

    if (resultado != "Conta Cadastrada") {
      setError(resultado);
      return;
    }
    else{
      alert("Usuário cadatrado com sucesso!");
      navigate("/Inicio");
    }

 
    
    
  };

  return (
    <C.Container>
      <C.Label>Cadastro</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]} required
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]} required
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]} required
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;