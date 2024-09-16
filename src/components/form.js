import { useState } from 'react';
import './form.css';

export default function Form() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');

    function cadastrarUsuario(pegarInfo) {
        pegarInfo.preventDefault();
        console.log(`Usuário: ${nome} senha: ${senha}`);
        setUsuario(`Usuário: ${nome} senha: ${senha}`);
    }

    return (
        <div id='caixa'>
            <h1>Login</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite o Nome"
                        value={nome}
                        onChange={(pegarInfo) => setNome(pegarInfo.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(pegarInfo) => setSenha(pegarInfo.target.value)}
                    />
                </div>
                <div>
                    <input id='btn' type="submit" value="Cadastrar" />
                </div>
            </form>
            {usuario && <h1>{usuario}</h1>}
        </div>
    );
}
