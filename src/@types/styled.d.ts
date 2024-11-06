import 'styled-components/native';
import theme from '../theme';

declare module 'styled-components/native' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}

// colocar esse arquivo para o ts saber as propriedades do theme