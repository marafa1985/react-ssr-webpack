import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
const theme = {
    primary: '#657189',
    secondary: '#e5f0fa',
    cardborder: '#dae4ee'
}
const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f5f6fc;
      padding:20px;
  `;

const ThemeContext: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme} >
            <Container>
                {
                    props.children
                }
            </Container>
        </ThemeProvider>
    )
}

export default ThemeContext;
