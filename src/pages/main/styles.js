import styled from 'styled-components'

export const wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(135, 60, 255, 0.4),
            rgba(135, 60, 255, 0) 80%
        ),
        linear-gradient(
            -45deg,
            rgba(120, 155, 255, 0.9) 25%,
            rgba(255, 160, 65, 0.9) 75%
        );
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const header = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    max-width: 1178px;
    margin: 0 auto;
    padding: 30px 10px 30px 10px;
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
    max-width: 1096px;
`

export const ol = styled.ol``

export const li = styled.li`
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 4px;
`
