import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CCListingsLatest from './CCListingsLatest';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CCListingsLatest />
      </SafeAreaView>
    </>
  );
};

export default App;
