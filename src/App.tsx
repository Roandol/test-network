import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import CodeLeapApp from './CodeLeapApp';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CodeLeapApp />
      </ThemeProvider>
    </Provider >
  );
}

export default App;

