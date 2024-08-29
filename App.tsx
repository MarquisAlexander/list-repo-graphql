import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApolloProvider} from '@apollo/client';
import client from './src/services/api';
import AppRoutes from './src/rotas';
import DataProvider from './src/context/DataContext';
import ErrorBoundary from 'react-native-error-boundary';
import {Fallback} from './src/components/FallbackComponent';

const FallbackComponent = ({error, resetErrorBoundary}) => (
  <Fallback error={error} resetErrorBoundary={resetErrorBoundary} />
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={backgroundStyle}>
        <ErrorBoundary
          FallbackComponent={FallbackComponent}
          onError={(error, info) => {
            console.log('Erro:', error, info);
          }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <DataProvider>
            <View style={{flex: 1}}>
              <AppRoutes />
            </View>
          </DataProvider>
        </ErrorBoundary>
      </SafeAreaView>
    </ApolloProvider>
  );
}

export default App;
