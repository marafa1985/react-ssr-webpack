import styled from "styled-components";

export default styled.ul`
list-style: none;
padding: 10px;
background: #fff;
li{
    /* margin: 15px; */
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    &:nth-child(1){
    border-bottom:none;
}
}
`