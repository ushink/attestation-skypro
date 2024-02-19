import { useGetUserQuery } from '../../services/userApi'
import * as S from './styles'

export function Modal({ isActive, setIsActive, currentUser }) {
    const { data: userData } = useGetUserQuery(currentUser)

    return (
        <S.modal
            $active={isActive}
            onClick={() => {
                setIsActive(false)
            }}
        >
            <S.content $active={isActive} onClick={(e) => e.stopPropagation()}>
                <S.avatar src={userData?.avatar_url} alt="img" />
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
                    {userData?.public_repos && (
                        <S.info>
                            Public repos: <b>{userData?.public_repos}</b>
                        </S.info>
                    )}
                </S.infoBox>
            </S.content>
        </S.modal>
    )
}
