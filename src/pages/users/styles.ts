import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 35px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 15px;
    margin-left: 600px;

    a {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #fff;
        transition: 0.2s;

        &:hover {
            color: #cc0000;
        }
    }
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
    strong {
        margin: 10px;
        font-size: 15px;
        color: #00bfff;
    }
    p {
        margin: 12px;
        font-size: 12px;
        color: #000000;
    }
`;

export const Subtitle = styled.h1`
    padding: 30px;
    text-align: center;
    font-size: 18px;
    color: #00bfff;
    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
`;

export const ButtonWrapper = styled.button`
    --size: 50px;
    width: var(--size);
    height: var(--size);
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 33px;
    background-color: #fff;
    border: 0;
    padding: 0;
    cursor: pointer;
    outline: 0;
    border-radius: 100%;

    .animation {
        pointer-events: none;
    }
`;
