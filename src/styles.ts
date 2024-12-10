import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;
    background-color: #000;


    h3{
        margin: 0;
    }

    section{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & > div{
        display: flex;
        flex-direction: column;


    }

    ul{
        display: flex;
        flex-direction: column;

    }
    
    li{
        width: 100%;
        list-style: none;
    }

`

export const Box1 = styled.div`
    
        display: flex;
        gap: 20px;

        & > div{
            display: flex;
            flex-direction: column;
        }

    
`

export const Result = styled.div``