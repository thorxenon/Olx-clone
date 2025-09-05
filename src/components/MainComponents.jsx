import styled from 'styled-components';

export const Template = styled.div`

`; 

export const PageContainer = styled.div`
    max-width:1000px;
    margin:0 auto;
    padding:0 2%;

    h1{
        margin:20px 0;
    }
`;

export const PageTitle = styled.h1`
    font-size:27px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    margin:10px 0;
    background-color:#ffcaca;
    color:#000;
    border:2px solid #ff0000;
    padding:10px;
`;