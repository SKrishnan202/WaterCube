import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';
import Container from '../components/Container';

const data = [
  {
    image: require("../assets/icons/filter.png"),
    title: 'Order New Air Filters',
    number: '60%',
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Order Mineral Cartridge',
    number: '18 pts',
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Order Low Humidity Service Pack',
    number: '25%',
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Order Charcoal Cartridge',
    number: 112,
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Order UV Led Cartridge',
    number: 468,
  },
  {
    image: require("../assets/icons/twodrop.png"),
    title: 'Order Genesis Accessories',
    number: 13,
  },
];


const Services2 = (props) => {

  useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab3', title:'Control Panel 2' })
    });
  
    return unsubscribe;
}, []);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4 }}
      />
    );
  }, []);

  
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <StatusBar style="auto" />
    </Container>
  );
}

export default Services2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 25
  },

  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
});