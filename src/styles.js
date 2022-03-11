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