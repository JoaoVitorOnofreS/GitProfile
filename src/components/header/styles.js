import styled from "styled-components";

export const HeaderSection = styled.header`
    width: 400px;
    height: 130px;
    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (max-width: 430px) {
        width: 300px;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #e5e5e5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        background: #ff7a00;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        transition: ease 0.3s;

        &:hover {
            transform: scale(1.05);
            transition: ease 0.3s;
            cursor: pointer;
        }
    }
`;

export const HeaderInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: 0.4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: 0.4s ease;
    }
`;

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #3e065f;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: ease 0.3s;

    &:hover {
        transform: scale(1.05);
        transition: ease 0.3s;
        cursor: pointer;
    }
`;
