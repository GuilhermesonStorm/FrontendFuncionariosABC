import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 35px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 20px;
    margin-left: 600px;
`;

export const Backbox = styled.div`
    padding-right: 20px;
    padding-left: 20px;
    padding: 30px;
    margin-top: 30px;
    background-color: #fff;
    opacity: 0.9;
    border: solid #000000;
    border-radius: 5px 5px 5px 5px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 800px;
    display: flex;
    border-style: solid;
    border-color: #000000;
    border-width: 1px;
    border-radius: 5px;

    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;

        ${props =>
            props.hasError &&
            css`
                border-color: #ff0000;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 150px;
        height: 40px;
        background: #04d361;
        border: 0px;
        border-radius: 0px 5px 5px 0px;
        color: #3a3a3a;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#00bfff')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 800px;

    a {
        background: #fff;
        border-style: solid;
        border-radius: 5px;
        border-color: #00bfff;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: 0.2s;

        img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
        }

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin-left: 16px;
            color: #d3d3d3;
            strong {
                font-size: 15px;
                color: #3a3a3a;
            }

            p {
                font-size: 12px;
                color: #3d3d4d;
                margin-top: 4px;
            }
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;
