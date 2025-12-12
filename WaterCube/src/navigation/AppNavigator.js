import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import {
    faGear,
    faBell,
    faListCheck,
    faBars,
    faList,
    faHome,
    faListUl,
    faBoltLightning,
    faWaveSquare,
    faDroplet
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Home from '../screens/Home';
import Services1 from '../screens/Services1';
import Services2 from '../screens/Services2';
import Services3 from '../screens/Services3';
import Alerts from '../screens/Alerts';
import Settings from '../screens/Settings';
import Energy from '../screens/Energy';
import Water from '../screens/Water';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = createMaterialTopTabNavigator()
const IconSize = 24;


function TabNavigator() {
    nav = useNavigation();
    return (
        <BottomTabs.Navigator
            initialRouteName={"Tab1"}
            tabBarPosition='bottom'
            screenOptions={{
                swipeEnabled:false,
                tabBarScrollEnabled: true,
                tabBarActiveTintColor: '#0c0c0c',
                tabBarInactiveTintColor: '#000000',
                tabBarShowLabel: true,
                tabBarShowIcon: true,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                tabBarIconStyle: {
                },
                tabBarStyle: {
                    //padding: 18,
                    backgroundColor: '#c4e5f280',
                    borderBlockColor: '#c4e5f280',
                    height: 70,
                    position: 'absolute',
                    bottom:0,
                    elevation: 0

                },
                tabBarItemStyle: {
                    width:120
                },
                headerShown:true

            }}>
            <BottomTabs.Screen name="Tab1" component={Home}
                options={{
                    headerTitle: 'Dashboard',
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={IconSize} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Tab2" component={Services1}
                options={{
                    headerTitle: 'Control Panel 1',
                    tabBarLabel: 'Panel 1',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faList} size={IconSize} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab3" component={Services2}
                options={{
                    headerTitle: 'Control Panel 2',
                    tabBarLabel: 'Panel 2',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faListUl} size={IconSize} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab4" component={Services3}
                options={{
                    headerTitle: 'Control Panel 3',
                    tabBarLabel: 'Panel 3',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faListCheck} size={IconSize} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Tab5" component={Alerts}
                options={{
                    headerTitle: 'Alerts',
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faList} size={IconSize} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab6" component={Energy}
                options={{
                    headerTitle: 'Energy',
                    tabBarLabel: 'Energy',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faWaveSquare} size={IconSize} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab7" component={Water}
                options={{
                    headerTitle: 'Water',
                    tabBarLabel: 'Water',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faDroplet} size={IconSize} color={color} />
                    ),
                }} />
            <BottomTabs.Screen name="Tab8" component={Settings}
                options={{
                    headerTitle: 'Settings',
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faGear} size={IconSize} color={color} />
                    ),
                }} />
        </BottomTabs.Navigator>
    );
}


function MainNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={({route}) => ({
                headerTitle:route.params?.title||'Dashboard',
                //headerShown: false,
                headerStyle: {
                    backgroundColor: '#e1f2f8',
                    //shadowColor: '#c4e5f280',
                    height: 60,
                    elevation: 0,
                },
                headerTintColor: '#000000',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    justifyContent: 'flex-start',
                    flex: 1
                },
                headerLeftContainerStyle: {
                    marginBottom: 10
                }

            })}
        >
            <Drawer.Screen name="Home" component={TabNavigator} options={{
                drawerIcon: () => <FontAwesomeIcon icon={faHome} color={'#007fff'} size={20} />
            }} />

        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                <Image source={require('../assets/icons/user.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 18, fontWeight: '600', alignSelf: 'flex-end', marginLeft: 10 }}>John Smith</Text>
            </View>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
                label="Dashboard"
                icon={() => <FontAwesomeIcon icon={faHome} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab1', title:'Dashboard' })}
                options={{title:'OK'}}
            />
            <DrawerItem
                label="Control Panel 1"
                icon={() => <FontAwesomeIcon icon={faList} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab2', title:'Control Panel 1' })}
            />

            <DrawerItem
                label="Control Panel 2"
                icon={() => <FontAwesomeIcon icon={faListUl} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab3', title:'Control Panel 2' })}
            />

            <DrawerItem
                label="Control Panel 3"
                icon={() => <FontAwesomeIcon icon={faListCheck} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab4', title: 'Control Panel 3' })}
            />

            <DrawerItem
                label="Alerts"
                icon={() => <FontAwesomeIcon icon={faBell} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab5', title:'Alerts' })}
            />

            <DrawerItem
                label="Energy"
                icon={() => <FontAwesomeIcon icon={faWaveSquare} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab6', title:'Energy usage'  })}
            />

            <DrawerItem
                label="Water"
                icon={() => <FontAwesomeIcon icon={faDroplet} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab7', title:'Water usage' })}
            />

            <DrawerItem
                label="Settings"
                icon={() => <FontAwesomeIcon icon={faGear} color={'#007fff'} size={20} />}
                onPress={() => props.navigation.navigate('Home', { screen: 'Tab8', title:'Settings' })}
            />
        </DrawerContentScrollView>
    );
}


const AppContainer = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppContainer;
