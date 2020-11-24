import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import api from '../../services/api';
import { Title, Backbox, Subtitle, ButtonWrapper } from './styles';
import animationData from '../../assets/animation.json';

interface UserParams {
    id: string;
}

interface User {
    id: string;
    nome: string;
    funcao: string;
    departamento: string;
    email: string;
    telefone: string;
    curtidas: number;
    avatar: [
        {
            url: string;
        },
    ];
}

const Users: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLiked, setLikeState] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: true,
        isPaused: false,
        direction: -1,
    });

    const { params } = useRouteMatch<UserParams>();

    useEffect(() => {
        api.get(`/users/${params.id}`).then(response => {
            setUser(response.data);
            console.log(user);
        });
    }, [params.id]);

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <Title>Funcionários da empresa ABC.</Title>
            <Link to="/">Voltar</Link>

            <Backbox>
                <Subtitle>
                    <img src={user?.avatar[0].url} alt="Avatar funcionario" />
                    <br />
                    {user?.nome}
                </Subtitle>

                <p>{user?.funcao}</p>
                <p>Departamento: {user?.departamento}</p>
                <p>Email de contato: {user?.email}</p>
                <p>Telefone de contato: {user?.telefone}</p>
                <ButtonWrapper
                    onClick={() => {
                        const reverseAnimation = -1;
                        const normalAnimation = 1;

                        setAnimationState({
                            ...animationState,
                            isStopped: false,
                            direction:
                                animationState.direction === normalAnimation
                                    ? reverseAnimation
                                    : normalAnimation,
                        });
                        setLikeState(!isLiked);
                    }}
                >
                    <div className="animation">
                        <Lottie
                            options={defaultOptions}
                            width={200}
                            height={200}
                            direction={animationState.direction}
                            isStopped={animationState.isStopped}
                            isPaused={animationState.isPaused}
                        />
                    </div>
                </ButtonWrapper>
                <span>Curtidas: {isLiked ? 1 : user?.curtidas}</span>
            </Backbox>
        </>
    );
};

export default Users;
