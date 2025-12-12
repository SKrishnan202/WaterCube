import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import Card from '../components/Card';
import Container from '../components/Container';

const data = [
  {
    image: require("../assets/icons/pump.png"),
    title: 'Pump Failure!',
    number: '60%',
  },
  {
    image: require("../assets/icons/uv.png"),
    title: 'Change UV Light',
    number: '18 kWh',
  },
  {
    image: require("../assets/icons/outage.png"),
    title: 'Power Outage System Shutdown',
    number: 4.68,
  },
  {
    image: require("../assets/icons/filter.png"),
    title: 'Replace Air Filters',
    number: 112.3,
  },
];


const Home = (props) => {

  useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab5', title:'Alerts' })
    });
  
    return unsubscribe;
}, []);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4 }}
        numberStyle={{color:'orange'}}
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 25
  },

  contentContainerStyle: {
    paddingHorizontal: 4,
    paddingBottom: 49,
  },
});