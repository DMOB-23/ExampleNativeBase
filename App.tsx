import { NativeBaseProvider, extendTheme } from 'native-base';
import ExampleScreen from './src/screens/example/ExampleScreen';

const App = () => {
  const { colors } = extendTheme({});

  const customTheme = extendTheme({
    colors: {
      primary: colors.orange,
    },
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <ExampleScreen />
    </NativeBaseProvider>
  );
};

export default App;
