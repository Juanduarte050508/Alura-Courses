
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 35px;
`
const LogoImg = styled.img`
    height: 70px;       
    width: auto;         
    margin: 20px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='Logo'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo