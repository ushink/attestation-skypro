import styled from 'styled-components'

export const wrapper = styled.div`
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
    background-repeat: no-repeat;
    background-size: cover;
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
    background-color: ${(props) => props.$active && '#4caf50'};
    color: ${(props) => props.$active && 'white'};
`
