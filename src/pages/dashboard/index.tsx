import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Form, Repositories, Backbox, Error } from './styles';

interface User {
    id: number;
    nome: string;
    funcao: string;
    avatar: [
        {
            url: string;
        },
    ];
}

const Dashboard: React.FC = () => {
    const [newUser, setNewUser] = useState('');
    const [inputError, setInputError] = useState('');
    const [users, setUsers] = useState<User[]>(() => {
        const storagedUser = localStorage.getItem('@Users:Funcionarios');
        if (storagedUser) {
            return JSON.parse(storagedUser);
        } else {
            return [];
        }
    });

    useEffect(() => {
        const s = localStorage.getItem('@Users:Funcionarios');
        if (s) {
            setUsers(JSON.parse(s));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('@Users:Funcionarios', JSON.stringify(users));
    }, [users]);

    async function handleAddUser(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        if (!newUser) {
            setInputError('Digite o ID do funcionário...');
            return;
        }
        try {
            const response = await api.get<User>(`/users/${newUser}`);
            const user = response.data;
            setUsers([...users, user]);
            setNewUser('');
            setInputError('');
        } catch (erro) {
            setInputError('Usuário não encontrado. :(');
        }
    }

    return (
        <>
            <Title>Funcionários da Empresa ABC</Title>
            <Backbox>
                <Form hasError={!!inputError} onSubmit={handleAddUser}>
                    <input
                        value={newUser}
                        onChange={event => setNewUser(event.target.value)}
                        placeholder="Digite o ID do funcionário..."
                    />
                    <button type="submit">Pesquisar</button>
                </Form>

                {inputError && <Error>{inputError}</Error>}
                <Repositories>
                    {users.map(user => (
                        <Link key={user.id} to={`/users/${user.id}`}>
                            <div>
                                <img src={user.avatar[0].url} alt={user.nome} />
                                <strong>{user.nome}</strong>
                                <p>{user.funcao}</p>
                            </div>
                        </Link>
                    ))}
                </Repositories>
            </Backbox>
        </>
    );
};

export default Dashboard;
