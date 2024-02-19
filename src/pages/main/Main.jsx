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

    const [search, setSearch] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    // сортировка
    const [quantityRepos, setQuantityRepos] = useState('—')
    const [revealRepos, setRevealRepos] = useState(false)
    const [paramsSort, setParamsSort] = useState('')

    const { data: allLoginsData } = useGetAllLoginsQuery({
        searchValue: search.trim().toLowerCase(),
        sort: paramsSort,
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
        if (quantityRepos === 'возрастанию') {
            setParamsSort('asc')
        }
        if (quantityRepos === 'убыванию') {
            setParamsSort('desc')
        }

        return users
    }, [logins, search, quantityRepos])

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
                        Repos={quantityRepos}
                        setRepos={setQuantityRepos}
                        revealRepos={revealRepos}
                        setRevealRepos={setRevealRepos}
                    />
                </S.menu>
                {filterUsers && (
                    <S.ul onClick={() => setRevealRepos(false)}>
                        {filterUsers.map((el) => (
                            <S.li key={el.id}>
                                <S.avatar
                                    src={el.avatar_url}
                                    alt="img"
                                    onClick={() => {
                                        setModalActive(true)
                                        setCurrentUser(el.login)
                                    }}
                                />
                                <S.span>{el.login}</S.span>
                            </S.li>
                        ))}
                    </S.ul>
                )}
                <Modal
                    isActive={modalActive}
                    setIsActive={setModalActive}
                    currentUser={currentUser}
                />
            </S.main>
            <Pagination currentPage={currentPage} totalCount={totalCount} />
        </S.wrapper>
    )
}
