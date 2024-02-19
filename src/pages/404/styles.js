import styled from 'styled-components'

export const header = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const title = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 24px;
    padding: 40px;
`

export const btn = styled.button`
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 13px 36px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.3s;

    &:hover {
        background-color: #4caf50;
    }
    &:active {
        background-color: #4caf50;
    }
`
