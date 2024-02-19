import { useEffect } from 'react'
import { useGetUserQuery } from '../../services/userApi'
import * as S from './styles'
import { toast } from 'react-toastify'

export function Modal({ isActive, setIsActive, currentUser }) {
    const { data: userData, isError } = useGetUserQuery(currentUser)

    useEffect(() => {
        if (isError) {
            toast.error('Упс... Попробуйте позже')
        }
    }, [isError])

    return (
        <S.modal
            $error={isError}
            $active={isActive}
            onClick={() => {
                setIsActive(false)
            }}
        >
            <S.content
                $active={isActive}
                $error={isError}
                onClick={(e) => e.stopPropagation()}
            >
                <S.avatar src={userData?.avatar_url} alt="img" />
                {userData?.name ||
                userData?.location ||
                userData?.public_repos ? (
                    <S.infoBox>
                        {userData?.name && (
                            <S.name>
                                Name: <b>{userData?.name}</b>
                            </S.name>
                        )}
                        {userData?.location && (
                            <S.info>
                                Location: <b>{userData?.location}</b>
                            </S.info>
                        )}
                        {userData?.public_repos !== 0 && (
                            <S.info>
                                Public repos: <b>{userData?.public_repos}</b>
                            </S.info>
                        )}
                    </S.infoBox>
                ) : (
                    <S.info>Подробная информация отсутствует</S.info>
                )}
            </S.content>
        </S.modal>
    )
}
