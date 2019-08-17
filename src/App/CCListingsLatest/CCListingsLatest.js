/* eslint-disable react/prop-types */
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import CCListingsLatestItem from './CCListingsLateatItem';

const CCListingsLatest = ({ cryptocurrencies, fetchCCListingsLatest, inProgress }) => {
  const [onEndReachedCalledDuringMomentum, setOnEndReachedCalledDuringMomentum] = useState(false);

  const fetchCCListing = async () => {
    if (!onEndReachedCalledDuringMomentum) {
      await fetchCCListingsLatest();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };
  useEffect(() => {
    !inProgress && fetchCCListing();
  }, []);

  const initLoading = inProgress && isEmpty(cryptocurrencies);

  return (
    <View style={styles.body}>
      {initLoading && <ActivityIndicator />}

      {!isEmpty(cryptocurrencies) && (
        <FlatList
          keyExtractor={item => `${item}`}
          data={Object.keys(cryptocurrencies).sort(
            (a, b) =>
              cryptocurrencies[b].quote.USD.market_cap - cryptocurrencies[a].quote.USD.market_cap
          )}
          onEndReached={fetchCCListing}
          onEndReachedThreshold={0.01}
          onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
          initialNumToRender={20}
          renderItem={({ item }) => <CCListingsLatestItem ccId={item} />}
          ListFooterComponent={() =>
            inProgress && (
              <View
                style={{
                  position: 'relative',
                  paddingVertical: 20,
                  marginTop: 10,
                  marginBottom: 10
                }}>
                <ActivityIndicator animating size="large" />
              </View>
            )
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {}
});

export default CCListingsLatest;
