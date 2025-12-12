import React, {useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MySlider from '../components/Slider';
import Container from '../components/Container';

const Energy = (props) => {

const data = [
    {month:'January',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'February',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'March',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'April',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'May',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'June',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'July',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'August',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'September',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'October',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'November',icon:'lightning-bolt',familyIcon:'material-community'},
    {month:'December',icon:'lightning-bolt',familyIcon:'material-community'},
]

useEffect(() => {

    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('Home', { screen: 'Tab6', title:'Energy usage' })
    });
  
    return unsubscribe;
}, []);

const renderItem = ({ item, index }) => {

    return(
        <MySlider month={item.month} icon={item.icon} familyIcon={item.familyIcon}  />
    )
}

return (

  <Container style={styles.container}>
     <FlatList
        data={data}
        renderItem={renderItem}
      />
  </Container>

);

};

const styles = StyleSheet.create({

  container: {
    marginBottom:50
  },
  
  });
  
  export default Energy;