import { Container, Messager } from "./styles";

type Props = {
    message: string;
}

export function ListEmpty ({ message }: Props) {
    return (
        <Container>
            <Messager>
                {message}
            </Messager>
        </Container>
    )
}