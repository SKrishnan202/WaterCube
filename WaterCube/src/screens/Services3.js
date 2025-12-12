import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import Container from '../components/Container';

const data = [
  {
    image: require("../assets/icons/drop.png"),
    title: 'Gal/H',
    number: 1.68,
  },
  {
    image: require("../assets/icons/drops.png"),
    title: 'Gal/Day',
    number: 11.3,
  },
  {
    image: require("../assets/icons/humid.png"),
    title: 'Ambient Humidity',
    number: '99%',
  },
  {
    image: require("../assets/icons/temp.png"),
    title: 'System Power',
    number: '34 kWh',
  },
];


const Services3 = (props) => {

  useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab4', title:'Control Panel 3' })
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
        //scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        //ListFooterComponent={footer}
      />

      <StatusBar style="auto" />
    </Container>
  );
}

export default Services3;

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