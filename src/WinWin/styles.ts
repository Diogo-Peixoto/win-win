import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(223 221 221 / 23%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const InputBox = styled.div`
    display: flex;
    gap: 20px;

    input{
        width: 120px;
        background-color: white;
    }

    p{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
    }

`

export const SectionCapture = styled.div<{ status: "neutro" | "positivo" | "negativo" }>`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-sizing: border-box;

    border: solid 1px ${({ status }) => status === "neutro" ? "#d5d5d5" : status === "positivo" ? "rgb(5 173 11)" : "rgb(249 13 13)"};
    background-color: white;
    border-radius: 6px;

    padding: 20px;

    h3{
        margin: 0;
        text-align: center;
    }

    p{
        color: ${({ status }) => status === "neutro" ? "black" : status === "positivo" ? "rgb(5 173 11)" : "rgb(249 13 13)"};
    }
`

export const List = styled.ul`
overflow-y: auto;
    width: 500px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    list-style: none;

    border: solid 1px #d5d5d5;
    border-radius: 6px;

    padding-bottom: 10px;
    text-align: center;

    li{
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-inline: 20px;
    }

    li:nth-child(1n){
        background-color: #e5e5e5;
    }

    li:nth-child(2n){
        background-color: white;
    }

    li:first-child{
        background-color: #000;
        color: white;

        padding-block: 10px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`

export const ListAuto = styled.ul`
    overflow-y: auto;
    width: 500px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    list-style: none;

    border: solid 1px #d5d5d5;
    border-radius: 6px;

    padding-bottom: 10px;
    text-align: center;

    li{
        box-sizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-inline: 20px;

    }

    li:nth-child(1n){
        background-color: #e5e5e5;
    }

    li:nth-child(2n){
        background-color: white;
    }

    li:first-child{
        background-color: #000;
        color: white;

        padding-block: 10px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`