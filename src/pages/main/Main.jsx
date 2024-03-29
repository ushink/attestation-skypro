import * as S from './styles'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllLoginsQuery } from '../../services/userApi'
import { setAllLogins, setError } from '../../store/slices/userSlice'
import { Pagination } from '../../components/Pagination/Pagination'
import { Modal } from '../../components/Modal/Modal'
import { SortRepos } from '../../components/SortRepos/SortRepos'
import { Content } from '../../components/Content/Content'
import { toast } from 'react-toastify'

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

    const { data: allLoginsData, error } = useGetAllLoginsQuery({
        searchValue: search.trim().toLowerCase(),
        sort: paramsSort,
        perPage: perPage,
        page: currentPage
    })

    useEffect(() => {
        try {
            dispatch(setAllLogins(allLoginsData))
        } catch (error) {
            console.log(error.message)
        }
    }, [allLoginsData])

    useEffect(() => {
        if (error?.status == 422) {
            toast.info('Enter the user is login')
            dispatch(setError())
        }
        if (error?.status == 403) {
            toast.error('Oops... Try again later')
            dispatch(setError())
        }
    }, [error])

    const filterUsers = useMemo(() => {
        let users = [...logins]

        setTimeout(() => {
            if (search !== '') {
                users = users?.filter(({ login }) =>
                    login.toLowerCase().includes(search.trim().toLowerCase())
                )
            }
            if (orderOption === 'возрастанию') {
                setParamsSort('asc')
                return
            }
            if (orderOption === 'убыванию') {
                setParamsSort('desc')
            }
        }, 500)

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
                    <Content
                        filterUsers={filterUsers}
                        setIsReveal={setIsReveal}
                        setIsModalActive={setIsModalActive}
                        setCurrentUser={setCurrentUser}
                    />
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
