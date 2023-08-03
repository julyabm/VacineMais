import 'styled-components';
import light from './light.js';


declare module 'styled-components' {
  type ThemeType  = typeof light;

  export interface DefaultTheme extends ThemeType { }
}