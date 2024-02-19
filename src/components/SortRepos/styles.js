import styled from 'styled-components'

export const filter = styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 51px;
    column-gap: 10px;
`
export const title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 10px;
    color: #ffffff;
`
export const filterBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`
export const button = styled.div`
    width: 140px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    color: #ffffff;

    &.active {
        background-color: #4caf50;
    }
`
export const menu = styled.div`
    position: absolute;
    top: 50px;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    background-color: rgba(161, 21, 207, 0.8);
    border-radius: 12px;
    padding: 20px 20px;
`

export const list = styled.ul`
    width: 180px;
    height: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-size: 18px;
    line-height: 24px;
`
export const item = styled.a`
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff;
        transition: color 0.3s ease;
    }
`
export const activeItem = styled.strong`
    color: #ffffff;
`
