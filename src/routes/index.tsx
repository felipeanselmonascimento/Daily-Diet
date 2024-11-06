import { NavigationContainer } from '@react-navigation/native' // core de navegacao
import { AppRoutes } from './app.routes'
import { View } from 'react-native'


export function Routes() { //como um contexto para as rotas 
    return (
        // <View style={{style: 1, backgroundColor}}>        
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        // </View>
    )
}