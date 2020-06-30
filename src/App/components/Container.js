import styled from 'styled-components'

const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    

    /* Tablets */
    @media (min-width: 576px) {
        width: 100%;
        max-width: 540px;
    }

    /* Small desktops */
    @media (min-width: 768px) {
        width: 100%;
        max-width: 720px;
    }

    /* Medeum desktops */
    @media (min-width: 992px) {
        width: 100%;
        max-width: 960px;
    }

    /* Large desktops & HD */
    @media (min-width: 1200px) {
        width: 100%;
        max-width: 1140px;
    }
`

export default Container