import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Card = ({ item, onPress, style, numberStyle, imageStyle }) => {
    const { image, title, number } = item;
    return (
        <LinearGradient
            colors={['#ffffff', '#c4e5f2']}
            style={[styles.container,style]}
            start={{ x: 0, y: style.flexDirection === 'row' ? 0 : 1 }}
            end={{ x: style.flexDirection === 'row' ? 1 : 0, y: 0 }}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={[styles.background,style]}>

                <Image source={image} style={[styles.image, imageStyle]} />
                <Text style={[styles.number, numberStyle]}>{number}</Text>
                <Text style={styles.text}>{title}</Text>


            </TouchableOpacity>
        </LinearGradient>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        padding: 14,
        flex: 1,
        borderRadius: 10,
        borderColor: '#c4c4c4',
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin:3
    },
    background: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
    },
    text: {
        marginTop: 8,
        fontSize: 16,
    },
    number: {
        fontSize: 36,
        color: '#007fff'
    }
});
