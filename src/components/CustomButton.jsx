import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function CustomButton({
    label = '',
    onPress = () => { },
    disabled = false,
    containerStyle,
    textStyle
}) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            onPressIn={() => {
                if (!disabled) {
                    setIsPressed(true);
                }
            }}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                disabled
                    ? styles.buttonDisabled
                    : isPressed
                        ? styles.buttonActive
                        : styles.buttonEnabled,
                containerStyle
            ]}
        >
            <Text
                style={[
                    styles.buttonText,
                    disabled ? styles.buttonTextDisabled : styles.buttonTextEnabled,
                    textStyle
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 54,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24
    },
    buttonDisabled: {
        backgroundColor: '#696969'
    },
    buttonEnabled: {
        backgroundColor: '#F1CE13'
    },
    buttonActive: {
        backgroundColor: '#FFDF80'
    },
    buttonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18
    },
    buttonTextDisabled: {
        color: '#FFFFFF40'
    },
    buttonTextEnabled: {
        color: '#FFFFFF'
    }
});
