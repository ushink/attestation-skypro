import { useNavigate } from 'react-router'
import * as S from './styles'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <S.header>
            <S.title>404 Not Found</S.title>
            <S.btn onClick={() => navigate('/')}>Вернуться на главную</S.btn>
        </S.header>
    )
}
