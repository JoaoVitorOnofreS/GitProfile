import styled from "styled-components";

export const Section = styled.section`
    width: 600px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    border-bottom: 10px solid #8e05c2;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: black;
    width: 100%;
    text-align: center;
    height: 30px;
`;

export const ListOfReposContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`;

export const Repo = styled.h2`
    width: 100%;
    height: 80px;
    background-image: linear-gradient(rgb(62, 6, 95), rgb(142, 5, 194));

    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: white;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: white;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 5 px;
        width: 100%;
        height: 30px;
        color: white;
    }
`;
