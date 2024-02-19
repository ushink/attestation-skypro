import * as S from './styles'
import { useState } from 'react'

export const SortRepos = ({
    setIsReveal,
    isReveal,
    orderOption,
    setOrderOption
}) => {
    const [isMore, setIsMore] = useState(false)
    const [isLess, setIsLess] = useState(false)

    const toggleIsMore = () => {
        setIsMore(!isMore)
        setIsLess(false)
        setOrderOption('возрастанию')
    }

    const toggleIsLess = () => {
        setIsLess(!isLess)
        setIsMore(false)
        setOrderOption('убыванию')
    }

    return (
        <S.filter>
            <S.title>Сортировка по:</S.title>
            <S.filterBox>
                <S.button
                    className={isReveal && 'active'}
                    onClick={() => setIsReveal(!isReveal)}
                >
                    {orderOption}
                </S.button>
                {isReveal && (
                    <S.menu>
                        <S.list>
                            <S.item href="#" onClick={toggleIsMore}>
                                {isMore ? (
                                    <S.activeItem>{orderOption}</S.activeItem>
                                ) : (
                                    'возрастанию'
                                )}
                            </S.item>
                            <S.item href="#" onClick={toggleIsLess}>
                                {isLess ? (
                                    <S.activeItem>{orderOption}</S.activeItem>
                                ) : (
                                    'убыванию'
                                )}
                            </S.item>
                        </S.list>
                    </S.menu>
                )}
            </S.filterBox>
        </S.filter>
    )
}
