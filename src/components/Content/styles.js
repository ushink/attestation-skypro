import styled from 'styled-components'

export const ul = styled.ul`
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 20px;
`

export const li = styled.li`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    text-align: center;
    width: calc(100% / 5 - 80px);
`

export const avatar = styled.img`
    max-width: 100%;
    margin-bottom: 10px;
    border-radius: 50%;

    &:hover {
        box-shadow:
            2px 2px 7px 2px rgba(130, 130, 130, 0.7),
            -2px -2px 7px 2px rgba(130, 130, 130, 1);
    }
`
export const span = styled.span`
    font-size: 18px;
    line-height: 24px;
`
