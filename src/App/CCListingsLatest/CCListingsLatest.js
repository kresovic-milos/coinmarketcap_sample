/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import CCListingsLatestItem from './CCListingsLateatItem';

const CCListingsLatest = ({ cryptocurrencies, fetchCCListingsLatest, inProgress }) => {
  const fetchCCListing = async () => {
    await fetchCCListingsLatest();
  };
  useEffect(() => {
    fetchCCListing();
  }, []);

  return (
    <View style={styles.body}>
      {inProgress && <ActivityIndicator />}

      {cryptocurrencies && (
        <FlatList
          keyExtractor={item => item}
          data={Object.keys(cryptocurrencies)}
          renderItem={({ item }) => <CCListingsLatestItem ccId={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {}
});

export default CCListingsLatest;
