import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Group Name"
                subtitle="add the Group and split the team"
            />
            <Form>
                <Input
                    placeholder="Name"
                    autoCorrect={false} //n tenta corrigir na hora de digitar
                />
                <ButtonIcon icon="add" />
            </Form>
            <Filter
                title="Team A"
                isActive
            />
        </Container>
    );
}