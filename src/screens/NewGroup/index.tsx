import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button'
import { Input } from "@components/Input";
import { useNavigation } from '@react-navigation/native';


export function NewGroup() {
    
    const [group, setGroup] = useState('');
    const { navigate } = useNavigation()

    function handleNewPlayers () {
        navigate('players', { group })
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="New Team"
                    subtitle="create the team to add people"
                />

                <Input
                    placeholder="New Team"
                    onChangeText={setGroup}
                />
                <Button
                    title='Create'
                    style={{ marginTop: 20 }}
                    onPress={handleNewPlayers}
                />
            </Content>
        </Container>
    );
}
