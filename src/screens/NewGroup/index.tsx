import { Container, Content, Icon } from "./styles";
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button'
import { Input } from "@components/Input";

export function NewGroup() {

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="New Team"
                    subtitle="create the team to add people"
                />

                <Input placeholder="New Team"/>
                <Button
                    title='Create'
                    style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    );
}
