import { login } from '../../mock/login'
import * as S from './styles'

export const Main = () => {
    return (
        <S.wrapper>
            <S.header>
                <S.form action="#">
                    <S.input type="search" placeholder="Поиск по логину" />
                </S.form>
            </S.header>
            <S.main>
                <S.ol>
                    {login.map((el) => (
                        <S.li key={el.id}>{el.login}</S.li>
                    ))}
                </S.ol>
            </S.main>
        </S.wrapper>
    )
}
