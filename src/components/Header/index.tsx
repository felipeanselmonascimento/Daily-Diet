import { BackButton, BackLogo, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    const { navigate } = useNavigation()

    function handleGoBack () {
        navigate('groups')
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackLogo />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}