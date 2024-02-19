import * as S from './styles'

export const Content = ({
    filterUsers,
    setIsReveal,
    setIsModalActive,
    setCurrentUser
}) => {
    return (
        <S.ul onClick={() => setIsReveal(false)}>
            {filterUsers.map((el) => (
                <S.li key={el.id}>
                    <S.avatar
                        src={el.avatar_url}
                        alt="img"
                        onClick={() => {
                            setIsModalActive(true)
                            setCurrentUser(el.login)
                        }}
                    />
                    <S.span>{el.login}</S.span>
                </S.li>
            ))}
        </S.ul>
    )
}
