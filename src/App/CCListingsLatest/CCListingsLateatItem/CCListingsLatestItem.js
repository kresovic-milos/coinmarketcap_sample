/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, ListItem, Text } from 'react-native-elements';

const CCListingsLatestItem = ({
  symbol,
  name,
  quote: {
    USD: { price, percent_change_24h: change24 }
  }
}) => {
  const isTrending = change24 > 0;
  const trendingColor = isTrending ? '#008000' : '#ff0000';
  const trendingIcon = isTrending ? 'trending-up' : 'trending-down';
  return (
    <ListItem
      leftIcon={<Icon size={38} name={trendingIcon} color={trendingColor} />}
      title={<Text style={styles.title}>{symbol} </Text>}
      subtitle={<Text>{name}</Text>}
      rightTitle={
        <Text style={[styles.title, { color: trendingColor }]}>{change24.toFixed(2)}%</Text>
      }
      rightSubtitle={<Text style={styles.price}> ${price.toFixed(2)}</Text>}
      bottomDivider
    />
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 18 }
});

export default CCListingsLatestItem;
