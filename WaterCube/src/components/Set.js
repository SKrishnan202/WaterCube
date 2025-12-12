import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';


const Card = ({ item, onPress, style, numberStyle }) => {
    const { image, title, number } = item;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.container, style]}>
            <Image source={image} style={styles.image} />
            <Text style={[styles.number,numberStyle]}>{number}</Text>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        padding: 14,
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#ececec',
        borderColor: '#c4c4c4',
        borderWidth: 1,
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
        color:'#007fff'
    }
});
