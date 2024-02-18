import styled from 'styled-components'

export const footer = styled.footer`
    max-width: 1044px;
    padding-bottom: 40px;
`

export const pagination = styled.span`
    display: inline-block;
    cursor: pointer;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;

    &.active {
        background-color: #4caf50;
        color: white;
    }

    &:hover {
        background-color: #ddd;
    }
`
