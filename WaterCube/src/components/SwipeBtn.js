import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View,Text } from 'react-native';
import { SwipeButton } from 'react-native-expo-swipe-button';

import {
  faChevronRight,
  faDroplet,
  faDropletSlash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function SwipeBtn() {

  const Drop = require("../assets/icons/drop.png")
  const DropCross = require("../assets/icons/dropcross.png")
  const [swapIcon, setSwapIcon] = useState(true)

  return (

         <View style={{marginBottom:45}}>
<SwipeButton
        Icon={
          swapIcon?<FontAwesomeIcon icon={faDroplet} size={50} color="#82c75f" />:<FontAwesomeIcon icon={faDropletSlash} size={50} color="#d14444" />
          //<Image source={swapIcon?Drop:DropCross} style={{width:80, height:80}} />
        }
        iconContainerStyle={{
          backgroundColor:'#fff',
          borderColor: swapIcon?'#82c75f':'#d14444',
          borderWidth: 1
        }}
        onComplete={() => {setSwapIcon(!swapIcon)}}
        onSwipeStart={() => {setSwapIcon(true)}}
        title="Make water"
        titleStyle={{
          color:'#ffffff',
          fontSize:19
        }}
        borderRadius={10}
        containerStyle={{
          marginVertical:0,
          marginHorizontal:10
        }}
        containerGradientProps={{
          colors: ['#82c75f', '#289abe'],
          start: [0, 1],
          end: [1, 0],
        }}
        underlayTitle="Stop Water"
        underlayTitleStyle={{
          color:'#ffffff',
          fontSize:19
        }}
        underlayStyle={{
          borderRadius: 10,
          
        }}
        underlayContainerGradientProps={{
          colors: ['#d14444', '#d14444'],
          start: [1, 1],
          end: [1, 1],
        }}
      />
      
      {swapIcon?<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" style={{position: 'absolute', right:20, top:25}} />:null}
</View>
  );

}
