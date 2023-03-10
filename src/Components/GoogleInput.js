import styled from "styled-components"

export const GoogleInput = styled.div`
    display:flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 20px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 65vw;
    max-width:560px;
    margin:0 auto;
    margin-top: 20px;

    &:hover{
        -webkit-box-shadow: 0px 2px 4px 3px rgba(232, 232, 232, 0.7);
        box-shadow: 2px 2px 4px 3px rgba(232, 232, 232, 0.7);
    }

    & > .searchIcon{
        color: gray;
    }

    & > input {
        flex: 1;
        padding: 1vw;
        font-size: medium;
        border: none;

    }

    & >input:focus{
        outline-width:0;
    }
    

`