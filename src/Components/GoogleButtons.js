import styled from "styled-components";

export const GoogleButtons = styled.button`
    margin: 4px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    color: #5f6368;

    &:hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        background-image: webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
        color:#222;
    }

    &:focus{
        outline: 0;
        border: 1px solid #59bfff;
    }
`