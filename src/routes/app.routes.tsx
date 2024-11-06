import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'
import { Players } from '@screens/Players'
import { NewGroup } from '@screens/NewGroup'

const { Navigator, Screen } = createNativeStackNavigator() //strategia de navegacao q implementamos

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='groups' //nome da rota
                component={Groups} //quando a rota for chamada qual componente renderizar
            />
            <Screen
                name='new' //nome da rota
                component={NewGroup} //quando a rota for chamada qual componente renderizar
            />
            <Screen
                name='players' //nome da rota
                component={Players} //quando a rota for chamada qual componente renderizar
            />
        </Navigator>

    )
}






//cd screen equivale a uma rota