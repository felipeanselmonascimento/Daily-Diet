import { Groupcard } from '@components/GroupCard';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native';

export function Groups() {

    const [groups, setGroups] = useState<string[]>(['RocketSeat Team', 'Prodec Team', 'eGovTeam'])

    const { navigate } = useNavigation()

    function handleNewGroup () {
        navigate('new') //sem sugestoes de qual opcoes de rota tem, por isso criado o navigation.d.ts
    }

    return (
        <Container>
            <Header />
            <Highlight
                title='Team'
                subtitle='Play with your Team'
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => <Groupcard title={item} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message='What about to Sign up the first Team??' />}
            />

            <Button
                title='Create new team'
                onPress={handleNewGroup}
            />

        </Container>
    );
}

