import styled from "styled-components";

export default styled.div`
div{
    margin-top: 14px;
    background-color: #fff;
    border: 1px solid #D0D0D0;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    a{
        color: #217fb6;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1em;
        margin-right:15px;
        &:hover{
            color: #155275;
            text-decoration: underline;
        }
    }
    h1{
        font-family:sans-serif;
        font-size: 1.7em;
        font-weight: 700;
        display: flex;
        color: #20bf6b;
    }
    button{
            color: #fff;
            background: #3794ce;
            border-color: #2e86bd;
            padding: 7px 30px;
            width: 250px;
            border: 1px solid transparent;
            box-shadow: 0 -2px rgba(0,0,0,.2) inset;
            font-weight: 400;
            font-size:14px;
            cursor: pointer;
            &:hover{
                        color: #fff;
                        background-color: #2978a9;
                        border-color: #22638c;
                    } 
            }
    .descTitle{
        color: #3c3c3c;
        font-size: 1.2em;
        font-weight: 700;
        margin: 0 0 10px;
        border: none;
        border-bottom: 1px solid #D0D0D0;
    }
    @media (max-width: 760px) {
        div{
            padding: 20px 10px;
        }
        h1{
                justify-content: center !important;
            }
            button{
                width:100%;
                text-align:center;
            }
           .descTitle{
            text-align:center;
           }
    }
}
`