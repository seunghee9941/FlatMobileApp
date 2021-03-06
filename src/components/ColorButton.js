import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export const ColorButton = ({ name }) => {
    return (
        <Pressable
            style={({pressed}) => [
                { backgroundColor: pressed ? '#51CDDE' : '#101010' }, styles.colorButton ]}>
            {({ pressed }) => (
                <Text style= {[ {color : pressed ? 'black' : 'white'}, styles.text ]}>
                    { name }
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    colorButton: {
        width: 160,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#51CDDE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    },
});
