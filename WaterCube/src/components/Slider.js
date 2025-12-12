import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';

const MySlider = ({ month, icon, familyIcon }) => {
    const [value, setValue] = useState(0);

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer]}>
                <Text style={styles.month}>{month}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>

            <View style={[styles.sliderContainer]}>
                <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={3000}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 12, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                            <Icon
                                name={icon}
                                type={familyIcon}
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="#8acc58"
                            />
                        ),
                    }}
                />
            </View>

        </View>
    );
};

export default MySlider;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        
    },
    sliderContainer: {
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:15

    },
    month: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold'
    },
    value:{
        fontSize: 16,
        color: '#000000',
    }
});

