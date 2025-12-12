import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Card from '../components/Card';
import SwipeButton from 'rn-swipe-button';
import Container from '../components/Container';
import { LinearGradient } from 'expo-linear-gradient';
import SwipeBtn from '../components/SwipeBtn';
import {
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    image: require("../assets/icons/humid.png"),
    title: 'Ambient Humidity',
    number: '60%',
  },
  {
    image: require("../assets/icons/drop.png"),
    title: 'Gal/H',
    number: 4.68,
  },
  {
    image: require("../assets/icons/temp.png"),
    title: 'System Power',
    number: '18 kWh',
  }, null,
  {
    image: require("../assets/icons/humid.png"),
    title: 'Wind',
    number: '30 knt',
  },
  {
    image: require("../assets/icons/drops.png"),
    title: 'Gal/Day',
    number: 112.3,
  },
];


const Home = (props) => {


  const [buttonTitle, setButtonTitle] = useState("Make Water!");
  const [buttonColors, setButtonColors] = useState({
    railFillBackgroundColor: "#007fff",
    thumbIconBackgroundColor: "#007fff",
    railBackgroundColor: "green",
  });

  useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab1', title: 'Dashboard' })
    });

    return unsubscribe;
  }, []);


  const handleSwipeSuccess = () => {

    // Toggle the button title
    if (buttonTitle === "Make Water!") {
      setButtonTitle("Water's running");
    } else {
      setButtonTitle("Make Water!");
    }

    // Toggle the button colors
    if (buttonColors.railBackgroundColor === "green") {
      setButtonColors({
        railFillBackgroundColor: "#007fff",
        thumbIconBackgroundColor: "#ffffff",
        railBackgroundColor: "#007fff",
      });
      alert('Water Cube Activated!');
    } else {
      setButtonColors({
        railFillBackgroundColor: "4cd9e2",
        thumbIconBackgroundColor: "#ffffff",
        railBackgroundColor: "transparent",
      });
      alert('Water Cube Deactivated!');
    }

  };

  const renderItem = ({ item, index }) => {
    return (item != null ?
      <Card
        item={item}
        onPress={null}
        style={{ marginRight: index % 2 === 0 ? 4 : 0, marginBottom: 4, flexDirection: index === 2 ? 'row' : 'column' }}
        numberStyle={{ fontSize: index === 2 ? 26 : 30, marginRight: index === 2 ? 20 : 0 }}
        imageStyle={{ width: index === 2 ? 80 : 100, height: index === 2 ? 80 : 100 }}
      /> : null
    );
  };

  const footer = () => {
    return (       
    
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
{/* 
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={100}
          height={70}
          width={300}
          title={buttonTitle}
          titleColor='#FFF'
          onSwipeSuccess={handleSwipeSuccess}
          railFillBackgroundColor={buttonColors.railFillBackgroundColor}
          railFillBorderColor="#fff"
          thumbIconBackgroundColor={buttonColors.thumbIconBackgroundColor}
          thumbIconBorderColor="#fff"
          railBackgroundColor={buttonColors.railBackgroundColor}
          railBorderColor="#fff"
        /> */}
        
        <SwipeBtn />
      </View>
    );
  }

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        //ListFooterComponent={footer}
      />
      <SwipeBtn />
    </Container>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // padding: 25,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 25
  },
  contentContainerStyle: {
    //paddingHorizontal: 4,
    paddingBottom: 49,
  },
});