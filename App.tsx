import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
import UserProvider from './src/context/UserContext';

function App(): JSX.Element {
  return (
    <UserProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
