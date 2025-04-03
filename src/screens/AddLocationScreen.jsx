import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import BackButtonSVG from '../assets/settings/BackButtonSVG';

export default function AddLocationScreen({ navigation }) {
    const [coordinates, setCoordinates] = useState('');
    const isButtonDisabled = coordinates.trim().length === 0;

    const handleDone = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <View style={styles.header}>
                        <BackButtonSVG onPress={() => navigation.goBack()} />
                        <Text style={styles.headerTitle}>Add location</Text>
                    </View>
                    <Image
                        source={require('../assets/settings/manImage.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <CustomInput
                        value={coordinates}
                        onChangeText={setCoordinates}
                        label="Coordinates"
                        placeholder="Coordinates"
                    />
                </View>
                <CustomButton
                    label="Done"
                    onPress={handleDone}
                    disabled={isButtonDisabled}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F'
    },
    content: {
        flex: 1,
        marginTop: 18,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    headerTitle: {
        marginLeft: 18,
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13'
    },
    image: {
        width: 295,
        height: 205,
        alignSelf: 'center',
        marginBottom: 12
    }
});
