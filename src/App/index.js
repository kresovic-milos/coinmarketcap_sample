import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import CCListingsLatest from './CCListingsLatest';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header centerComponent={{ text: 'Coinmarketcap', style: { color: '#fff' } }} />
      <SafeAreaView style={styles.body}>
        <CCListingsLatest />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
export default App;
