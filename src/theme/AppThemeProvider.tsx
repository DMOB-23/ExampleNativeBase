import { NativeBaseProvider, extendTheme } from 'native-base';
import { PropsWithChildren } from 'react';

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { colors } = extendTheme({});

  const customTheme = extendTheme({
    colors: {
      primary: colors.orange,
      secondary: colors.lightBlue,
    },
  });

  return (
    <NativeBaseProvider theme={customTheme}>{children}</NativeBaseProvider>
  );
};

export default AppThemeProvider;
