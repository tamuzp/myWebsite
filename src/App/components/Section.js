import styled, { css } from 'styled-components'

import Container from './Container'

const Section = styled.section`
    @media (max-width:480px){
        margin-top: 70px;
    }
    ${props => props.centered && css`
        // position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-grow: 1;
//         top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
    `}

    ${Container} {
        position: relative;
        z-index: 2;
    }
`

export default Section