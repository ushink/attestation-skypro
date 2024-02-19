// import { login } from '../../mock/login'
import { useEffect, useMemo, useState } from 'react'
import { useGetAllLoginsQuery } from '../../services/userApi'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setAllLogins } from '../../store/slices/userSlice'
import { Pagination } from '../../components/Pagination/Pagination'
import { Modal } from '../../components/Modal/Modal'
import SortRepos from '../../components/SortRepos/SortRepos'

export const Main = () => {
    const dispatch = useDispatch()

    const logins = useSelector((state) => state.users.items)
    const totalCount = useSelector((state) => state.users.totalCount)
    const currentPage = useSelector((state) => state.users.currentPage)
    const perPage = useSelector((state) => state.users.perPage)

    const [search, setSearch] = useState('')
    const [isModalActive, setIsModalActive] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    // сортировка
    const [orderOption, setOrderOption] = useState('—')
    const [isReveal, setIsReveal] = useState(false)
    const [paramsSort, setParamsSort] = useState('')

    const { data: allLoginsData } = useGetAllLoginsQuery({
        searchValue: search.trim().toLowerCase(),
        sort: paramsSort,
        perPage: perPage,
        page: currentPage
    })
    console.log(allLoginsData)

    useEffect(() => {
        try {
            dispatch(setAllLogins(allLoginsData))
        } catch (error) {
            console.log(error.message)
        }
    }, [allLoginsData])

    const filterUsers = useMemo(() => {
        let users = [...logins]

        if (search !== '') {
            users = users?.filter(({ login }) =>
                login.toLowerCase().includes(search.trim().toLowerCase())
            )
        }
        if (orderOption === 'возрастанию') {
            setParamsSort('asc')
        }
        if (orderOption === 'убыванию') {
            setParamsSort('desc')
        }

        return users
    }, [logins, search, orderOption])

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
                <S.menu>
                    <S.span>{totalCount} Users Found</S.span>
                    <SortRepos
                        orderOption={orderOption}
                        setOrderOption={setOrderOption}
                        isReveal={isReveal}
                        setIsReveal={setIsReveal}
                    />
                </S.menu>
                {filterUsers && (
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
                )}
                <Modal
                    isActive={isModalActive}
                    setIsActive={setIsModalActive}
                    currentUser={currentUser}
                />
            </S.main>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                perPage={perPage}
            />
        </S.wrapper>
    )
}
