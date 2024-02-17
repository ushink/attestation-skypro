// import { login } from '../../mock/login'
import { useState } from 'react'
import { useGetAllLoginsQuery } from '../../services/userApi'
import * as S from './styles'

export const Main = () => {
    const [search, setSearch] = useState('')

    const { data } = useGetAllLoginsQuery(search.trim().toLowerCase())
    const filterUsers = () => {
        let users = data?.items
        if (search !== '') {
            users = users?.filter(({ login }) =>
                login.toLowerCase().includes(search.trim().toLowerCase())
            )
        }
        return users
    }

    return (
        <S.wrapper>
            <S.header>
                <S.title>Поиск пользователей в Github</S.title>
                <S.form action="#">
                    <S.input
                        type="search"
                        placeholder="Поиск по логину"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </S.form>
            </S.header>
            <S.main>
                {filterUsers() && (
                    <S.ul>
                        {filterUsers().map((el) => (
                            <S.li key={el.id}>
                                <S.avatar src={el.avatar_url} alt="img" />
                                <S.span>{el.login}</S.span>
                            </S.li>
                        ))}
                    </S.ul>
                )}
            </S.main>
        </S.wrapper>
    )
}
