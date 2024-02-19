import styled from 'styled-components'

export const wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    max-width: 1178px;
    margin: 0 auto;
    padding: 30px 10px 30px 10px;
`

export const title = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 24px;
    padding-bottom: 20px;
`

export const form = styled.form`
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`
export const input = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;

    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`

export const main = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1044px;
    padding-bottom: 50px;
`

export const menu = styled.div`
    display: flex;
    justify-content: space-between;
`

export const span = styled.span`
    font-size: 18px;
    line-height: 24px;
`
