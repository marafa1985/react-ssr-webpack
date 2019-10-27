import styled from "styled-components";

export default styled.p`
font-size: .9em;
color: #777;
text-overflow: ellipsis;
width: 80vw;
white-space: ${(props=>props.theme && props.theme.fulltext?'none':'nowrap')};
overflow: hidden;
`