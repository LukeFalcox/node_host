import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Trasnferencia.module.css'
function Transferencia() {
    
    const [conta, setConta] = useState('');
    const [conta2, setConta2] = useState('');
    const [senha, setSenha] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post('http://localhost:3001/transferir', { conta, conta2, valor, senha });
        } catch (error) {
        console.error('Erro ao enviar a solicitação:', error);
        }

    }

    return (
        <section className="transfer">
            <div className="form-box">
                <div className="form-value">
                    <form id="register-form" onSubmit={handleSubmit}>
                        <h2>Realize uma transferência</h2>
                        <div className="inputbox">
                            <input type="text" id="conta" placeholder="Digite aqui o número da sua conta" value={conta} onChange={(e) => setConta(e.target.value)} required />
                        </div>
                        <div className="inputbox">
                            <input type="text" id="conta2" placeholder="Digite aqui o número da conta a ser transferida" value={conta2} onChange={(e) => setConta2(e.target.value)} required />
                        </div>
                        <div className="inputbox">
                            <input type="number" id="valor" placeholder="Digite aqui o valor a ser transferido" value={valor} step="0.01" pattern="^\d+(\.\d{1,2})?$" onChange={(e) => setValor(e.target.value)} required />
                        </div>
                        <div className="inputbox">
                            <input type="password" id="senha" placeholder="Digite aqui sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </div>
                        <button type="submit" id="envio">Tranferir</button>
                    </form>
                </div>
            </div>
            
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        
        </section>
      );

}

export default Transferencia