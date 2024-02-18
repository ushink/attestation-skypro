import * as S from './styles'
import { useState } from 'react'

export default function SortRepos({
    setRevealRepos,
    revealRepos,
    Repos,
    setRepos
}) {
    const [defaultRepos, setDefaultRepos] = useState(true)
    const [moreRepos, setMoreRepos] = useState(false)
    const [lessRepos, setLessRepos] = useState(false)

    const toggleDefaultRepos = () => {
        setDefaultRepos(!defaultRepos)
        setMoreRepos(false)
        setLessRepos(false)
        setRepos('умолчанию')
    }

    const toggleMoreRepos = () => {
        setMoreRepos(!moreRepos)
        setDefaultRepos(false)
        setLessRepos(false)
        setRepos('возрастанию')
    }

    const toggleLessRepos = () => {
        setLessRepos(!lessRepos)
        setMoreRepos(false)
        setDefaultRepos(false)
        setRepos('убыванию')
    }

    return (
        <S.filter>
            <S.title>Сортировка по:</S.title>
            <S.filterBox>
                <S.button
                    className={revealRepos && 'active'}
                    onClick={() => setRevealRepos(!revealRepos)}
                >
                    {Repos}
                </S.button>
                {revealRepos && (
                    <S.menu>
                        <S.list>
                            <S.item href="#" onClick={toggleDefaultRepos}>
                                {defaultRepos ? (
                                    <S.activeItem>{Repos}</S.activeItem>
                                ) : (
                                    'умолчанию'
                                )}
                            </S.item>
                            <S.item href="#" onClick={toggleMoreRepos}>
                                {moreRepos ? (
                                    <S.activeItem>{Repos}</S.activeItem>
                                ) : (
                                    'возрастанию'
                                )}
                            </S.item>
                            <S.item href="#" onClick={toggleLessRepos}>
                                {lessRepos ? (
                                    <S.activeItem>{Repos}</S.activeItem>
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
