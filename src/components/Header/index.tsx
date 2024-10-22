import { BackButton, BackLogo, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackLogo />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}