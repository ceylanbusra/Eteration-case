

import { Provider } from 'react-redux';
import RootNavigation from './src/navigation/navigation';
import store from './src/store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeProvider/ThemeProvider';


function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNavigation />
        </ThemeProvider>
      </SafeAreaProvider>

    </Provider>
  );
}

export default App;