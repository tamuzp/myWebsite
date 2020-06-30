import styled, { css } from 'styled-components'

import Container from './Container'

const Section = styled.section`
    ${props => props.centered && css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-grow: 1;
    `}

    ${Container} {
        position: relative;
        z-index: 2;
    }
`

export default Section