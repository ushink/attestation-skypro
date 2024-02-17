// import { login } from '../../mock/login'
import { useEffect, useState } from 'react'
import { useGetAllLoginsQuery } from '../../services/userApi'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setAllLogins } from '../../store/slices/userSlice'

export const Main = () => {
    const dispatch = useDispatch()

    const logins = useSelector((state) => state.users.items)
    const totalCount = useSelector((state) => state.users.totalCount)
    const currentPage = useSelector((state) => state.users.currentPage)
    console.log(currentPage)

    const [search, setSearch] = useState('')

    const { data } = useGetAllLoginsQuery(search.trim().toLowerCase())

    useEffect(() => {
        try {
            dispatch(setAllLogins(data))
        } catch (error) {
            console.log(error.message)
        }
    }, [data])

    const filterUsers = () => {
        let users = logins
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
                <S.span>{totalCount} Users Found</S.span>
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
