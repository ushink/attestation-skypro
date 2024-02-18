import { useDispatch } from 'react-redux'
import * as S from './styles'
import { setCurrentPage } from '../../store/slices/userSlice'
import { createPages } from '../../utils/createPages'

export const Pagination = ({ totalCount, currentPage }) => {
    const dispatch = useDispatch()

    const pagesCount = Math.ceil(totalCount / 21)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    return (
        <S.footer>
            {pages.map((page, index) => (
                <S.pagination
                    key={index}
                    className={currentPage === page && 'active'}
                    onClick={() => {
                        dispatch(setCurrentPage(page))
                    }}
                >
                    {page}
                </S.pagination>
            ))}
        </S.footer>
    )
}
