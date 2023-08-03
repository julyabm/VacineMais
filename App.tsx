import { StatusBar } from 'expo-status-bar';
import { AuthRoutes } from './src/navigation/auth.routes';
import { ThemeProvider } from 'styled-components';
import light from './src/styles/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthRoutes />
    </ThemeProvider>
  );
}