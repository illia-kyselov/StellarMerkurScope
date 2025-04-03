import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({
    value = '',
    onChangeText = () => { },
    label = '',
    placeholder = '',
    containerStyle,
    inputStyle,
    labelStyle
}) {
    const isEmpty = value.trim().length === 0;

    return (
        <View
            style={[
                styles.inputContainer,
                isEmpty ? styles.centeredContainer : styles.floatingContainer,
                containerStyle
            ]}
        >
            {!isEmpty && (
                <Text style={[styles.floatingLabel, labelStyle]}>
                    {label}
                </Text>
            )}
            <TextInput
                style={[
                    styles.input,
                    isEmpty ? styles.inputWhenEmpty : styles.inputWhenFilled,
                    inputStyle
                ]}
                placeholder={placeholder}
                placeholderTextColor="rgba(255,255,255,0.5)"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        height: 60,
        backgroundColor: '#01366D',
        borderRadius: 13,
        paddingHorizontal: 16
    },
    centeredContainer: {
        justifyContent: 'center'
    },
    floatingContainer: {
        justifyContent: 'flex-start'
    },
    floatingLabel: {
        position: 'absolute',
        top: 6,
        left: 16,
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 15,
        color: '#EBEBF599'
    },
    input: {
        fontFamily: 'TT Travels',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF'
    },
    inputWhenEmpty: {},
    inputWhenFilled: {
        marginTop: 28
    }
});
