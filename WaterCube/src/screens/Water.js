import React, {useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MySlider from '../components/Slider';
import Container from '../components/Container';

const Energy = (props) => {

const data = [
    {month:'January',icon:'drop',familyIcon:'entypo'},
    {month:'February',icon:'drop',familyIcon:'entypo'},
    {month:'March',icon:'drop',familyIcon:'entypo'},
    {month:'April',icon:'drop',familyIcon:'entypo'},
    {month:'May',icon:'drop',familyIcon:'entypo'},
    {month:'June',icon:'drop',familyIcon:'entypo'},
    {month:'July',icon:'drop',familyIcon:'entypo'},
    {month:'August',icon:'drop',familyIcon:'entypo'},
    {month:'September',icon:'drop',familyIcon:'entypo'},
    {month:'October',icon:'drop',familyIcon:'entypo'},
    {month:'November',icon:'drop',familyIcon:'entypo'},
    {month:'December',icon:'drop',familyIcon:'entypo'},
]

useEffect(() => {

  const unsubscribe = props.navigation.addListener('tabPress', (e) => {
    e.preventDefault();
    props.navigation.navigate('Home', { screen: 'Tab7', title:'Water usage' })
  });

  return unsubscribe;
}, []);

const renderItem = ({ item, index }) => {

    return(
        <MySlider month={item.month} icon={item.icon} familyIcon={item.familyIcon} />
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