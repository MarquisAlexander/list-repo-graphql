import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApolloProvider} from '@apollo/client';
import client from './src/services/api';
import AppRoutes from './src/rotas';
import DataProvider from './src/context/DataContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <DataProvider>
          <View style={{flex: 1}}>
            <AppRoutes />
          </View>
        </DataProvider>
      </SafeAreaView>
    </ApolloProvider>
  );
}

export default App;
