import styled from 'styled-components'

export const modal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    z-index: 1;
    opacity: ${(props) => (props.$active ? '1' : '0')};
    visibility: ${(props) => (props.$active ? 'visible' : 'hidden')};
    pointer-events: ${(props) => props.$active && 'all'};
`
export const content = styled.div`
    padding: 20px 50px;
    border-radius: 12px;
    background-color: #ffffff;
    transition: 0.4s all;
    transform: ${(props) => (props.$active ? 'scale(1)' : ' scale(0.5)')};
    display: flex;
    align-items: center;
    column-gap: 20px;
`

export const avatar = styled.img`
    width: 300px;
    height: 300px;
`
export const infoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const name = styled.h2`
    font-size: 18px;
`
export const info = styled.p`
    font-size: 16px;
`
