import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    group: string;
}

export function Players() {

    const [team, setTeam] = useState('Team A')
    const [players, setPlayers] = useState(['Lipex', 'Felipe', 'Joao', 'Pedro', 'Thiago', 'fds', 'Pedfsdfro', 'Thifsdago', 'Klebfsfinho'])

    const route = useRoute() //acessar os parametros passados pela rota
    const { group } = route.params as RouteParams

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="add the Group and split the team"
            />
            <Form>
                <Input
                    placeholder="Name"
                    autoCorrect={false} //n tenta corrigir na hora de digitar
                />
                <ButtonIcon icon="add" />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Team A', 'Team B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal //flatlist um do lado do outro
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() => <ListEmpty message='There is no people in this team.' />}
                showsVerticalScrollIndicator={false} //tira barra de rolagem
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && { flex: 1}
                ]}
            />
            <Button
                title="Remove Team"
                type="SECONDARY"
            />
        </Container>
    );
}