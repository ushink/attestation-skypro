// import { login } from '../../mock/login'
import { useEffect, useState } from 'react'
import { useGetAllLoginsQuery } from '../../services/userApi'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setAllLogins } from '../../store/slices/userSlice'
import { Pagination } from '../../components/Pagination/Pagination'
import { Modal } from '../../components/Modal/Modal'

export const Main = () => {
    const dispatch = useDispatch()

    const logins = useSelector((state) => state.users.items)
    const totalCount = useSelector((state) => state.users.totalCount)
    const currentPage = useSelector((state) => state.users.currentPage)
    console.log(logins)

    const [search, setSearch] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [currentUser, setCurrentUser] = useState('')

    const { data: allLoginsData } = useGetAllLoginsQuery({
        searchValue: search.trim().toLowerCase(),
        page: currentPage
    })

    useEffect(() => {
        try {
            dispatch(setAllLogins(allLoginsData))
        } catch (error) {
            console.log(error.message)
        }
    }, [allLoginsData])

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
                <div></div>
                {filterUsers() && (
                    <S.ul>
                        {filterUsers().map((el) => (
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
