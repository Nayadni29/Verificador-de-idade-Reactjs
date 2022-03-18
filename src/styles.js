import styled from 'styled-components';

export const Title = styled.h1`
    color: white;
    text-align: center;
    margin-top: #ccc;
    font-size: ${props => `${props.fontSize}px`};
`;

export const Signature = styled(Title)`
    color: white;
    text-align: center;
    font-style: italic;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 1;
`;

export const Container = styled.h1`
    background: white;
    width: 500px;
    margin: auto;
    overflow: auto;
    border: 2px solid white;
    padding: 15px;
    border-radius: 10px;
    font: normal 15pt Arial;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.301);

    input {
        margin-left: 10px;
    }

    button {
        display: flex;
        justify-content: center;
        margin: 20px auto;
        width: 120px;
        height: 30px;
        align-items: center;
        transition: 0.3s;
    }
`;