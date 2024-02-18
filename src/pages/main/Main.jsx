// import { login } from '../../mock/login'
import { useEffect, useState } from 'react'
import { useGetAllLoginsQuery } from '../../services/userApi'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setAllLogins, setCurrentPage } from '../../store/slices/userSlice'
import { createPages } from '../../utils/createPages'

export const Main = () => {
    const dispatch = useDispatch()

    const logins = useSelector((state) => state.users.items)
    const totalCount = useSelector((state) => state.users.totalCount)
    const currentPage = useSelector((state) => state.users.currentPage)
    console.log(logins)

    const [search, setSearch] = useState('')
    const [isActive, setIsActive] = useState(false)

    const pagesCount = Math.ceil(totalCount / 21)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    const { data } = useGetAllLoginsQuery({
        searchValue: search.trim().toLowerCase(),
        page: currentPage,
        pollingInterval: 3000
    })

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
            <S.footer>
                {pages.map((page, index) => (
                    <S.pagination
                        key={index}
                        $active={isActive}
                        onClick={() => {
                            dispatch(setCurrentPage(page))
                            setIsActive(!isActive)
                        }}
                    >
                        {page}
                    </S.pagination>
                ))}
            </S.footer>
        </S.wrapper>
    )
}
